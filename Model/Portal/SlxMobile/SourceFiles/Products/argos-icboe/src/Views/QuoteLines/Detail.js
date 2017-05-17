/**
 * @class .Views.QuoteLines.Detail
 *
 *
 * @extends argos.Detail
 * @requires argos.Detail
 * @requires crm.Format
 *
 */
import declare from 'dojo/_base/declare';
import connect from 'dojo/_base/connect';
import array from 'dojo/_base/array';
import format from 'crm/Format';
import Detail from 'argos/Detail';
import MODEL_NAMES from '../../Models/Names';
import getResource from 'argos/I18n';

const resource = getResource('quoteItemsDetail');

const __class = declare('icboe.Views.QuoteLines.Detail', [Detail], {
  // Localization
  titleText: resource.titleText,
  lineText: resource.lineText,
  quantityText: resource.quantityText,
  priceText: resource.priceText,
  extendedAmountText: resource.extendedAmountText,
  productNameText: resource.productNameText,
  descriptionText: resource.descriptionText,
  quoteIDText: resource.quoteIDText,
  skuText: resource.skuText,
  baseExtendedAmountText: resource.baseExtendedAmountText,
  baseAdjustedPriceText: resource.baseAdjustedPriceText,
  discountText: resource.discountText,
  adjustedPriceText: resource.adjustedPriceText,
  statusText: resource.statusText,
  openQuantityText: resource.openQuantityText,
  dropShipText: resource.dropShipText,
  fixedPriceText: resource.fixedPriceText,
  rushRequestText: resource.rushRequestText,
  warehouseText: resource.warehouseText,
  detailsText: resource.detailsText,
  moreDetailsText: resource.moreDetailsText,
  relatedItemsText: resource.relatedItemsText,
  entityText: resource.entityText,
  confirmDeleteText: resource.confirmDeleteText,
  unitOfMeasureText: resource.unitOfMeasureText,
  locationText: resource.locationText,
  // View Properties
  id: 'quote_line_detail',
  editView: 'quote_line_edit',
  resourceKind: 'quoteItems',
  modelName: MODEL_NAMES.QUOTEITEM,
  entityName: 'QuoteItem',

  createEntryForDelete: function createEntryForDelete(e) {
    const entry = {
      '$key': e.$key,
      '$etag': e.$etag,
      '$name': e.$name,
    };
    return entry;
  },
  removeQuoteLine: function removeQuoteLine() {
    // TODO: [INFORCRM-7712] Implement this in the model (model needs remove call)
    App.modal.createSimpleDialog({
      title: 'alert',
      content: this.confirmDeleteText,
      getContent: () => { return; },
    }).then(() => {
      const entry = this.createEntryForDelete(this.entry);
      const request = this.store._createEntryRequest(this.entry.$key, {});

      if (request) {
        request.delete(entry, {
          success: this.onDeleteSuccess,
          failure: this.onRequestDataFailure,
          scope: this,
        });
      }
    });
  },
  onDeleteSuccess: function onDeleteSuccess() {
    const views = [
      App.getView('quote_lines_related'),
      App.getView('quote_detail'),
      App.getView('quote_list'),
    ];

    array.forEach(views, function setViewRefresh(view) {
      if (view) {
        view.refreshRequired = true;
      }
    }, this);

    connect.publish('/app/refresh', [{
      resourceKind: this.resourceKind,
    }]);
    ReUI.back();
  },
  createToolLayout: function createToolLayout() {
    return this.tools || (this.tools = {
      'tbar': [{
        id: 'edit',
        cls: 'fa fa-pencil fa-lg',
        action: 'navigateToEditView',
        security: App.getViewSecurity(this.editView, 'update'),
      }, {
        id: 'refresh',
        cls: 'fa fa-refresh fa-fw fa-lg',
        action: '_refreshClicked',
      }, {
        id: 'removeQuoteLine',
        cls: 'fa fa-times-circle fa-lg',
        action: 'removeQuoteLine',
        title: this.removeQuoteLineText,
        security: 'Entities/Quote/Delete',
      }],
    });
  },
  createLayout: function createLayout() {
    return this.layout || (this.layout = [{
      title: this.actionsText,
      list: true,
      cls: 'action-list',
      name: 'QuickActionsSection',
      children: [],
    }, {
      title: this.detailsText,
      name: 'DetailsSection',
      children: [{
        name: 'LineNumber',
        property: 'ErpLineNumber',
        label: this.lineText,
      }, {
        name: 'QuoteNumber',
        property: 'Quote.QuoteNumber',
        label: this.quoteIDText,
        view: 'quote_detail',
        key: 'Quote.$key',
      }, {
        name: 'ProductName',
        property: 'ProductName',
        label: this.productNameText,
      }, {
        name: 'Description',
        property: 'Description',
        label: this.descriptionText,
      }, {
        name: 'ActualId',
        property: 'ActualId',
        label: this.skuText,
      }, {
        name: 'Price',
        property: 'Price',
        label: this.priceText,
        renderer: (this.formatMultiCurrency).bindDelegate(this),
      }, {
        name: 'Discount',
        property: 'Discount',
        label: this.discountText,
        renderer: (this.formatMultiCurrency).bindDelegate(this),
      }, {
        name: 'CalculatedPrice',
        property: 'CalculatedPrice',
        label: this.adjustedPriceText,
        renderer: (this.formatMultiCurrency).bindDelegate(this),
      }, {
        name: 'DocCalculatedPrice',
        property: 'DocCalculatedPrice',
        label: this.baseAdjustedPriceText,
        renderer: (this.formatMultiCurrency).bindDelegate(this),
      }, {
        name: 'Quantity',
        property: 'Quantity',
        label: this.quantityText,
        renderer: function renderer(val) {
          return format.fixedLocale(val, 2);
        },
      }, {
        name: 'UnitOfMeasure',
        property: 'UnitOfMeasure',
        label: this.unitOfMeasureText,
        renderer: function renderer(val) {
          if (val && val.Name) {
            return val.Name;
          }
          return null;
        },
      }, {
        label: this.extendedAmountText,
        name: 'ExtendedPrice',
        property: 'ExtendedPrice',
        renderer: (this.formatMultiCurrency).bindDelegate(this),
      }, {
        name: 'DocExtendedPrice',
        property: 'DocExtendedPrice',
        label: this.baseExtendedAmountText,
        renderer: (this.formatMultiCurrency).bindDelegate(this),
      }, {
        name: 'Status',
        property: 'Status',
        label: this.statusText,
      }],
    }, {
      title: this.moreDetailsText,
      name: 'MoreDetailsSection',
      collapsed: true,
      children: [{
        name: 'SlxLocation',
        property: 'SlxLocation.Description',
        label: this.warehouseText,
      }, {
        name: 'OpenQuantity',
        property: 'OpenQuantity',
        label: this.openQuantityText,
        renderer: function renderer(val) {
          return format.fixedLocale(val, 2);
        },
      }, {
        name: 'DropShip',
        property: 'DropShip',
        label: this.dropShipText,
        renderer: function renderer(data) {
          return format.yesNo(data);
        },
      }, {
        name: 'FixedPrice',
        property: 'FixedPrice',
        label: this.fixedPriceText,
        renderer: (this.formatMultiCurrency).bindDelegate(this),
      }, {
        name: 'RushRequest',
        property: 'RushRequest',
        label: this.rushRequestText,
        renderer: function renderer(data) {
          return format.yesNo(data);
        },
      }],
    }, {
      title: this.relatedItemsText,
      list: true,
      name: 'RelatedItemsSection',
      children: [],
    }]);
  },
  formatMultiCurrency: function formatMultiCurrency(val) {
    if (App.hasMultiCurrency() && val) {
      if (this.entry.Quote.CurrencyCode) {
        return format.multiCurrency.call(null, val, this.entry.Quote.CurrencyCode);
      }
      return format.currency.call(null, val);
    }
    return format.currency.call(null, val);
  },
});

export default __class;
