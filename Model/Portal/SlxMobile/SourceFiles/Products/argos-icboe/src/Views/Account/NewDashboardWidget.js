/*
 * See copyright file.
 */
import declare from 'dojo/_base/declare';
import string from 'dojo/string';
import convert from 'argos/Convert';
import RelatedViewManager from 'argos/RelatedViewManager';
import DashboardWidget from 'icboe/DashboardWidget';
import getResource from 'argos/I18n';

const resource = getResource('newDashboardWidget');

const __class = declare('icboe.Views.Account.NewDashboardWidget', [DashboardWidget], {
  // Localization
  newQuotesText: resource.newQuotesText,
  newOrdersText: resource.newOrdersText,
  newShipmentsText: resource.newShipmentsText,
  newInvoicesText: resource.newInvoicesText,
  newReceivablesText: resource.newReceivablesText,
  titleText: resource.titleText,
  categoryText: resource.categoryText,
  quotesTotalingText: resource.quotesTotalingText,
  ordersTotalingText: resource.ordersTotalingText,
  shipmentsTotalingText: resource.shipmentsTotalingText,
  invoicesTotalingText: resource.invoicesTotalingText,
  receivablesTotalingText: resource.receivablesTotalingText,

  // Override variables for _DashboardWidgetBase
  color: '#313236',
  selectedColor: '#50535a',
  dayValue: 7,

  // Codes used for the status of the entity
  openCode: 'New',
  closedCode: 'Closed',

  // Values for the metrics
  values: [{
    name: 'quotes',
    aggregate: 'sum',
    aggregateModule: 'crm/Aggregate',
    value: null,
    queryIndex: 0,
    count: true,
    dateDependent: true,
  }, {
    name: 'salesOrders',
    aggregate: 'sum',
    aggregateModule: 'crm/Aggregate',
    value: null,
    queryIndex: 1,
    count: true,
    dateDependent: true,
  }, {
    name: 'shipments',
    aggregate: 'sum',
    aggregateModule: 'crm/Aggregate',
    value: null,
    queryIndex: 2,
    count: true,
    dateDependent: true,
  }, {
    name: 'invoices',
    aggregate: 'sum',
    aggregateModule: 'crm/Aggregate',
    value: null,
    queryIndex: 3,
    count: true,
    dateDependent: true,
  }, {
    name: 'receivables',
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
  queryArgs: null,
  getWhere: function getWhere() {
    return "Id eq '" + this.parentEntry.$key + "'";
  },
  // Creates the range widgets, timespan is based on three categories: d - day, m - month, y - year
  createRangeLayout: function createRangeLayout() {
    const rangeLayout = [{
        value: 7,
    }, {
        value: 14,
    }, {
        value: 30,
    }, {
        value: 90,
    }];
    return rangeLayout;
  },
  createMetricLayout: function createMetricLayout(entry) {
    this.setQueryArgs(entry);

    const metricLayout = [{
      navTo: 'account_newquotes_related',
      formatter: 'bigNumber',
      formatterModule: 'crm/Format',
      title: this.newQuotesText,
      valueNeeded: 'quotes',
    }, {
      navTo: 'account_neworders_related',
      formatter: 'bigNumber',
      formatterModule: 'crm/Format',
      title: this.newOrdersText,
      valueNeeded: 'salesOrders',
    }, {
      navTo: 'account_newerpshipments_related',
      formatter: 'bigNumber',
      formatterModule: 'crm/Format',
      title: this.newShipmentsText,
      valueNeeded: 'shipments',
    }, {
      navTo: 'account_newerpinvoice_related',
      formatter: 'bigNumber',
      formatterModule: 'crm/Format',
      title: this.newInvoicesText,
      valueNeeded: 'invoices',
    }, {
      navTo: 'account_newerpreceivables_related',
      formatter: 'bigNumber',
      formatterModule: 'crm/Format',
      title: this.newReceivablesText,
      valueNeeded: 'receivables',
    }];

    return metricLayout;
  },
  setQueryArgs: function setQueryArgs(entry) {
    this.queryArgs = [];

    this.queryArgs.push([
      'quotes',
      {
        _activeFilter: 'Account.Id eq "' + entry.$key + '" and Status eq "' + this.openCode + '" and ' + this.pastDays('ExpectedDeliveryDate'),
        _filterName: 'AccountManager',
        _metricName: 'SumGrandTotal',
      },
    ], [
      'salesOrders',
      {
        _activeFilter: 'Account.Id eq "' + entry.$key + '" and IsQuote eq false and ' + this.pastDays('OrderDate'),
        _filterName: 'AccountManager',
        _metricName: 'SumGrandTotal',
      },
    ], [
      'erpShipments',
      {
        _activeFilter: 'Account.Id eq "' + entry.$key + '" and ' + this.pastDays('CreateDate'),
        _filterName: 'ERPStatus',
        _metricName: 'SumTotalAmount',
      },
    ], [
        'erpInvoices',
        {
          _activeFilter: 'Account.Id eq "' + entry.$key + '" and ' + this.pastDays('CreateDate'),
          _filterName: 'ErpStatus',
          _metricName: 'SumGrandTotal',
        },
    ], [
        'erpReceivables',
        {
          _activeFilter: 'Account.Id eq "' + entry.$key + '" and ' + this.pastDays('CreateDate'),
          _filterName: 'ErpStatus',
          _metricName: 'SumGrandTotal',
        },
    ]);

    this.setCountTitles();
  },
  setCountTitles: function setCountTitles() {
    this.values[0].countTitle = this.quotesTotalingText;
    this.values[1].countTitle = this.ordersTotalingText;
    this.values[2].countTitle = this.shipmentsTotalingText;
    this.values[3].countTitle = this.invoicesTotalingText;
    this.values[4].countTitle = this.receivablesTotalingText;
  },
  pastDays: function pastDays(property) {
    const now = moment();

    const pastWeekStart = now.clone().subtract(this.dayValue, 'days').startOf('day');
    const today = now.clone().endOf('day');

    const query = string.substitute(
      '((' + property + ' between @${0}@ and @${1}@) or (' + property + ' between @${2}@ and @${3}@))',
      [
      convert.toIsoStringFromDate(pastWeekStart.toDate()),
      convert.toIsoStringFromDate(today.toDate()),
      pastWeekStart.format('YYYY-MM-DDT00:00:00[Z]'),
      today.format('YYYY-MM-DDT23:59:59[Z]'),
      ]
    );
    return query;
  },
});
const rvm = new RelatedViewManager();
rvm.registerType('account_new_dashboard_widget', __class);
export default __class;
