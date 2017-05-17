/**
 * @class .Views.ERPInvoces.List
 *
 * @extends argos.List
 * @requires argos.List
 * @requires argos.Format
 * @requires argos.Utility
 * @requires argos.Convert
 *
 * @requires crm.Action
 * @requires crm.Views._MetricListMixin
 * @requires crm.Views._CardLayoutListMixin
 * @requires crm.Views._RightDrawerListMixin
 *
 */
import declare from 'dojo/_base/declare';
import string from 'dojo/string';
import action from 'crm/Action';
import crmFormat from 'crm/Format';
import List from 'argos/List';
import _GroupListMixin from 'crm/Views/_GroupListMixin';
import _MetricListMixin from 'crm/Views/_MetricListMixin';
import _CardLayoutListMixin from 'crm/Views/_CardLayoutListMixin';
import _RightDrawerListMixin from 'crm/Views/_RightDrawerListMixin';
import MODEL_NAMES from '../../Models/Names';
import getResource from 'argos/I18n';

const resource = getResource('erpInvoicesList');

const __class = declare('crm.Views.ERPInvoices.List', [List, _RightDrawerListMixin, _MetricListMixin, _CardLayoutListMixin, _GroupListMixin], {
  formatter: crmFormat,
  // Templates
  itemTemplate: new Simplate([
    '<h3><label class="group-label">{%: $$.accountText %}</label> {%: $.Account.AccountName %}</h3>',
    '<h4><label class="group-label">{%: $$.invoiceNumberText %}</label> {%: $.InvoiceNumber %}</h4>',
    '<h4><label class="group-label">{%: $$.statusText %}</label> {%: $.ErpStatus %}</h4>',
    '<h4><label class="group-label">{%: $$.statusDateText %}</label> {%: $$.formatStatusDate($) %}</h4>',
    '<h4><label class="group-label">{%: $$.termsText %}</label> {%: $.ErpPaymentTermId %}</h4>',
    '<h4><label class="group-label">{%: $$.ownerText %} </label>{%: $.Owner.OwnerDescription %}</h4>',
    '{% if ($.GrandTotal) { %}',
      '<h4><strong><label class="group-label">{%: $$.totalText %} </label>',
      '{% if (App.hasMultiCurrency() && $.ErpExtendedBaseAmount && $.BaseCurrencyCode && $.CurrencyCode) { %}',
        '{%: $$.formatter.multiCurrency($.ErpExtendedBaseAmount, $.BaseCurrencyCode) %}  ({%: $$.baseCurrencyText %})',
        '{%: $$.formatter.multiCurrency($.GrandTotal, $.CurrencyCode) %}',
      '{% } else { %}',
        '{%: $$.formatter.currency($.GrandTotal) %} ',
      '{% } %}</h4>',
    '{% } %}',
  ]),

  // Localization
  titleText: resource.titleText,
  invoiceNumberText: resource.invoiceNumberText,
  baseCurrencyText: resource.baseCurrencyText,
  accountText: resource.accountText,
  descriptionText: resource.descriptionText,
  statusText: resource.statusText,
  termsText: resource.termsText,
  statusDateText: resource.statusDateText,
  ownerText: resource.ownerText,
  totalText: resource.totalText,
  unknownText: resource.unknownText,
  viewAccountActionText: resource.viewAccountActionText,

  // View Properties
  id: 'invoice_list',
  detailView: 'invoice_detail',
  modelName: MODEL_NAMES.ERPINVOICE,
  resourceKind: 'erpInvoices',
  allowSelection: true,
  enableActions: true,
  expose: true,
  security: 'Entities/ErpInvoice/View',
  insertSecurity: 'Entities/ErpInvoice/Add',

  // Card layout
  itemIconClass: 'fa fa-file-text fa-2x',

  // Groups
  groupsEnabled: true,
  enableDynamicGroupLayout: true,
  entityName: 'ERPInvoice',

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
    }]);
  },
  formatSearchQuery: function formatSearchQuery(searchQuery) {
    return string.substitute('Account.AccountName like "${0}%" or InvoiceNumber like "${0}%"', [this.escapeSearchQuery(searchQuery.toUpperCase())]);
  },
  formatStatusDate: function formatStatusDate(entry) {
    return (entry && entry.ErpStatusDate) ? this.formatter.relativeDate(entry.ErpStatusDate) : this.unknownText;
  },
});

export default __class;
