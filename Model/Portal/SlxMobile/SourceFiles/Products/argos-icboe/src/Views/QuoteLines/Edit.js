import declare from 'dojo/_base/declare';
import domConstruct from 'dojo/dom-construct';
import string from 'dojo/string';
import utility from 'argos/Utility';
import Edit from 'argos/Edit';
import LookupField from 'argos/Fields/LookupField';
import TextField from 'argos/Fields/TextField';
import MODEL_NAMES from '../../Models/Names';
import MODEL_TYPES from 'argos/Models/Types';
import getResource from 'argos/I18n';
import PricingAvailabilityService from '../../PricingAvailabilityService';

const resource = getResource('quoteItemEdit');

/**
 * @class crm.Views.QuoteLines.Edit
 *
 * @extends argos.Edit
 *
 * @requires argos.Edit
 *
 */
const __class = declare('icboe.Views.QuoteLines.Edit', [Edit], {
  // View Properties
  id: 'quote_line_edit',
  detailView: 'quote_line_detail',
  insertSecurity: 'Entities/Quote/Add',
  updateSecurity: 'Entities/Quote/Edit',
  resourceKind: 'quoteItems',
  titleText: resource.titleText,
  productText: resource.productText,
  quantityText: resource.quantityText,
  quoteText: resource.quoteText,
  priceText: resource.priceText,
  adjustedPriceText: resource.adjustedPriceText,
  extendedPriceText: resource.extendedPriceText,
  unitOfMeasureText: resource.unitOfMeasureText,
  unitsOfMeasureTitle: resource.unitsOfMeasureTitle,
  modelName: MODEL_NAMES.QUOTEITEM,
  accountLinked: false,
  pricingQueryMap: {
    'SlxLocation': function queryLocation(name) {
      const model = App.ModelManager.getModel(MODEL_NAMES.LOCATION, MODEL_TYPES.SDATA);
      return model.getEntry(null, { where: `Description eq "${name}"`});
    },
    'UnitOfMeasure': function queryUnit(name) {
      const model = App.ModelManager.getModel(MODEL_NAMES.UNITOFMEASURE, MODEL_TYPES.SDATA);
      return model.getEntry(null, { where: `Name eq "${name}"`});
    },
  },

  init: function init() {
    this.inherited(arguments);
    this.fields.Price.disable();
    this.fields.ExtendedPrice.disable();
    this.fields.CalculatedPrice.disable();
    this.connect(this.fields.Product, 'onChange', this.onProductChange);
    this.connect(this.fields.Quantity.inputNode, 'onblur', this.onQuantityChange);
  },
  _applyContextFrom: function _applyContextFrom(entity, context) {
    if (context[entity]) {
      this.fields[entity].setSelection(context[entity]);
      this.fields[entity].disable();
      if (context[entity].Account) {
        this.accountLinked = context[entity].Account.ErpExtId ? true : false;
      }
    } else {
      this.fields[entity].enable();
    }
  },
  _applyLogicValues: function _applyLogicValues(values) {
    const product = this.fields.Product.getSelection();
    values.ProductName = product.Name;
    values.Family = product.Family;
    values.ActualId = product.ActualId;
    values.CommodityType = product.CommodityType;
  },
  _applyQuoteContext: function _applyQuoteContext(context) {
    this._applyContextFrom('Quote', context);
    return this;
  },
  applyContext: function applyContext() {
    this.inherited(arguments);
    if (this.options && this.options.context) {
      this._applyQuoteContext(this.options.context);
    }
    this.getProductDependants().forEach((f) => {
      this.fields[f].disable();
    });
  },
  getProductDependants: function getProductDependants() {
    return ['UnitOfMeasure'];
  },
  onInsert: function onInsert(values) {
    this._applyLogicValues(values);
    this.inherited(arguments);
  },
  onRefresh: function onRefresh() {
    this.inherited(arguments);
    if (this.options.insert) {
      this.fields.Quantity.disable();
    } else {
      this.fields.Quantity.enable();
    }
    this.getProductDependants().forEach((f) => {
      this.fields[f].enable();
      this.fields[f].dependsOn = null;
      this.fields[f].where = null;
    });
  },
  processEntry: function processEntry(entry) {
    const dependants = this.getProductDependants();
    if (entry && entry.Product) {
      dependants.forEach((f) => {
        this.fields[f].enable();
        this.fields[f].dependsOn = 'Product';
        this.fields[f].where = `Product.Id eq "${entry.Product.$key}"`;
      });
    } else {
      dependants.forEach((f) => {
        this.fields[f].disable();
      });
    }
    return entry;
  },
  handlePricingSuccess: function handlePricingSuccess(results) {
    if (results && results.Children && results.Children.length) {
      try {
        const item = results.Children[0];
        for (const prop in item.Properties) {
          if (!prop) {
            continue;
          }
          let propName = prop;
          if (propName && propName.search('.') !== -1) {
            propName = propName.split('.')[0];
          }
          let field = this.fields[propName];
          if (!field) {
            if (!this.pricingQueryMap[propName]) {
              field = new TextField({
                disabled: true,
                label: propName,
                name: propName,
                property: propName,
              });
            } else {
              field = new LookupField({
                disabled: true,
                label: propName,
                name: propName,
                property: propName,
              });
            }
            const row = domConstruct.toDom(this.propertyTemplate.apply(field, this));
            field.renderTo(row);
            // domConstruct.place(row, this.contentNode, 'last');
            field.disable();
            this.fields[propName] = field;
          }
          const toDouble = Number.parseFloat(item.Properties[prop]);
          const toDecimal = Number.parseInt(item.Properties[prop]);
          if (toDouble) {
            field.setValue(toDouble);
          } else if (toDecimal) {
            field.setValue(toDecimal);
          } else {
            let value = item.Properties[prop];
            if (value.search('#') !== -1) {
              value = value.split('#')[0];
            }
            if (this.pricingQueryMap[propName]) {
              this.pricingQueryMap[propName](value).then((result) => { // eslint-disable-line
                field.setSelection(result);
              });
            } else {
              field.setValue(value);
            }
          }
        }
      } catch (err) {
        console.error(err); // eslint-disable-line
      }
    }
  },
  formatDependentQuery: function formatDependentQuery(dependentValue, theFormat, property) {
    return string.substitute(theFormat, [utility.getValue(dependentValue, property || '$key')]);
  },
  onProductChange: function onProductChange(value, field) {
    this.getProductDependants().forEach((f) => {
      this.fields[f].enable();
      this.fields[f].dependsOn = 'Product';
      this.fields[f].where = `Product.Id eq "${field.currentSelection.$key}"`;
    });
    if (this.options && this.options.context && this.options.context.Quote) {
      this.options.context.QuoteItem = this.options.context.Quote;
      PricingAvailabilityService.onCheckPricingAndAvailability(field.currentSelection,
        'QuoteItem',
        this).then((results) => {
          this.handlePricingSuccess(results);
        });
    }
  },
  onQuantityChange: function onQuantityChange() {
    const price = this.fields.CalculatedPrice.getValue();
    if (price) {
      this.fields.ExtendedPrice.setValue(this.fields.Quantity.getValue() * price);
    }
  },
  createLayout: function createLayout() {
    return this.layout || (this.layout = [{
      title: this.detailsText,
      name: 'DetailsSection',
      children: [{
        label: this.productText,
        name: 'Product',
        property: 'Product',
        type: 'lookup',
        emptyText: '',
        valueTextProperty: 'Name',
        view: 'quoteline_product_related',
        autoFocus: true,
        required: true,
        where: () => {
          if (this.fields.Quote.currentSelection && this.fields.Quote.currentSelection.ErpLogicalId || this.options && this.options.context && this.options.context.Quote && this.options.context.Quote.ErpLogicalId) {
            return `ErpLogicalId eq "${this.fields.Quote.currentSelection.ErpLogicalId || this.options.context.Quote.ErpLogicalId}"`;
          }
          return null;
        },
      }, {
        label: this.quantityText,
        name: 'Quantity',
        property: 'Quantity',
        type: 'decimal',
        'default': 1,
      }, {
        label: this.unitOfMeasureText,
        name: 'UnitOfMeasure',
        property: 'UnitOfMeasure',
        type: 'lookup',
        emptyText: '',
        valueTextProperty: 'Name',
        view: 'quoteline_unitofmeasure_list',
        title: this.unitsOfMeasureTitle,
      }, {
        label: this.priceText,
        name: 'Price',
        property: 'Price',
        type: 'decimal',
        'default': 0.00,
      }, {
        label: this.adjustedPriceText,
        name: 'CalculatedPrice',
        property: 'CalculatedPrice',
        type: 'decimal',
        'default': 0.00,
      }, {
        label: this.extendedPriceText,
        name: 'ExtendedPrice',
        property: 'ExtendedPrice',
        type: 'decimal',
        'default': 0.00,
      }, {
        label: this.quoteText,
        name: 'Quote',
        property: 'Quote',
        type: 'lookup',
        emptyText: '',
        valueTextProperty: 'QuoteNumber',
        view: 'quoteline_quote_list',
      },
    ]},
  ]);
  },
});

export default __class;
