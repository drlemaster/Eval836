import declare from 'dojo/_base/declare';
import lang from 'dojo/_base/lang';
import string from 'dojo/string';
import _Module from './_Module';
import BusyIndicator from 'argos/Dialogs/BusyIndicator';
import BillToList from '../Views/ERPBillTos/List';
import ERPContactAssociationsList from '../Views/ERPContactAssociations/List';
import ERPInvoicesList from '../Views/ERPInvoices/List';
import ERPReceivablesList from '../Views/ERPReceivables/List';
import ERPShipmentsList from '../Views/ERPShipments/List';
import ERPShipToList from '../Views/ERPShipTos/List';
import Promote from '../Promote';
import QuotesList from '../Views/Quotes/List';
import ReturnsList from '../Views/Returns/List';
import SalesOrdersList from '../Views/SalesOrders/List';
import SyncResultsList from '../Views/SyncResults/List';
import Utility from '../Utility';
import '../Models/ErpAccountPerson/SData';
import '../Views/Account/SalesDashboardWidget';
import '../Views/Account/NewDashboardWidget';
import '../Views/Account/OpenDashboardWidget';
import '../Views/Account/ActivityDashboardWidget';
import getResource from 'argos/I18n';

const resource = getResource('accountModule');

const __class = declare('icboe.Modules.AccountModule', [_Module], {
  // Localization
  erpStatusText: resource.erpStatusText,
  erpCustomerText: resource.erpCustomerText,
  erpPaymentTermText: resource.erpPaymentTermText,
  erpFinanceLimitText: resource.erpFinanceLimitText,
  syncStatusText: resource.syncStatusText,
  backOfficeText: resource.backOfficeText,
  accountingEntityText: resource.accountingEntityText,
  backOfficeIdText: resource.backOfficeIdText,
  accountingEntityIdText: resource.accountingEntityIdText,
  erpQuotesText: resource.erpQuotesText,
  erpSalesOrdersText: resource.erpSalesOrdersText,
  erpShipmentsText: resource.erpShipmentsText,
  erpInvoicesText: resource.erpInvoicesText,
  erpReceivablesText: resource.erpReceivablesText,
  erpReturnsText: resource.erpReturnsText,
  erpBillToText: resource.erpBillToText,
  erpShipToText: resource.erpShipToText,
  erpSalesPersonText: resource.erpSalesPersonText,
  erpContactAssociationText: resource.erpContactAssociationText,
  quotesText: resource.quotesText,
  ordersText: resource.ordersText,
  relatedERPItemsText: resource.relatedERPItemsText,
  dashboardText: resource.dashboardText,
  newTransactionsText: resource.newTransactionsText,
  openTransactionsText: resource.openTransactionsText,
  financialSnapshotText: resource.financialSnapshotText,
  promoteText: resource.promoteText,
  addQuoteText: resource.addQuoteText,
  addOrderText: resource.addOrderText,
  syncHistoryText: resource.syncHistoryText,

  // Picklist Codes
  openCode: 'Open',
  approvedCode: 'Approved',
  workingCode: 'Working',
  partialShipCode: 'PartiallyShipped',
  partialPaidCode: 'PartialPaid',
  closedCode: 'Closed',
  disputeCode: 'Dispute',

  init: function init() {
    App.picklistService.registerPicklistToView('kSYST0000444', 'account_detail');
  },
  loadViews: function loadViews() {
    const am = this.applicationModule;

    am.registerView(new ERPInvoicesList({
      id: 'account_erpinvoice_related',
      groupsEnabled: false,
      disableRightDrawer: true,
      expose: false,
      createToolLayout: function createToolLayout() {
        return this.tools;
      },
    }));

    am.registerView(new ERPInvoicesList({
      id: 'account_revenueerpinvoice_related',
      groupsEnabled: false,
      disableRightDrawer: true,
      expose: false,
      queryWhere: '',
      queryOrderBy: 'CreateDate asc',
      createToolLayout: function createToolLayout() {
        return this.tools;
      },
    }));

    am.registerView(new ERPInvoicesList({
      id: 'account_costerpinvoice_related',
      groupsEnabled: false,
      disableRightDrawer: true,
      expose: false,
      queryWhere: '',
      queryOrderBy: 'CreateDate asc',
      createToolLayout: function createToolLayout() {
        return this.tools;
      },
    }));

    am.registerView(new ERPInvoicesList({
      id: 'account_lateinvoice_related',
      groupsEnabled: false,
      disableRightDrawer: true,
      expose: false,
      queryWhere: '',
      queryOrderBy: 'CreateDate asc',
      createToolLayout: function createToolLayout() {
        return this.tools;
      },
    }));

    am.registerView(new ERPInvoicesList({
      id: 'account_newerpinvoice_related',
      groupsEnabled: false,
      disableRightDrawer: true,
      expose: false,
      queryWhere: '',
      queryOrderBy: 'CreateDate asc',
      createToolLayout: function createToolLayout() {
        return this.tools;
      },
    }));

    am.registerView(new ERPShipmentsList({
      id: 'account_erpshipments_related',
      groupsEnabled: false,
      disableRightDrawer: true,
      expose: false,
      createToolLayout: function createToolLayout() {
        return this.tools;
      },
    }));

    am.registerView(new ERPShipmentsList({
      id: 'account_newerpshipments_related',
      groupsEnabled: false,
      disableRightDrawer: true,
      expose: false,
      queryWhere: '',
      queryOrderBy: 'CreateDate asc',
      createToolLayout: function createToolLayout() {
        return this.tools;
      },
    }));

    am.registerView(new ReturnsList({
      id: 'account_returns_related',
      groupsEnabled: false,
      disableRightDrawer: true,
      expose: false,
      createToolLayout: function createToolLayout() {
        return this.tools;
      },
    }));

    am.registerView(new ERPReceivablesList({
      id: 'account_erpreceivables_related',
      groupsEnabled: false,
      disableRightDrawer: true,
      expose: false,
      createToolLayout: function createToolLayout() {
        return this.tools;
      },
    }));

    am.registerView(new ERPReceivablesList({
      id: 'account_newerpreceivables_related',
      groupsEnabled: false,
      disableRightDrawer: true,
      expose: false,
      queryWhere: '',
      queryOrderBy: 'CreateDate asc',
      createToolLayout: function createToolLayout() {
        return this.tools;
      },
    }));

    am.registerView(new QuotesList({
      id: 'account_quotes_related',
      title: this.quotesText,
      groupsEnabled: false,
      disableRightDrawer: true,
      expose: false,
      queryOrderBy: 'CreateDate asc',
    }));

    am.registerView(new QuotesList({
      id: 'account_openquotes_related',
      title: this.erpQuotesText,
      groupsEnabled: false,
      disableRightDrawer: true,
      expose: false,
      queryOrderBy: 'CreateDate asc',
    }));

    am.registerView(new QuotesList({
      id: 'account_newquotes_related',
      title: this.erpQuotesText,
      groupsEnabled: false,
      disableRightDrawer: true,
      expose: false,
      queryOrderBy: 'CreateDate asc',
    }));

    am.registerView(new SalesOrdersList({
      id: 'account_salesorders_related',
      title: this.ordersText,
      groupsEnabled: false,
      disableRightDrawer: true,
      expose: false,
      queryOrderBy: 'CreateDate asc',
    }));

    am.registerView(new SalesOrdersList({
      id: 'account_opensalesorders_related',
      title: this.erpSalesOrdersText,
      groupsEnabled: false,
      disableRightDrawer: true,
      expose: false,
      queryOrderBy: 'CreateDate asc',
    }));

    am.registerView(new SalesOrdersList({
      id: 'account_latesalesorders_related',
      title: this.erpSalesOrdersText,
      groupsEnabled: false,
      disableRightDrawer: true,
      expose: false,
      queryOrderBy: 'CreateDate asc',
    }));

    am.registerView(new SalesOrdersList({
      id: 'account_neworders_related',
      title: this.erpSalesOrdersText,
      groupsEnabled: false,
      disableRightDrawer: true,
      expose: false,
      queryWhere: '',
    }));

    am.registerView(new BillToList({
      id: 'account_billto_related',
      groupsEnabled: false,
      disableRightDrawer: true,
      expose: false,
    }));

    am.registerView(new ERPShipToList({
      id: 'account_shipto_related',
      groupsEnabled: false,
      disableRightDrawer: true,
      expose: false,
    }));

    am.registerView(new ERPContactAssociationsList({
      id: 'account_contactassociations_related',
      groupsEnabled: false,
      disableRightDrawer: true,
      expose: false,
      createToolLayout: function createToolLayout() {
        return this.tools;
      },
    }));

    am.registerView(new SyncResultsList({
      id: 'account_syncresults_related',
      groupsEnabled: false,
      disableRightDrawer: true,
      expose: false,
      createToolLayout: function createToolLayout() {
        return this.tools;
      },
    }));
  },
  loadCustomizations: function loadCustomizations() {
    const am = this.applicationModule;
    const Busy = BusyIndicator;

    // Row names to match in the detail and more detail sections.
    // These are the last item in the section.
    const detailRowMatch = 'AccountManager.UserInfo';
    const moreDetailRowMatch = 'Owner.OwnerDescription';

    lang.extend(crm.Views.Account.List, {
      querySelect: crm.Views.Account.List.prototype.querySelect.concat([
        'ErpExtId',
        'ErpAccountingEntityId',
        'ErpLogicalId',
      ]),
      formatSearchQuery: function formatSearchQuery(searchQuery) {
        return string.substitute('AccountNameUpper like "${0}%" or upper(ErpExtId) like "${0}%"', [this.escapeSearchQuery(searchQuery.toUpperCase())]);
      },
    });

    // Add promoteAccount function to detail
    lang.extend(crm.Views.Account.Detail, {
      promoteIcon: 'fa fa-level-up',
      successfulLinkText: 'Linked Successfully',
      linkingText: 'Linking ${account} to ${backOffice}',
      errorMessage: 'Error promoting account for reason: ${reason}',
      querySelect: crm.Views.Account.Detail.prototype.querySelect.concat([
        'ErpExtId', // ERP Customer ID
        'ErpStatus',// ERP Status
        'ErpPaymentTerm', // ERP Payment Terms
        'SyncStatus',
        'ErpAccountingEntityId',
        'ErpLogicalId',
        'PromotedToAccounting',
      ]),
      _canPromote: function _canPromote() {
        const promise = new Promise(
          (resolve) => {
            this.showBusy();
            const entry = {
              '$name': 'CanPromoteAccount',
              'request': {
                'accountId': this.entry.$key,
              },
            };
            const request = new Sage.SData.Client.SDataServiceOperationRequest(this.getService())
              .setResourceKind('accounts')
              .setContractName('dynamic')
              .setOperationName('CanPromoteAccount');

            const canPromote = {
              value: false,
              result: '',
            };

            request.execute(entry, {
              async: false,
              success: (result) => {
                canPromote.value = result.response.Result;
                resolve(canPromote);
              },
              failure: (err) => {
                const response = JSON.parse(err.response)[0];
                canPromote.result = response.message;
                resolve(canPromote);
              },
              scope: this,
            });
          });
        return promise;
      },
      _onPromoteAccountClick: function _onPromoteAccountClick() {
        const canPromotePromise = this._canPromote();
        canPromotePromise.then((val) => {
          this.hideBusy();
          if (!val.value) {
            App.modal.createSimpleDialog({
              title: 'alert',
              content: val.result,
              getContent: () => { return; },
            });
            return;
          }
          const promote = new Promote();
          promote.promoteToBackOffice(this.entry, 'Account', this);
        });
      },
      _onAddQuoteClick: function _onAddQuoteClick() {
        const view = App.getView('quote_edit');
        view.show({
          entry: this.entry,
          fromContext: this,
          detailView: 'quote_detail',
          insert: true,
        });
      },
      _onAddOrderClick: function _onAddOrderClick() {
        const view = App.getView('salesorder_edit');
        view.show({
          entry: this.entry,
          fromContext: this,
          detailView: 'salesorder_detail',
          insert: true,
        });
      },
      hideBusy: function hideBusy() {
        if (this._busyIndicator) {
          this._busyIndicator.complete();
          App.modal.disableClose = false;
          App.modal.hide();
        }
      },
      showBusy: function showBusy() {
        if (!this._busyIndicator || this._busyIndicator._destroyed) {
          this._busyIndicator = new Busy({ id: this.id + '-busyIndicator' });
        }
        this._busyIndicator.start();
        App.modal.disableClose = true;
        App.modal.showToolbar = false;
        App.modal.add(this._busyIndicator);
      },
    });

    const originalProcessData = Mobile.SalesLogix.Views.Account.Edit.prototype.processData;
    const originalInit = Mobile.SalesLogix.Views.Account.Edit.prototype.init;
    const originalProcessEntry = Mobile.SalesLogix.Views.Account.Edit.prototype.processEntry;
    const originalOnRefreshInsert = Mobile.SalesLogix.Views.Account.Edit.prototype.onRefreshInsert;
    const icboeUtility = Utility;
    lang.extend(crm.Views.Account.Edit, {
      _busyIndicator: null,
      init: function init() {
        originalInit.apply(this, arguments);
        this.connect(this.fields.BackOffice, 'onChange', this.onBackOfficeChange);
        this.connect(this.fields.BackOfficeAccountingEntity, 'onChange', this.onBackOfficeAccountingEntityChange);
      },
      disableBackOfficeData: function disableBackOfficeData() {
        this.fields.BackOffice.disable();
        this.fields.BackOfficeAccountingEntity.disable();
      },
      enableBackOfficeData: function enableBackOfficeData() {
        this.fields.BackOffice.enable();
        this.fields.BackOfficeAccountingEntity.enable();
      },
      processEntry: function processEntry(entry) {
        originalProcessEntry.apply(this, arguments);
        if (entry && entry.ErpExtId) {
          this.disableBackOfficeData();
        } else {
          this.enableBackOfficeData();
        }
        return entry;
      },
      processData: function processData() {
        this.showBusy();
        originalProcessData.apply(this, arguments);
        this.getEntriesFromIds();
      },
      getEntriesFromIds: function getEntriesFromIds() {
        const mappedLookups = [
          'BackOffice',
          'BackOfficeAccountingEntity',
        ];
        const mappedProperties = [
          'LogicalId',
          'AcctEntityExtId',
        ];
        const fields = ['ErpLogicalId', 'ErpAccountingEntityId'];
        icboeUtility.setFieldsFromIds(mappedLookups, mappedProperties, fields, this).then(() => {
          this.hideBusy();
        });
      },
      onBackOfficeChange: function onBackOfficeChange(value, field) {
        this.fields.BackOffice.setValue(field.currentSelection);
        this.fields.ErpLogicalId.setValue(field.currentSelection.LogicalId);
        const accountingField = this.fields.BackOfficeAccountingEntity;
        accountingField.where = `BackOffice.Id eq "${field.currentSelection.$key}"`;
        const accountingIsToBackOffice = accountingField.currentSelection && accountingField.currentSelection.BackOffice.$key === field.currentSelection.$key;
        if (field.currentSelection.BackOfficeAccountingEntities.$resources && !accountingIsToBackOffice) {
          const entry = field.currentSelection.BackOfficeAccountingEntities.$resources[0];
          if (entry) {
            accountingField.setSelection(entry);
            this.onBackOfficeAccountingEntityChange(accountingField.getValue(), accountingField);
          }
        }
      },
      onBackOfficeAccountingEntityChange: function onBackOfficeAccountingEntityChange(value, field) {
        this.fields.BackOfficeAccountingEntity.setValue(field.currentSelection);
        this.fields.ErpAccountingEntityId.setValue(field.currentSelection.AcctEntityExtId);
      },
      onRefreshInsert: function onRefreshInsert() {
        this.enableBackOfficeData();
        originalOnRefreshInsert.apply(this, arguments);
      },
      hideBusy: function hideBusy() {
        if (this._busyIndicator) {
          this._busyIndicator.complete();
          App.modal.disableClose = false;
          App.modal.hide();
        }
      },
      showBusy: function showBusy() {
        if (!this._busyIndicator || this._busyIndicator._destroyed) {
          this._busyIndicator = new Busy({ id: this.id + '-busyIndicator' });
        }
        this._busyIndicator.start();
        App.modal.disableClose = true;
        App.modal.showToolbar = false;
        App.modal.add(this._busyIndicator);
      },
    });

    /*
     * Edit View
     */
    am.registerCustomization('edit', 'account_edit', {
      at: (row) => {
        return row.name === 'BusinessDescription';
      },
      type: 'insert',
      where: 'after',
      value: [{
        label: this.backOfficeText,
        name: 'BackOffice',
        type: 'lookup',
        emptyText: '',
        valueTextProperty: 'BackOfficeName',
        view: 'salesorder_backoffice_related',
        where: `IsActive eq true`,
        include: false,
      }, {
        name: 'ErpLogicalId',
        property: 'ErpLogicalId',
        type: 'hidden',
        emptyText: '',
      }, {
        label: this.accountingEntityText,
        name: 'BackOfficeAccountingEntity',
        type: 'lookup',
        emptyText: '',
        valueTextProperty: 'Name',
        view: 'salesorder_backofficeaccountingentity_related',
        include: false,
      }, {
        name: 'ErpAccountingEntityId',
        property: 'ErpAccountingEntityId',
        type: 'hidden',
        emptyText: '',
      }],
    });

    /*
     * Quick Actions
     */
    am.registerCustomization('detail', 'account_detail', {
      at: function at(row) {
        return row.name === 'AddNoteAction';
      },
      type: 'insert',
      where: 'after',
      value: [{
        name: 'PromoteAccount',
        property: 'AccountName',
        label: this.promoteText,
        iconClass: 'fa fa-level-up fa-lg',
        action: '_onPromoteAccountClick',
        security: 'Entities/Account/PromoteAccount',
      }, {
          name: 'AddQuote',
          property: 'AccountName',
          label: this.addQuoteText,
          iconClass: 'fa fa-file-text-o fa-2x',
          action: '_onAddQuoteClick',
          security: 'Entities/Quote/Add',
        }, {
          name: 'AddOrder',
          property: 'AccountName',
          label: this.addOrderText,
          iconClass: 'fa fa-shopping-cart fa-2x',
          action: '_onAddOrderClick',
          security: 'Entities/SalesOrder/Add',
        }],
    });

    /*
     * Details
     */
    am.registerCustomization('detail', 'account_detail', {
      at: function at(row) {
        return row.name === detailRowMatch;
      },
      type: 'insert',
      where: 'after',
      value: [{
        label: this.erpStatusText,
        property: 'ErpStatus',
        exclude: (entry) => { return entry && entry.SyncStatus; },
      }, {
        label: this.syncStatusText,
        property: 'SyncStatus',
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
        label: this.erpCustomerText,
        property: 'ErpExtId',
      }, {
        label: this.backOfficeIdText,
        property: 'ErpLogicalId',
      }, {
        label: this.accountingEntityIdText,
        property: 'ErpAccountingEntityId',
      }],
    });

    /*
     * More Details
     */
    am.registerCustomization('detail', 'account_detail', {
      at: function at(row) {
        return row.name === moreDetailRowMatch;
      },
      type: 'insert',
      where: 'after',
      value: {
        label: this.erpPaymentTermText,
        property: 'ErpPaymentTerm',
      },
    });

    /*
     * Related Items
     */
    am.registerCustomization('detail', 'account_detail', {
      at: function at(row) {
        return row.name === 'RelatedItemsSection';
      },
      type: 'insert',
      where: 'after',
      value: {
        title: this.relatedERPItemsText,
        list: true,
        name: 'RelatedERPItemsSection',
        children: [{
          name: 'BillTo',
          label: this.erpBillToText,
          where: function where(entry) {
            return 'ErpBillToAccounts.Account.Id eq "' + entry.$key + '"';
          },
          view: 'account_billto_related',
        }, {
          name: 'ShipTo',
          label: this.erpShipToText,
          where: function where(entry) {
            return 'ErpShipToAccounts.Account.Id eq "' + entry.$key + '"';
          },
          view: 'account_shipto_related',
        }, {
            name: 'ContactAssociations',
            label: this.erpContactAssociationText,
            where: function where(entry) {
              return 'Account.Id eq "' + entry.$key + '"';
            },
            view: 'account_contactassociations_related',
          }, {
            name: 'Quotes',
            label: this.quotesText,
            where: function where(entry) {
              return 'Account.Id eq "' + entry.$key + '"';
            },
            view: 'account_quotes_related',
          }, {
            name: 'SalesOrders',
            label: this.ordersText,
            where: function where(entry) {
              return 'Account.Id eq "' + entry.$key + '"';
            },
            view: 'account_salesorders_related',
          }, {
            name: 'SyncHistory',
            label: this.syncHistoryText,
            where: (entry) => {
              return `EntityType eq "Account" and EntityId eq "${entry.$key}"`;
            },
            view: 'account_syncresults_related',
          }],
      },
    });

    am.registerCustomization('detail', 'account_detail', {
      at: function at(row) {
        return row.name === 'RelatedItemsSection';
      },
      type: 'insert',
      where: 'before',
      value: {
        title: this.dashboardText,
        list: true,
        name: 'DashboardSection',
        children: [{
          name: 'AccountSalesDashboardWidget',
          relatedView: {
            widgetType: 'account_sales_dashboard_widget',
            id: 'account_sales_dashboard_widget',
          },
        }, {
            name: 'AccountNewDashboardWidget',
            relatedView: {
              widgetType: 'account_new_dashboard_widget',
              id: 'account_new_dashboard_widget',
            },
          }, {
            name: 'AccountOpenDashboardWidget',
            relatedView: {
              widgetType: 'account_open_dashboard_widget',
              id: 'account_open_dashboard_widget',
            },
          }],
      },
    });
  },
  loadToolbars: function loadToolbars() {
  },
});

export default __class;
