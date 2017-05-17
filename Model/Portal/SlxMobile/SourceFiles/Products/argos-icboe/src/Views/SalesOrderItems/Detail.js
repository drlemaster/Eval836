/**
 * @class .Views.SalesOrderItems.Detail
 *
 *
 * @extends argos.Detail
 * @requires argos.Detail
 * @requires crm.Format
 *
 */
import declare from 'dojo/_base/declare';
import connect from 'dojo/_base/connect';
import array from 'dojo/_base/array';
import format from 'crm/Format';
import Detail from 'argos/Detail';
import MODEL_NAMES from '../../Models/Names';
import getResource from 'argos/I18n';

const resource = getResource('salesOrderItemsDetail');

const __class = declare('icboe.Views.SalesOrderItems.Detail', [Detail], {
  // Localization
  titleText: resource.titleText,
  lineText: resource.lineText,
  quantityText: resource.quantityText,
  priceText: resource.priceText,
  extendedAmountText: resource.extendedAmountText,
  productNameText: resource.productNameText,
  descriptionText: resource.descriptionText,
  salesOrderIdText: resource.salesOrderIdText,
  skuText: resource.skuText,
  baseExtendedAmountText: resource.baseExtendedAmountText,
  baseAdjustedPriceText: resource.baseAdjustedPriceText,
  discountText: resource.discountText,
  adjustedPriceText: resource.adjustedPriceText,
  statusText: resource.statusText,
  shippedQuantityText: resource.shippedQuantityText,
  openQuantityText: resource.openQuantityText,
  dropShipText: resource.dropShipText,
  backOrderedText: resource.backOrderedText,
  partialShipAllowedText: resource.partialShipAllowedText,
  fixedPriceItemText: resource.fixedPriceItemText,
  rushRequestText: resource.rushRequestText,
  warehouseText: resource.warehouseText,
  substituteItemText: resource.substituteItemText,
  detailsText: resource.detailsText,
  moreDetailsText: resource.moreDetailsText,
  relatedItemsText: resource.relatedItemsText,
  entityText: resource.entityText,
  confirmDeleteText: resource.confirmDeleteText,
  removeOrderLineText: resource.removeOrderLineText,
  unitOfMeasureText: resource.unitOfMeasureText,
  // View Properties
  id: 'salesorder_item_detail',
  editView: 'salesorder_item_edit',
  resourceKind: 'salesorderitems',
  modelName: MODEL_NAMES.SALESORDERITEM,

createEntryForDelete: function createEntryForDelete(e) {
    const entry = {
      '$key': e.$key,
      '$etag': e.$etag,
      '$name': e.$name,
    };
    return entry;
  },
  removeOrderLine: function removeOrderLine() {
    // TODO: [INFORCRM-7712] Implement this in the model (model needs remove call)
    App.modal.createSimpleDialog({
      title: 'alert',
      content: this.confirmDeleteText,
      getContent: () => { return; },
    }).then(() => {
      const entry = this.createEntryForDelete(this.entry);
      const request = this.store._createEntryRequest(this.entry.$key, {});

      if (request) {
        request.delete(entry, {
          success: this.onDeleteSuccess,
          failure: this.onRequestDataFailure,
          scope: this,
        });
      }
    });
  },
  onDeleteSuccess: function onDeleteSuccess() {
    const views = [
      App.getView('salesorder_items_related'),
      App.getView('salesorder_detail'),
      App.getView('salesorder_list'),
    ];

    array.forEach(views, function setViewRefresh(view) {
      if (view) {
        view.refreshRequired = true;
      }
    }, this);

    connect.publish('/app/refresh', [{
      resourceKind: this.resourceKind,
    }]);
    ReUI.back();
  },
  createToolLayout: function createToolLayout() {
    return this.tools || (this.tools = {
      'tbar': [{
        id: 'edit',
        cls: 'fa fa-pencil fa-lg',
        action: 'navigateToEditView',
        security: App.getViewSecurity(this.editView, 'update'),
      }, {
        id: 'refresh',
        cls: 'fa fa-refresh fa-fw fa-lg',
        action: '_refreshClicked',
      }, {
        id: 'removeOrderLine',
        cls: 'fa fa-times-circle fa-lg',
        action: 'removeOrderLine',
        title: this.removeOrderLineText,
        security: 'Entities/SalesOrder/Delete',
      }],
    });
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
        name: 'LineNumber',
        property: 'ErpLineNumber',
        label: this.lineText,
      }, {
        name: 'SalesOrder_SalesOrderNumber',
        property: 'SalesOrder.SalesOrderNumber',
        label: this.salesOrderIdText,
        view: 'salesorder_detail',
        key: 'SalesOrder.$key',
      }, {
        name: 'ProductName',
        property: 'ProductName',
        label: this.productNameText,
      }, {
        name: 'Description',
        property: 'Description',
        label: this.descriptionText,
      }, {
        name: 'ActualID',
        property: 'ActualID',
        label: this.skuText,
      }, {
        name: 'Price',
        property: 'Price',
        label: this.priceText,
        renderer: (this.formatMultiCurrency).bindDelegate(this),
      }, {
        name: 'Discount',
        property: 'Discount',
        label: this.discountText,
        renderer: (this.formatMultiCurrency).bindDelegate(this),
      }, {
        name: 'CalculatedPrice',
        property: 'CalculatedPrice',
        label: this.adjustedPriceText,
        renderer: (this.formatMultiCurrency).bindDelegate(this),
      }, {
        name: 'DocCalculatedPrice',
        property: 'DocCalculatedPrice',
        label: this.baseAdjustedPriceText,
        renderer: (this.formatMultiCurrency).bindDelegate(this),
      }, {
        name: 'Quantity',
        property: 'Quantity',
        label: this.quantityText,
        renderer: function renderer(val) {
          return format.fixedLocale(val, 2);
        },
      }, {
        name: 'UnitOfMeasure',
        property: 'UnitOfMeasure',
        label: this.unitOfMeasureText,
        renderer: function renderer(val) {
          if (val && val.Name) {
            return val.Name;
          }
          return null;
        },
      }, {
        label: this.extendedAmountText,
        name: 'ExtendedPrice',
        property: 'ExtendedPrice',
        renderer: (this.formatMultiCurrency).bindDelegate(this),
      }, {
        name: 'DocExtendedPrice',
        property: 'DocExtendedPrice',
        label: this.baseExtendedAmountText,
        renderer: (this.formatMultiCurrency).bindDelegate(this),
      }, {
        name: 'ErpStatus',
        property: 'ErpStatus',
        label: this.statusText,
      }],
    }, {
      title: this.moreDetailsText,
      name: 'MoreDetailsSection',
      collapsed: true,
      children: [{
        name: 'Warehouse',
        property: 'SlxLocation.Description',
        label: this.warehouseText,
      }, {
        name: 'ErpShippedQuantity',
        property: 'ErpShippedQuantity',
        label: this.shippedQuantityText,
        renderer: function renderer(val) {
          return format.fixedLocale(val, 2);
        },
      }, {
        name: 'ErpOpenQuantity',
        property: 'ErpOpenQuantity',
        label: this.openQuantityText,
        renderer: function renderer(val) {
          return format.fixedLocale(val, 2);
        },
      }, {
        name: 'ErpBackOrdered',
        property: 'ErpBackOrdered',
        label: this.backOrderedText,
        renderer: function renderer(data) {
          return format.yesNo(data);
        },
      }, {
        name: 'ErpDropShip',
        property: 'ErpDropShip',
        label: this.dropShipText,
        renderer: function renderer(data) {
          return format.yesNo(data);
        },
      }, {
        name: 'ErpPartialShipAllowed',
        property: 'ErpPartialShipAllowed',
        label: this.partialShipAllowedText,
        renderer: function renderer(data) {
          return format.yesNo(data);
        },
      }, {
        name: 'ErpFixedPriceItem',
        property: 'ErpFixedPriceItem',
        label: this.fixedPriceItemText,
        renderer: function renderer(data) {
          return format.yesNo(data);
        },
      }, {
        name: 'ErpRushRequest',
        property: 'ErpRushRequest',
        label: this.rushRequestText,
        renderer: function renderer(data) {
          return format.yesNo(data);
        },
      }, {
        name: 'ErpSubstituteItem',
        property: 'ErpSubstituteItem',
        label: this.substituteItemText,
        renderer: function renderer(data) {
          return format.yesNo(data);
        },
      }],
    }, {
        title: this.relatedItemsText,
        list: true,
        name: 'RelatedItemsSection',
        children: [],
    }]);
  },
  formatMultiCurrency: function formatMultiCurrency(val) {
    if (App.hasMultiCurrency() && val) {
      if (this.entry.SalesOrder.CurrencyCode) {
        return format.multiCurrency.call(null, val, this.entry.SalesOrder.CurrencyCode);
      }
      return format.currency.call(null, val);
    }
    return format.currency.call(null, val);
  },
});

export default __class;
