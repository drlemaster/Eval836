/**
 * @class .Views.ERPInvocieItems.Detail
 *
 *
 * @extends argos.Detail
 * @requires argos.Detail
 * @requires crm.Format
 * @requires crm.Template
 *
 */
import declare from 'dojo/_base/declare';
import format from 'crm/Format';
import Detail from 'argos/Detail';
import MODEL_NAMES from '../../Models/Names';
import getResource from 'argos/I18n';

const resource = getResource('erpBillTosDetail');

const __class = declare('icboe.Views.ERPBillTos.Detail', [Detail], {
  // Localization
  titleText: resource.titleText,
  moreDetailsText: resource.moreDetailsText,
  relatedItemsText: resource.relatedItemsText,
  entityText: resource.entityText,
  nameText: resource.nameText,
  faxText: resource.faxText,
  phoneText: resource.phoneText,
  emailText: resource.emailText,
  addressText: resource.addressText,
  statusText: resource.statusText,
  syncStatusText: resource.syncStatusText,
  logicalIdText: resource.logicalIdText,
  accountingEntityIdText: resource.accountingEntityIdText,
  ownerText: resource.ownerText,
  shipToText: resource.shipToText,
  accountsText: resource.accountsText,
  contactAssociationsText: resource.contactAssociationsText,
  receivablesText: resource.receivablesText,
  invoicesText: resource.invoicesText,
  returnsText: resource.returnsText,
  quotesText: resource.quotesText,
  salesOrdersText: resource.salesOrdersText,
  syncHistoryText: resource.syncHistoryText,

  // View Properties
  id: 'erpbillto_detail',
  modelName: MODEL_NAMES.ERPBILLTO,
  resourceKind: 'erpBillTos',

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
        name: 'Name',
        property: 'Name',
        label: this.nameText,
      }, {
        name: 'Phone',
        property: 'MainPhone',
        label: this.phoneText,
      }, {
        name: 'Email',
        property: 'Email',
        label: this.emailText,
      }, {
        name: 'Address',
        property: 'Address',
        label: this.addressText,
        renderer: function renderer(val) {
          if (val) {
            return format.address(val);
          }
        },
      }, {
        name: 'Status',
        property: 'ErpStatus',
        label: this.statusText,
      }, {
        name: 'Owner',
        property: 'Owner.OwnerDescription',
        label: this.ownerText,
      }],
    }, {
      title: this.moreDetailsText,
      name: 'MoreDetailsSection',
      children: [{
        name: 'Fax',
        property: 'Fax',
        label: this.faxText,
      }, {
        name: 'SyncStatus',
        property: 'SyncStatus',
        label: this.syncStatusText,
        renderer: (value) => {
          const picklist = App.picklistService.getPicklistByKey('kSYST0000444');
          if (value && picklist) {
            for (let i = 0; i < picklist.items.length; i++) {
              if (picklist.items[i].code === value) {
                return picklist.items[i].text;
              }
            }
          }
          return value;
        },
      }, {
        name: 'LogicalId',
        property: 'ErpLogicalId',
        label: this.logicalIdText,
      }, {
        name: 'AccountingEntityId',
        property: 'ErpAccountingEntityId',
        label: this.accountingEntityIdText,
      }],
    }, {
      title: this.relatedItemsText,
      name: 'RelatedItemsSection',
      list: true,
      children: [{
        name: 'Accounts',
        label: this.accountsText,
        where: function where(entry) {
          return 'ErpBillToAccounts.ErpBillTo.Id eq "' + entry.$key + '"';
        },
        view: 'billto_accounts_related',
      }, {
        name: 'ShipTos',
        label: this.shipToText,
        where: (entry) => {
          return `ErpBillToShipTos.ErpShipTo.Id eq "${entry.$key}"`;
        },
        view: 'billto_shiptos_related',
      }, {
        name: 'Quotes',
        label: this.quotesText,
        where: (entry) => {
          return `BillTo.Id eq "${entry.$key}"`;
        },
        view: 'billto_quotes_related',
      }, {
        name: 'SalesOrders',
        label: this.salesOrdersText,
        where: (entry) => {
          return `ErpBillTo.Id eq "${entry.$key}"`;
        },
        view: 'billto_orders_related',
      }, {
        name: 'Receivables',
        label: this.receivablesText,
        where: (entry) => {
          return `ErpBillTo.Id eq "${entry.$key}"`;
        },
        view: 'billto_receivables_related',
      }, {
        name: 'Invoices',
        label: this.invoicesText,
        where: (entry) => {
          return `ErpBillTo.Id eq "${entry.$key}"`;
        },
        view: 'billto_invoices_related',
      }, {
        name: 'Returns',
        label: this.returnsText,
        where: (entry) => {
          return `ErpBillTo.Id eq "${entry.$key}"`;
        },
        view: 'billto_returns_related',
      }, {
        name: 'SyncHistory',
        label: this.syncHistoryText,
        where: (entry) => {
          return `EntityType eq "ERPBillTo" and EntityId eq "${entry.$key}"`;
        },
        view: 'billto_synchistory_related',
      }],
    }]);
  },
  formatMultiCurrency: function formatMultiCurrency(val) {
    if (App.hasMultiCurrency() && val) {
      if (this.entry.ErpInvoice.CurrencyCode) {
        return format.multiCurrency.call(null, val, this.entry.ErpInvoice.CurrencyCode);
      }
      return format.currency.call(null, val);
    }
    return format.currency.call(null, val);
  },
});

export default __class;
