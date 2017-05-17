import declare from 'dojo/_base/declare';
import format from 'crm/Format';
import Detail from 'argos/Detail';
import MODEL_NAMES from '../../Models/Names';
import getResource from 'argos/I18n';

const resource = getResource('erpShipmentsDetail');

const __class = declare('icboe.Views.ERPShipments.Detail', [Detail], {
  // Localization
  titleText: resource.titleText,
  actionsText: resource.actionsText,
  relatedItemsText: resource.relatedItemsText,
  moreDetailsText: resource.moreDetailsText,
  shipmentIdText: resource.shipmentIdText,
  accountText: resource.accountText,
  datePromisedText: resource.datePromisedText,
  actualShipDateText: resource.actualShipDateText,
  actualDeliveryDateText: resource.actualDeliveryDateText,
  carrierText: resource.carrierText,
  erpStatusText: resource.erpStatusText,
  erpStatusDateText: resource.erpStatusDateText,
  warehouseLocationText: resource.warehouseLocationText,
  partialShipAllowedText: resource.partialShipAllowedText,
  grossWeightText: resource.grossWeightText,
  declaredValueText: resource.declaredValueText,
  shipmentTotalAmountText: resource.shipmentTotalAmountText,
  paymentTermText: resource.paymentTermText,
  shipToText: resource.shipToText,
  shipToAddressText: resource.shipToAddressText,
  shipmentLinesText: resource.shipmentLinesText,
  entityText: resource.entityText,

  // View Properties
  id: 'erpshipments_detail',
  modelName: MODEL_NAMES.ERPSHIPMENT,
  resourceKind: 'erpShipments',

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
        name: 'ShipmentId',
        property: 'ErpExtId',
        label: this.shipmentIdText,
      }, {
        name: 'Account',
        property: 'Account.AccountName',
        label: this.accountText,
        view: 'account_detail',
        key: 'Account.$key',
      }, {
        name: 'DatePromised',
        property: 'DatePromised',
        label: this.datePromisedText,
        renderer: function renderer(data) {
          return format.date(data);
        },
      }, {
        name: 'ActualShipDate',
        property: 'ErpActualShipDate',
        label: this.actualShipDateText,
        renderer: function renderer(data) {
          return format.date(data);
        },
      }, {
        name: 'ActualDeliveryDate',
        property: 'ErpActualDeliveryDate',
        label: this.actualDeliveryDateText,
        renderer: function renderer(data) {
          return format.date(data);
        },
      }, {
        name: 'Carrier',
        property: 'ErpCarrierParty',
        label: this.carrierText,
      }, {
        name: 'ERPStatus',
        property: 'ErpStatus',
        label: this.erpStatusText,
      }, {
        name: 'ERPStatusDate',
        property: 'ErpStatusDate',
        label: this.erpStatusDateText,
        renderer: function renderer(data) {
          return format.date(data);
        },
      }],
    }, {
      title: this.moreDetailsText,
      name: 'MoreDetailsSection',
      collapsed: true,
      children: [{
        name: 'WarehouseLocation',
        property: 'SlxLocation.Name',
        label: this.warehouseLocationText,
        renderer: function renderer(val) {
          if (val) {
            return val;
          }
          return '';
        },
      }, {
        name: 'PartialShipAllowed',
        property: 'ErpPartialShipAllowed',
        label: this.partialShipAllowedText,
        renderer: function renderer(data) {
          return format.yesNo(data);
        },
      }, {
        name: 'GrossWeight',
        property: 'ErpGrossWeight',
        label: this.grossWeightText,
        renderer: function renderer(val) {
          if (this.entry.ErpGrossWeightUnit && val) {
            return format.multiCurrency.call(null, val, this.entry.ErpGrossWeightUnit);
          }
          return format.currency.call(null, val);
        },
      }, {
        name: 'DeclaredValue',
        property: 'ErpDeclaredValue',
        label: this.declaredValueText,
        renderer: (this.formatMultiCurrency).bindDelegate(this),
      }, {
        name: 'ShipmentTotalAmount',
        property: 'ShipmentTotalAmount',
        label: this.shipmentTotalAmountText,
        renderer: (this.formatMultiCurrency).bindDelegate(this),
      }, {
        name: 'PaymentTerm',
        property: 'ErpIncoTerm',
        label: this.paymentTermText,
      }, {
        name: 'ShipTo',
        property: 'ErpShipTo.Name',
        label: this.shipToText,
        view: 'erpshipto_detail',
        key: 'ErpShipTo.$key',
      }, {
        name: 'ShipToAddress',
        property: 'ErpShipTo.Address',
        label: this.shipToAddressText,
        renderer: function renderer(data) {
          if (data) {
            return format.address(data);
          }
        },
      }],
    }, {
      title: this.relatedItemsText,
      list: true,
      name: 'RelatedItemsSection',
      children: [{
          name: 'ShipmentLines',
          label: this.shipmentLinesText,
          where: function where(entry) {
            return 'ErpShipment.Id eq "' + entry.$key + '"';
          },
          view: 'shipment_lines_related',
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
