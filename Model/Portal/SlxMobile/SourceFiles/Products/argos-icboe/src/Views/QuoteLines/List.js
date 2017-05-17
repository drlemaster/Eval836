import declare from 'dojo/_base/declare';
import string from 'dojo/string';
import List from 'argos/List';
import action from 'crm/Action';
import format from 'crm/Format';
import _CardLayoutListMixin from 'crm/Views/_CardLayoutListMixin';
import _RightDrawerListMixin from 'crm/Views/_RightDrawerListMixin';
import _MetricListMixin from 'crm/Views/_MetricListMixin';
import MODEL_NAMES from '../../Models/Names';
import getResource from 'argos/I18n';

const resource = getResource('quoteItemsList');

const __class = declare('icboe.Views.QuoteLines.List', [List, _RightDrawerListMixin, _MetricListMixin, _CardLayoutListMixin], {
  formatter: format,
  // Localization
  titleText: resource.titleText,
  lineText: resource.lineText,
  quantityText: resource.quantityText,
  priceText: resource.priceText,
  adjustedPriceText: resource.adjustedPriceText,
  baseAdjustedPriceText: resource.baseAdjustedPriceText,
  baseAmountText: resource.baseAmountText,
  amountText: resource.amountText,
  productNameText: resource.productNameText,
  descriptionText: resource.descriptionText,
  accountingEntityRequiredText: resource.accountingEntityRequiredText,
  assignWarehouseText: resource.assignWarehouseText,
  warehousesTitleText: resource.warehouseTitleText,
  warehouseText: resource.warehouseText,

  // Templates
  itemTemplate: new Simplate([
    '{% if ($.ErpLineNumber) { %}',
      '<h3><label class="group-label">{%: $$.lineText %}</label> {%: $.ErpLineNumber %}</h3>',
    '{% } %}',
    '{% if ($.SlxLocation) { %}',
      '<h4><label class="group-label">{%: $$.warehouseText %}</label> {%: $.SlxLocation.Description %}</h4>',
    '{% } %}',
    '<h4><label class="group-label">{%: $$.productNameText %}</label> {%: $.ProductName %}</h4>',
    '<h4><label class="group-label">{%: $$.descriptionText %}</label> {%: $.Description %}</h4>',
    '{% if ($.Price) { %}',
      '<h4> <label class="group-label">{%: $$.priceText %} </label>',
        '{%: $$.formatMultiCurrency($.Price, $.Quote.CurrencyCode) %}',
      '</h4>',
    '{% } %}',
    '{% if ($.DocCalculatedPrice) { %}',
      '<h4> <label class="group-label">{%: $$.baseAdjustedPriceText %}</label> ',
        '{%: $$.formatMultiCurrency($.DocCalculatedPrice, $.Quote.CurrencyCode) %}',
      '</h4>',
    '{% } %}',
    '{% if ($.CalculatedPrice) { %}',
      '<h4> <label class="group-label">{%: $$.adjustedPriceText %}</label> ',
        '{%: $$.formatMultiCurrency($.CalculatedPrice, $.Quote.CurrencyCode) %}',
      '</h4>',
    '{% } %}',
    '<h4><label class="group-label">{%: $$.quantityText %}</label> {%: $.Quantity %}</h4>',
    '{% if ($.DocExtendedPrice) { %}',
      '<h4> <label class="group-label">{%: $$.baseAmountText %}</label> ',
        '{%: $$.formatMultiCurrency($.DocExtendedPrice, $.Quote.CurrencyCode) %}',
      '</h4>',
    '{% } %}',
    '{% if ($.ExtendedPrice) { %}',
      '<h4> <label class="group-label">{%: $$.amountText %}</label> ',
        '{%: $$.formatMultiCurrency($.ExtendedPrice, $.Quote.CurrencyCode) %}',
      '</h4>',
    '{% } %}',
  ]),
  // View Properties
  id: 'quote_lines_list',
  detailView: 'quote_line_detail',
  insertView: 'quote_line_edit',
  modelName: MODEL_NAMES.QUOTEITEM,
  resourceKind: 'quoteItems',
  allowSelection: true,
  enableActions: true,
  security: 'Entities/Quote/View',
  insertSecurity: 'Entities/Quote/Add',

  // Card layout
  itemIconClass: 'fa fa-list-ul fa-2x',

  // Metrics
  entityName: 'QuoteItem',

  createActionLayout: function createActionLayout() {
    return this.actions || (this.actions = [{
      id: 'assignWarehouse',
      cls: 'fa fa-truck fa-2x',
      label: this.assignWarehouseText,
      enabled: action.hasProperty.bindDelegate(this, 'Quote.ErpLogicalId'),
      fn: (evt, selection) => {
        const view = App.getView('quoteline_pricingAvailabilityLocations');
        if (view) {
          const options = {
            title: this.warehouseTitleText,
            singleSelect: true,
            singleSelectAction: 'complete',
            context: {
              Quote: this.options.fromContext.entry,
            },
            selected: selection.data,
          };
          this.refreshRequired = true;
          view.show(options);
        }
      },
    }]);
  },
  createToolLayout: function createToolLayout() {
    return this.tools || (this.tools = {
      'tbar': [{
        id: 'new',
        cls: 'fa fa-plus fa-fw fa-lg',
        action: 'preNavigateToInsert',
        security: this.app.getViewSecurity(this.insertView, 'insert'),
      }],
    });
  },
  preNavigateToInsert: function preNavigateToInsert(el) {
    let options = {};
    if (this.options && this.options.fromContext && this.options.fromContext.entry) {
      options = {
        context: {
          Quote: this.options.fromContext.entry,
        },
      };
    }
    this.navigateToInsertView(el, options);
  },
  formatSearchQuery: function formatSearchQuery(searchQuery) {
    return string.substitute('(upper(Description) like "${0}%") or (upper(ProductName) like "${0}%") or (upper(Quote.QuoteNumber) like "${0}%") or (upper(ErpLineNumber) like "${0}%")', [this.escapeSearchQuery(searchQuery.toUpperCase())]);
  },
  formatMultiCurrency: function formatMultiCurrency(value, code) {
    if (App.hasMultiCurrency() && code) {
      return crm.Format.multiCurrency(value, code);
    }
    return crm.Format.currency(value);
  },
});

export default __class;
