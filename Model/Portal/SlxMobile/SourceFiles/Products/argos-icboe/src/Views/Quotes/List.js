import declare from 'dojo/_base/declare';
import string from 'dojo/string';
import List from 'argos/List';
import action from 'crm/Action';
import format from 'crm/Format';
import _CardLayoutListMixin from 'crm/Views/_CardLayoutListMixin';
import _RightDrawerListMixin from 'crm/Views/_RightDrawerListMixin';
import _MetricListMixin from 'crm/Views/_MetricListMixin';
import _GroupListMixin from 'crm/Views/_GroupListMixin';
import MODEL_NAMES from '../../Models/Names';
import getResource from 'argos/I18n';

const resource = getResource('quotesList');

const __class = declare('icboe.Views.Quotes.List', [List, _RightDrawerListMixin, _MetricListMixin, _CardLayoutListMixin, _GroupListMixin], {
  formatter: format,
  // Templates
  itemTemplate: new Simplate([
    '<h4><label class="group-label">{%: $$.quoteNumberText %}</label> {%: $.QuoteNumber %}</h4>',
    '<h4><label class="group-label">{%: $$.accountText %}</label> {%: $.Account.AccountName %}</h4>',
    '<h4><label class="group-label">{%: $$.createDateText %}</label> {%: $$.formatter.date($.CreateDate) %}</h4>',
    '{% if ($.GrandTotal) { %}',
    '<h4><label class="group-label">{%: $$.grandTotalLabelText %} </label>',
    '{% if (App.hasMultiCurrency() && $.CurrencyCode) { %}',
    '{%: $$.formatter.multiCurrency($.GrandTotal, $.CurrencyCode) %}',
    '{% } else { %}',
    '{%: $$.formatter.currency($.GrandTotal) %} ',
    '{% } %}</h4>',
    '{% } %}',
  ]),

  // Localization
  titleText: resource.titleText,
  quoteNumberText: resource.quoteNumberText,
  versionText: resource.versionText,
  accountText: resource.accountText,
  createDateText: resource.createDateText,
  grandTotalLabelText: resource.grandTotalLabelText,
  viewAccountActionText: resource.viewAccountActionText,
  addLineItemsText: resource.addLineItemsText,

  // View Properties
  id: 'quote_list',
  detailView: 'quote_detail',
  insertView: 'quote_edit',
  modelName: MODEL_NAMES.QUOTE,
  resourceKind: 'quotes',
  expose: true,
  allowSelection: true,
  enableActions: true,
  security: 'Entities/Quote/View',
  insertSecurity: 'Entities/Quote/Add',

  // Card layout
  itemIconClass: 'fa fa-file-text-o fa-2x',

  // Groups
  enableDynamicGroupLayout: true,
  groupsEnabled: true,

  // Metrics
  entityName: 'Quote',

  createActionLayout: function createActionLayout() {
    return this.actions || (this.actions = [{
      id: 'viewAccount',
      label: this.viewAccountActionText,
      enabled: action.hasProperty.bindDelegate(this, 'Account.$key'),
      fn: action.navigateToEntity.bindDelegate(this, {
        view: 'account_detail',
        keyProperty: 'Account.$key',
        textProperty: 'Account.AccountName',
      }),
    }, {
        id: 'addQuoteItem',
        cls: 'fa fa-list-ul fa-2x',
        label: this.addLineItemsText,
        fn: (evt, selection) => {
          const view = App.getView('quote_line_edit');
          if (view) {
            const options = {
              insert: true,
              context: {
                Quote: selection.data,
              },
            };
            view.show(options);
          }
        },
        security: 'Entities/Quote/Add',
      }]);
  },
  formatSearchQuery: function formatSearchQuery(searchQuery) {
    return string.substitute('upper(QuoteNumber) like "${0}%" or Account.AccountName like "${0}%" or ErpExtId like "${0}%"', [this.escapeSearchQuery(searchQuery.toUpperCase())]);
  },
});

export default __class;
