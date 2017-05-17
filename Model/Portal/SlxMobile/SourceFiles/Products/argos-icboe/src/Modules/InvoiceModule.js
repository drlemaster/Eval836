import declare from 'dojo/_base/declare';
import _Module from './_Module';
import ERPInvoiceDetail from '../Views/ERPInvoices/Detail';
import ERPInvoiceList from '../Views/ERPInvoices/List';
import ERPInvoiceItemDetail from '../Views/ERPInvoiceItems/Detail';
import ERPInvoiceItemList from '../Views/ERPInvoiceItems/List';
import ERPReceivablesList from '../Views/ERPReceivables/List';
import '../Models/ErpInvoice/SData';
import '../Models/ErpInvoiceItem/SData';
import '../Models/ErpInvoicePerson/SData';

const __class = declare('icboe.Modules.InvoiceModule', [_Module], {
  defaultViews: ['invoice_list'],
  init: function init() {
  },
  loadViews: function loadViews() {
    const am = this.applicationModule;
    am.registerView(new ERPInvoiceList());
    am.registerView(new ERPInvoiceDetail());
    am.registerView(new ERPInvoiceItemDetail());
    am.registerView(new ERPInvoiceItemList({
      id: 'invoice_items_related',
      disableRightDrawer: true,
      expose: false,
    }));
    am.registerView(new ERPReceivablesList({
      id: 'invoice_receivables_related',
      groupsEnabled: false,
      disableRightDrawer: true,
      expose: false,
    }));
  },
  loadCustomizations: function loadCustomizations() {
    const am = this.applicationModule;
    am.registerCustomization('detail/tools', 'invoice_detail', {
      at: function at(tool) {
        return tool.id === 'edit';
      },
      type: 'remove',
    });

    am.registerCustomization('detail/tools', 'invoice_item_detail', {
      at: function at(tool) {
        return tool.id === 'edit';
      },
      type: 'remove',
    });

    am.registerCustomization('list/tools', 'invoice_list', {
      at: function at(tool) {
        return tool.id === 'new';
      },
      type: 'remove',
    });

    am.registerCustomization('list/tools', 'invoice_items_related', {
      at: function at(tool) {
        return tool.id === 'new';
      },
      type: 'remove',
    });
  },
  getDefaultViews: function getDefaultViews() {
    return this.defaultViews;
  },
  loadToolbars: function loadToolbars() {
  },
});

export default __class;
