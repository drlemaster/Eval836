import declare from 'dojo/_base/declare';
import string from 'dojo/string';
import List from 'argos/List';
import format from 'crm/Format';
import _CardLayoutListMixin from 'crm/Views/_CardLayoutListMixin';
import _RightDrawerListMixin from 'crm/Views/_RightDrawerListMixin';
import _MetricListMixin from 'crm/Views/_MetricListMixin';
import _GroupListMixin from 'crm/Views/_GroupListMixin';
import MODEL_NAMES from '../../Models/Names';
import getResource from 'argos/I18n';

const resource = getResource('erpReceivablesList');

const __class = declare('icboe.Views.ERPReceivables.List', [List, _RightDrawerListMixin, _MetricListMixin, _CardLayoutListMixin, _GroupListMixin], {
  formatter: format,
  itemTemplate: new Simplate([
    '<h3><label class="group-label">{%: $$.receivableIDText %}</label> {%: $.ErpExtId %}</h3>',
    '{% if ($.ErpInvoice && $.ErpInvoice.InvoiceNumber) { %}',
      '<h4><label class="group-label">{%: $$.invoiceIDText %}</label> {%: $.ErpInvoice.InvoiceNumber %}</h4>',
    '{% } %}',
    '<h4><label class="group-label">{%: $$.accountNameText %}</label> {%: $.Account.AccountName %}</h4>',
    '{% if ($.ReceivedAmount) { %}',
      '<h4><label class="group-label">{%: $$.receivedAmountText %}</label> ',
      '{% if (App.hasMultiCurrency() && $.CurrencyCode) { %}',
              '{%: $$.formatter.multiCurrency($.ReceivedAmount, $.CurrencyCode) %}',
      '{% } else { %}',
          '{%: $$.formatter.currency($.ReceivedAmount) %}',
      '{% } %}</h4>',
    '{% } %}',
    '<h4><label class="group-label">{%: $$.erpStatusText %}</label> {%: $.ErpStatus %}</h4>',
    '<h4><label class="group-label">{%: $$.erpStatusDateText %}</label> {%: $$.formatter.date($.ErpStatusDate) %}</h4>',
  ]),

  // Localization
  titleText: resource.titleText,
  receivableIDText: resource.receivableIDText,
  invoiceIDText: resource.invoiceIDText,
  erpStatusText: resource.erpStatusText,
  erpStatusDateText: resource.erpStatusDateText,
  receivedAmountText: resource.receivedAmountText,
  accountNameText: resource.accountNameText,

  // View Properties
  id: 'erpreceivables_list',
  detailView: 'erpreceivables_detail',
  modelName: MODEL_NAMES.ERPRECEIVABLE,
  resourceKind: 'erpReceivables',
  allowSelection: true,
  enableActions: true,
  expose: false,
  security: 'Entities/ErpReceivable/View',
  insertSecurity: 'Entities/ErpReceivable/Add',

  // Card layout
  itemIconClass: 'fa fa-check-circle-o fa-2x',

  // Groups
  enableDynamicGroupLayout: true,
  groupsEnabled: true,
  entityName: 'ERPReceivable',

  formatSearchQuery: function formatSearchQuery(searchQuery) {
    return string.substitute('upper(ErpExtId) like "%${0}%" or upper(Account.AccountName) like "%${0}%" or upper(ErpInvoice.InvoiceNumber) like "%${0}%"', [this.escapeSearchQuery(searchQuery.toUpperCase())]);
  },
});

export default __class;
