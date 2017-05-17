import declare from 'dojo/_base/declare';
import format from 'crm/Format';
import Detail from 'argos/Detail';
import MODEL_NAMES from '../../Models/Names';
import getResource from 'argos/I18n';

const resource = getResource('erpReceivablesDetail');

const __class = declare('icboe.Views.ERPReceivables.Detail', [Detail], {
  // Localization
  titleText: resource.titleText,
  moreDetailsText: resource.moreDetailsText,
  receivablesIdText: resource.receivablesIdText,
  accountText: resource.accountText,
  invoiceNumberText: resource.invoiceNumberText,
  receivableAmountText: resource.receivableAmountText,
  receivedAmountText: resource.receivedAmountText,
  erpStatusText: resource.erpStatusText,
  erpStatusDateText: resource.erpStatusDateText,
  paymentTermText: resource.paymentTermText,
  billToText: resource.billToText,
  billToAddressText: resource.billToAddressText,
  shipToText: resource.shipToText,
  shipToAddressText: resource.shipToAddressText,
  payFromText: resource.payFromText,
  relatedItemsText: resource.relatedItemsText,
  receivableItemsText: resource.receivableItemsText,
  entityText: resource.entityText,

  // View Properties
  id: 'erpreceivables_detail',
  modelName: MODEL_NAMES.ERPRECEIVABLE,
  resourceKind: 'erpReceivables',
  _sdataProps: [
    '$key',
    '$url',
    '$uuid',
    '$lookup',
  ],
  _hasNonEmptyAddress: function _hasNonEmptyAddress(address) {
    let keys;
    if (address) {
      keys = Object.keys(address).filter(function getIndexFromKey(key) {
        return this._sdataProps.indexOf(key) === -1;
      }.bind(this));
    }

    return keys && keys.length > 0;
  },
  _renderAddress: function _renderAddress(data) {
    if (this._hasNonEmptyAddress(data)) {
      return format.address(data);
    }
  },
  createLayout: function createLayout() {
    return this.layout || (this.layout = [{
      title: this.detailsText,
      name: 'DetailsSection',
      children: [{
        name: 'ErpExtId',
        property: 'ErpExtId',
        label: this.receivablesIdText,
      }, {
        name: 'AccountName',
        property: 'Account.AccountName',
        label: this.accountText,
        view: 'account_detail',
        key: 'Account.$key',
      }, {
        name: 'InvoiceNumber',
        property: 'ErpInvoiceNumber',
        label: this.invoiceNumberText,
        view: 'invoice_detail',
        key: 'ErpInvoice.$key',
      }, {
        name: 'ReceivableAmount',
        property: 'ReceivableAmount',
        label: this.receivableAmountText,
        renderer: (this.formatMultiCurrency).bindDelegate(this),
      }, {
        name: 'ReceivedAmount',
        property: 'ReceivedAmount',
        label: this.receivedAmountText,
        renderer: (this.formatMultiCurrency).bindDelegate(this),
      }, {
        name: 'ErpStatus',
        property: 'ErpStatus',
        label: this.erpStatusText,
      }, {
        name: 'ErpStatusDate',
        property: 'ErpStatusDate',
        label: this.erpStatusDateText,
        renderer: format.date.bind(this),
      }, {
        name: 'ErpPaymentTermId',
        property: 'ErpPaymentTermId',
        label: this.paymentTermText,
      }],
    }, {
      title: this.moreDetailsText,
      name: 'MoreDetailsSection',
      collapsed: false,
      children: [{
        name: 'ErpBillTo',
        property: 'ErpBillTo.Name',
        label: this.billToText,
        view: 'erpbillto_detail',
        key: 'ErpBillTo.$key',
      }, {
        name: 'ErpBillToAddress',
        property: 'ErpBillTo.Address',
        label: this.billToAddressText,
        renderer: this._renderAddress.bind(this),
      }, {
        name: 'ErpShipTo',
        property: 'ErpShipTo.Name',
        label: this.shipToText,
        view: 'erpshipto_detail',
        key: 'ErpShipTo.$key',
      }, {
        name: 'ErpShipToAddress',
        property: 'ErpShipTo.Address',
        label: this.shipToAddressText,
        renderer: this._renderAddress.bind(this),
      }, {
        name: 'ErpPayFrom',
        property: 'ErpPayFrom.Address',
        label: this.payFromText,
        renderer: this._renderAddress.bind(this),
      }],
    }, {
      title: this.relatedItemsText,
      list: true,
      name: 'RelatedItemsSection',
      children: [{
        name: 'ERPReceivableItems',
        label: this.receivableItemsText,
        where: function where(entry) {
          return 'ErpReceivable.Id eq "' + entry.$key + '"';
        },
        view: 'erpreceivable_items_related',
      }],
    }]);
  },
  formatMultiCurrency: function formatMultiCurrency(val) {
    if (App.hasMultiCurrency() && val) {
      if (this.entry.CurrencyCode) {
        return format.multiCurrency.call(null, val, this.entry.CurrencyCode);
      }
      return format.currency.call(null, val);
    }
    return format.currency.call(null, val);
  },
});

export default __class;
