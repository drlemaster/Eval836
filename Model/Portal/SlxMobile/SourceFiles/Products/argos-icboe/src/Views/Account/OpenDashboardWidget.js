/*
 * See copyright file.
 */
import declare from 'dojo/_base/declare';
import string from 'dojo/string';
import convert from 'argos/Convert';
import RelatedViewManager from 'argos/RelatedViewManager';
import DashboardWidget from 'icboe/DashboardWidget';
import getResource from 'argos/I18n';

const resource = getResource('openDashboardWidget');

const __class = declare('icboe.Views.Account.OpenDashboardWidget', [DashboardWidget], {
  // Localization
  openSalesOrdersText: resource.openSalesOrdersText,
  openQuotesText: resource.openQuotesText,
  outstandingInvoicesText: resource.outstandingInvoicesText,
  lateInvoicesText: resource.lateInvoicesText,
  lateSalesOrdersText: resource.lateSalesOrdersText,
  titleText: resource.titleText,
  categoryText: resource.categoryText,
  quotesTotalingText: resource.quotesTotalingText,
  ordersTotalingText: resource.ordersTotalingText,
  invoicesTotalingText: resource.invoicesTotalingText,

  // Override variables for _DashboardWidgetBase
  color: '#313236',
  selectedColor: '#50535a',
  dayValue: 30,

  // Codes used for the status of the entity
  newCode: 'New',
  openCode: 'Open',
  approvedCode: 'Approved',
  workingCode: 'Working',
  partialShipCode: 'Partially Shipped',
  partialPaidCode: 'PartialPaid',
  closedCode: 'Closed',
  disputeCode: 'Dispute',

  // Values for the metrics
  values: [{
    name: 'salesOrders',
    aggregate: 'sum',
    aggregateModule: 'crm/Aggregate',
    value: null,
    queryIndex: 0,
    count: true,
    dateDependent: true,
  }, {
    name: 'quotes',
    aggregate: 'sum',
    aggregateModule: 'crm/Aggregate',
    value: null,
    queryIndex: 1,
    count: true,
    dateDependent: true,
  }, {
    name: 'invoices',
    aggregate: 'sum',
    aggregateModule: 'crm/Aggregate',
    value: null,
    queryIndex: 2,
    count: true,
    dateDependent: true,
  }, {
    name: 'lateInvoices',
    aggregate: 'sum',
    aggregateModule: 'crm/Aggregate',
    value: null,
    queryIndex: 3,
    count: true,
    dateDependent: true,
  }, {
    name: 'lateSalesOrders',
    aggregate: 'sum',
    aggregateModule: 'crm/Aggregate',
    value: null,
    queryIndex: 4,
    count: true,
    dateDependent: false,
  }],

  resourceKind: 'accounts',
  querySelect: [
    'AccountName',
  ],
  getWhere: function getWhere() {
    return "Id eq '" + this.parentEntry.$key + "'";
  },
  // Creates the range widgets, value can have valueUnit to apply next to the number
  createRangeLayout: function createRangeLayout() {
    const rangeLayout = [{
      value: 30,
      valueUnit: '+',
    }, {
      value: 60,
      valueUnit: '+',
    }, {
      value: 90,
      valueUnit: '+',
    }, {
      value: 180,
      valueUnit: '+',
    }];
    return rangeLayout;
  },
  createMetricLayout: function createMetricLayout(entry) {
    this.setQueryArgs(entry);

    const metricLayout = [{
      navTo: 'account_opensalesorders_related',
      formatter: 'bigNumber',
      formatterModule: 'crm/Format',
      title: this.openSalesOrdersText,
      valueNeeded: 'salesOrders',
    }, {
      navTo: 'account_openquotes_related',
      formatter: 'bigNumber',
      formatterModule: 'crm/Format',
      title: this.openQuotesText,
      valueNeeded: 'quotes',
    }, {
      navTo: 'account_erpinvoice_related',
      formatter: 'bigNumber',
      formatterModule: 'crm/Format',
      title: this.outstandingInvoicesText,
      valueNeeded: 'invoices',
    }, {
      navTo: 'account_lateinvoice_related',
      formatter: 'bigNumber',
      formatterModule: 'crm/Format',
      title: this.lateInvoicesText,
      valueNeeded: 'lateInvoices',
    }, {
      navTo: 'account_latesalesorders_related',
      formatter: 'bigNumber',
      formatterModule: 'crm/Format',
      title: this.lateSalesOrdersText,
      valueNeeded: 'lateSalesOrders',
    }];

    return metricLayout;
  },
  setQueryArgs: function setQueryArgs(entry) {
    this.queryArgs = [];

    this.queryArgs.push([
      'salesOrders',
      {
        _activeFilter: 'Account.Id eq "' + entry.$key + '" and IsQuote eq false',
        _filterName: 'AccountManager',
        _metricName: 'SumGrandTotal',
      },
    ], [
      'quotes',
      {
        _activeFilter: 'Account.Id eq "' + entry.$key + '" and Status eq "' + this.newCode + '"',
        _filterName: 'AccountManager',
        _metricName: 'SumGrandTotal',
      },
    ], [
      'erpInvoices',
      {
        _activeFilter: 'Account.Id eq "' + entry.$key + '" and (ErpStatus eq "' + this.openCode + '" or ErpStatus eq "' + this.partialPaidCode + '" or ErpStatus eq "' + this.disputeCode + '")',
        _filterName: 'ErpStatus',
        _metricName: 'SumGrandTotal',
      },
    ], [
      'erpInvoices',
      {
        _activeFilter: 'Account.Id eq "' + entry.$key + '" and (ErpStatus eq "' + this.openCode + '" or ErpStatus eq "' + this.partialPaidCode + '" or ErpStatus eq "' + this.disputeCode + '") and ' + this.pastDays('CreateDate'),
        _filterName: 'ErpStatus',
        _metricName: 'SumGrandTotal',
      },
    ], [
      'salesOrders',
      {
        _activeFilter: 'Account.Id eq "' + entry.$key + '" and ' + this.pastDays('CreateDate'),
        _filterName: 'AccountManager',
        _metricName: 'SumGrandTotal',
      },
    ]);
    this.setCountTitles();
  },
  setCountTitles: function setCountTitles() {
    this.values[0].countTitle = this.ordersTotalingText;
    this.values[1].countTitle = this.quotesTotalingText;
    this.values[2].countTitle = this.invoicesTotalingText;
    this.values[3].countTitle = this.invoicesTotalingText;
    this.values[4].countTitle = this.ordersTotalingText;
  },
  pastDays: function pastDays(property) {
    const now = moment();

    const pastDay = now.clone().subtract(this.dayValue, 'days').startOf('day');

    const query = string.substitute(
            '(' + property + ' lt @${0}@ or (' + property + ' lt @${1}@))',
            [
            convert.toIsoStringFromDate(pastDay.toDate()),
            pastDay.format('YYYY-MM-DDT00:00:00[Z]'),
            ]
    );
    return query;
  },
});
const rvm = new RelatedViewManager();
rvm.registerType('account_open_dashboard_widget', __class);
export default __class;
