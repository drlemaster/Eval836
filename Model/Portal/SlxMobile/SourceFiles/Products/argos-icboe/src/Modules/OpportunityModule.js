import declare from 'dojo/_base/declare';
import lang from 'dojo/_base/lang';
import _Module from './_Module';
import QuotesList from '../Views/Quotes/List';
import SalesOrdersList from '../Views/SalesOrders/List';
import getResource from 'argos/I18n';

const resource = getResource('opportunityModule');

const __class = declare('icboe.Modules.OpportunityModule', [_Module], {
  addQuoteText: resource.addQuoteText,
  addOrderText: resource.addOrderText,
  relatedERPItemsText: resource.relatedERPItemsText,
  quotesText: resource.quotesText,
  ordersText: resource.ordersText,

  init: function init() {
  },
  loadViews: function loadViews() {
    const am = this.applicationModule;

    am.registerView(new QuotesList({
      id: 'opportunity_quotes_related',
      groupsEnabled: false,
      disableRightDrawer: true,
      expose: false,
      queryOrderBy: 'CreateDate asc',
    }));

    am.registerView(new SalesOrdersList({
      id: 'opportunity_salesorders_related',
      groupsEnabled: false,
      disableRightDrawer: true,
      expose: false,
      queryOrderBy: 'CreateDate asc',
    }));
  },
  loadCustomizations: function loadCustomizations() {
    const am = this.applicationModule;

    lang.extend(crm.Views.Opportunity.Detail, {
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
    });

    /*
     * Quick Actions
     */
    am.registerCustomization('detail', 'opportunity_detail', {
       at: function at(row) {
         return row.name === 'AddNoteAction';
       },
       type: 'insert',
       where: 'after',
       value: [{
         name: 'AddQuote',
         property: 'Description',
         label: this.addQuoteText,
         iconClass: 'fa fa-file-text-o fa-2x',
         action: '_onAddQuoteClick',
         security: 'Entities/Quote/Add',
       }, {
         name: 'AddOrder',
         property: 'Description',
         label: this.addOrderText,
         iconClass: 'fa fa-shopping-cart fa-2x',
         action: '_onAddOrderClick',
         security: 'Entities/SalesOrder/Add',
       }],
    });

    /*
     * Related Items
     */
    am.registerCustomization('detail', 'opportunity_detail', {
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
          name: 'Quotes',
          label: this.quotesText,
          where: function where(entry) {
            return 'Opportunity.Id eq "' + entry.$key + '"';
          },
          view: 'opportunity_quotes_related',
        }, {
          name: 'SalesOrders',
          label: this.ordersText,
          where: function where(entry) {
            return 'Opportunity.Id eq "' + entry.$key + '"';
          },
          view: 'opportunity_salesorders_related',
        }],
      },
    });
  },
  loadToolbars: function loadToolbars() {
  },
});

export default __class;
