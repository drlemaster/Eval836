import declare from 'dojo/_base/declare';
import string from 'dojo/string';
import List from 'argos/List';
import format from 'crm/Format';
import action from 'crm/Action';
import _CardLayoutListMixin from 'crm/Views/_CardLayoutListMixin';
import _RightDrawerListMixin from 'crm/Views/_RightDrawerListMixin';
import _MetricListMixin from 'crm/Views/_MetricListMixin';
import _GroupListMixin from 'crm/Views/_GroupListMixin';
import MODEL_NAMES from '../../Models/Names';
import getResource from 'argos/I18n';

const resource = getResource('salesOrdersList');

const __class = declare('icboe.Views.SalesOrders.List', [List, _RightDrawerListMixin, _MetricListMixin, _CardLayoutListMixin, _GroupListMixin], {
  formatter: format,
  // Templates
  itemTemplate: new Simplate([
    '<h3>{%: $.SalesOrderNumber %}</h3>',
    '<h4><label class="group-label">{%: $$.erpOrderIdText %}</label> {%: $.ErpExtId %}</h4>',
    '<h4><label class="group-label">{%: $$.customerPONumberText %}</label> {%: $.CustomerPurchaseOrderNumber %}</h4>',
    '<h4><label class="group-label">{%: $$.accountText %}</label> {%: $.Account.AccountName %}</h4>',
    '<h4><label class="group-label">{%: $$.orderDateText %}</label> {%: $$.formatter.date($.OrderDate) %}</h4>',
    '{% if ($.GrandTotal) { %}',
      '<h4><label class="group-label">{%: $$.grandTotalText %}</label> ',
      '{% if (App.hasMultiCurrency() && $.CurrencyCode) { %}',
        '{%: $$.formatter.multiCurrency($.GrandTotal, $.CurrencyCode) %}',
      '{% } else { %}',
        '{%: crm.Format.currency($.GrandTotal) %}',
      '{% } %}</h4>',
    '{% } %}',
    '<h4><label class="group-label">{%: $$.statusLabelText %}</label> {%: $.Status %}</h4>',
  ]),

  // Localization
  titleText: resource.titleText,
  accountText: resource.accountText,
  erpOrderIdText: resource.erpOrderIdText,
  grandTotalText: resource.grandTotalText,
  statusLabelText: resource.statusLabelText,
  customerPONumberText: resource.customerPONumberText,
  orderDateText: resource.orderDateText,
  viewAccountActionText: resource.viewAccountActionText,
  addLineItemsText: resource.addLineItemsText,

  // View Properties
  id: 'salesorder_list',
  modelName: MODEL_NAMES.SALESORDER,
  resourceKind: 'salesOrders',
  allowSelection: true,
  enableActions: true,
  detailView: 'salesorder_detail',
  insertView: 'salesorder_edit',
  security: 'Entities/SalesOrder/View',
  insertSecurity: 'Entities/SalesOrder/Add',

  // Card layout
  itemIconClass: 'fa fa-shopping-cart fa-2x',

  // Groups
  enableDynamicGroupLayout: true,
  groupsEnabled: true,

  // Metrics
  entityName: 'SalesOrder',

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
      id: 'addOrderItem',
      cls: 'fa fa-list-ul fa-2x',
      label: this.addLineItemsText,
      fn: (evt, selection) => {
        const view = App.getView('salesorder_item_edit');
        if (view) {
          const options = {
            insert: true,
            context: {
              SalesOrder: selection.data,
            },
          };
          view.show(options);
        }
      },
      security: 'Entities/SalesOrder/Add',
    }]);
  },

  formatSearchQuery: function formatSearchQuery(searchQuery) {
    return string.substitute('(upper(SalesOrderNumber) like "${0}%" ) or (upper(ErpExtId) like "${0}%" ) or (upper(CustomerPurchaseOrderNumber) like "${0}%" ) or (upper(Account.AccountName) like "${0}%" ) ', [this.escapeSearchQuery(searchQuery.toUpperCase())]);
  },
});

export default __class;
