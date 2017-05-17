/*
 * Copyright (c) 1997-2013, SalesLogix, NA., LLC. All rights reserved.
 */

/**
 * @class crm.Views.Account.Detail
 *
 *
 * @extends argos.Detail
 * @requires argos.Detail
 * @requires crm.Format
 * @requires crm.Template
 *
 */
import declare from 'dojo/_base/declare';
import lang from 'dojo/_base/lang';
import format from 'crm/Format';
import Detail from 'argos/Detail';
import MODEL_NAMES from '../../Models/Names';
import getResource from 'argos/I18n';

const resource = getResource('erpInvoicesDetail');

const __class = declare('icboe.Views.ERPInvoices.Detail', [Detail], {
  // Localization
  titleText: resource.titleText,
  accountText: resource.accountText,
  statusText: resource.statusText,
  ownerText: resource.ownerText,
  termsText: resource.termsText,
  statusDateText: resource.statusDateText,
  unknownText: resource.unknownText,
  descriptionText: resource.descriptionText,
  invoiceNumberText: resource.invoiceNumberText,
  extendedBaseAmountText: resource.extendedBaseAmountText,
  extendedAmountText: resource.extendedAmountText,
  totalBaseText: resource.totalBaseText,
  totalText: resource.totalText,
  nameText: resource.nameText,
  mainPhoneText: resource.mainPhoneText,
  addressText: resource.addressText,
  actionsText: resource.actionsText,
  relatedItemsText: resource.relatedItemsText,
  invoiceItemsText: resource.invoiceItemsText,
  moreDetailsText: resource.moreDetailsText,
  receivableItemsText: resource.receivableItemsText,
  billToText: resource.billToText,
  shipToText: resource.shipToText,
  salesPersonsText: resource.salesPersonsText,
  entityText: resource.entityText,
  // View Properties
  id: 'invoice_detail',
  modelName: MODEL_NAMES.ERPINVOICE,
  resourceKind: 'erpInvoices',

  callMainPhone: function callMainPhone() {
    this.recordCallToHistory(lang.hitch(this, function initiateCall() {
      App.initiateCall(this.entry.MainPhone);
    }));
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
        name: 'InvoiceNumber',
        property: 'InvoiceNumber',
        label: this.invoiceNumberText,
      }, {
        name: 'AccountName',
        property: 'Account.AccountName',
        label: this.accountText,
        descriptor: 'AccountName',
        view: 'account_detail',
        key: 'Account.$key',
      }, {
        label: App.hasMultiCurrency() ? this.extendedBaseAmountText : this.extendedAmountText,
        name: 'ExtendedAmount',
        property: 'ErpExtendedBaseAmount',
        renderer: (function renderer(val) {
          if (App.hasMultiCurrency() && val) {
            if (this.entry.CurrencyCode) {
              return format.multiCurrency.call(null, val, this.entry.CurrencyCode);
            }
            return format.currency.call(null, val);
          }
          return format.currency.call(null, val);
        }).bindDelegate(this),
      }, {
        label: App.hasMultiCurrency() ? this.totalBaseText : this.totalText,
        name: 'GrandTotal',
        property: 'GrandTotal',
        renderer: (function renderer(val) {
          if (App.hasMultiCurrency() && val) {
            if (this.entry.CurrencyCode) {
              return format.multiCurrency.call(null, val, this.entry.CurrencyCode);
            }
            return format.currency.call(null, val);
          }
          return format.currency.call(null, val);
        }).bindDelegate(this),
      }, {
        name: 'ErpStatus',
        property: 'ErpStatus',
        label: this.statusText,
      }, {
        name: 'ErpStatusDate',
        property: 'ErpStatusDate',
        label: this.statusDateText,
        renderer: format.date.bindDelegate(this, null, true),
      }, {
        name: 'ErpPaymentTermId',
        property: 'ErpPaymentTermId',
        label: this.termsText,
      }],
    }, {
      title: this.billToText,
      name: 'BillToSection',
      children: [{
        name: 'BillToName',
        property: 'ErpBillTo.Name',
        label: this.nameText,
        view: 'erpbillto_detail',
        key: 'ErpBillTo.$key',
      }, {
        name: 'BillToMainPhone',
        property: 'ErpBillTo.MainPhone',
        label: this.mainPhoneText,
      }, {
        name: 'BillToAddress',
        property: 'ErpBillTo.Address',
        label: this.addressText,
        renderer: (val) => {
          if (val) {
            return format.address(val);
          }
        },
      }],
    }, {
      title: this.shipToText,
      name: 'ShipSection',
      children: [{
        name: 'ShipToName',
        property: 'ErpShipTo.Name',
        label: this.nameText,
        view: 'erpshipto_detail',
        key: 'ErpShipTo.$key',
      }, {
        name: 'ShipToMainPhone',
        property: 'ErpShipTo.MainPhone',
        label: this.mainPhoneText,
      }, {
        name: 'ShipToAddress',
        property: 'ErpShipTo.Address',
        label: this.addressText,
        renderer: (val) => {
          if (val) {
            return format.address(val);
          }
        },
      }],
    }, {
      title: this.relatedItemsText,
      list: true,
      name: 'RelatedItemsSection',
      children: [{
        name: 'ERPInvoiceItemsRelated',
        label: this.invoiceItemsText,
        where: this.formatRelatedQuery.bindDelegate(this, 'ErpInvoice.Id eq "${0}"'),
        view: 'invoice_items_related',
      }, {
        name: 'ERPReceivableItems',
        label: this.receivableItemsText,
        where: this.formatRelatedQuery.bindDelegate(this, 'ErpInvoice.Id eq "${0}"'),
        view: 'invoice_receivables_related',
       },
    ],
    }]);
  },
});

export default __class;
