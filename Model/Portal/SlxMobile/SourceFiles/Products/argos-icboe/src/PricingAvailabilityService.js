import lang from 'dojo/_base/lang';
import BusyIndicator from 'argos/Dialogs/BusyIndicator';

const __class = lang.setObject('icboe.PricingAvailabilityService', {
  _busyIndicator: null,
  parentMap: {
    'Quote': 'Quote',
    'QuoteItem': 'Quote',
    'QuoteItemAvailable': 'Quote',
    'SalesOrder': 'SalesOrder',
    'SalesOrderItem': 'SalesOrder',
    'SalesOrderItemAvailable': 'SalesOrder',
  },
  resourceOptionsMap: {
    'Quote': function mapQuote(product, resource) {
       return this._configureQuotePricingOptions(product, resource);
     },
    'QuoteItem': function mapQuoteItem(product, resource) {
       return this._configureQuoteItemPricingOptions(product, resource);
     },
     'QuoteItemAvailable': function mapQuoteItemAvailable(product, resource) {
       return this._configureQuoteItemAvailableOptions(product, resource);
     },
    'SalesOrder': function mapOrder(product, resource) {
       return this._configureOrderPricingOptions(product, resource);
     },
    'SalesOrderItem': function mapOrderItem(product, resource) {
       return this._configureOrderItemPricingOptions(product, resource);
     },
    'SalesOrderItemAvailable': function mapOrderItem(product, resource) {
       return this._configureOrderItemAvailableOptions(product, resource);
     },
  },
  validateMap: {
    'Quote': function validateQuote(product, resource, scope) {
      return this._validateQuoteOptions(product, resource, scope);
    },
    'QuoteItem': function validateQuoteItem() {
      return new Promise((resolve) => {
        resolve();
      });
    },
    'QuoteItemAvailable': function validateQuoteItem() {
      return new Promise((resolve) => {
        resolve();
      });
    },
    'SalesOrder': function validateOrder(product, resource, scope) {
      return this._validateOrderOptions(product, resource, scope);
    },
    'SalesOrderItem': function validateQuoteItem() {
      return new Promise((resolve) => {
        resolve();
      });
    },
    'SalesOrderItemAvailable': function validateQuoteItem() {
      return new Promise((resolve) => {
        resolve();
      });
    },
  },
  warehouseMap: {
    'QuoteItem': function mapQuoteItem(selection, resource, scope) {
      return this._configureQuoteItemWarehouseOptions(selection, resource, scope);
    },
    'SalesOrderItem': function mapOrderItem(selection, resource, scope) {
      return this._configureOrderItemWarehouseOptions(selection, resource, scope);
    },
  },
  _configureQuotePricingOptions: function _configureQuotePricingOptions(product, quote) {
    const pricingOptions = {
      resourceKind: 'quotes',
      operationName: 'requestPricingAvailability',
      requestOptions: {
        childEntityName: 'QuoteItem',
        entityName: 'Quote',
        entityId: quote.$key,
        serviceName: 'QuoteOrderTotal',
      },
    };
    return pricingOptions;
  },
  _configureQuoteItemAvailableOptions: function _configureQuoteItemAvailableOptions(product, quote) {
    const pricingOptions = {
      resourceKind: 'quotes',
      operationName: 'requestPricingAvailability',
      requestOptions: {
        childEntityIds: product.$key,
        childEntityName: 'QuoteItem',
        entityName: 'Quote',
        entityId: quote.$key,
        serviceName: 'QuoteAvailableToPromise',
      },
    };
    return pricingOptions;
  },
  _configureQuoteItemPricingOptions: function _configureQuoteItemPricingOptions(product, quote) {
    const pricingOptions = {
      resourceKind: 'quotes',
      operationName: 'requestPricingAvailability',
      requestOptions: {
        childEntityIds: product.$key,
        childEntityName: 'Product',
        entityName: 'Quote',
        entityId: quote.$key,
        serviceName: 'QuoteOrderLineTotal',
      },
    };
    return pricingOptions;
  },
  _configureQuoteItemWarehouseOptions: function _configureQuoteItemWarehouseOptions(selection, resource, scope) {
    const options = {
      operationName: 'UpdateLineItemWithWarehouse',
      resourceKind: 'quotes',
      requestOptions: {
        entityName: resource,
        entityId: scope.options.context[resource].$key,
        SlxLocationExtID: selection.SlxLocation,
        SlxLocationID: selection.SlxLocationID,
        ATPDate: selection.ATPDate,
        AvailableQuantity: selection.AvailableQuantity,
      },
    };
    return options;
  },
  _configureOrderPricingOptions: function _configureOrderPricingOptions(product, order) {
    const pricingOptions = {
      resourceKind: 'salesOrders',
      operationName: 'requestPricingAvailability',
      requestOptions: {
        childEntityName: 'SalesOrderItem',
        entityName: 'SalesOrder',
        entityId: order.$key,
        serviceName: 'OrderTotal',
      },
    };
    return pricingOptions;
  },
  _configureOrderItemAvailableOptions: function _configureOrderItemAvailableOptions(product, order) {
    const pricingOptions = {
      resourceKind: 'salesOrders',
      operationName: 'requestPricingAvailability',
      requestOptions: {
        childEntityIds: product.$key,
        childEntityName: 'SalesOrderItem',
        entityName: 'SalesOrder',
        entityId: order.$key,
        serviceName: 'AvailableToPromise',
      },
    };
    return pricingOptions;
  },
  _configureOrderItemPricingOptions: function _configureOrderItemPricingOptions(product, order) {
    const pricingOptions = {
      resourceKind: 'salesOrders',
      operationName: 'requestPricingAvailability',
      requestOptions: {
        childEntityIds: product.$key,
        childEntityName: 'Product',
        entityName: 'SalesOrder',
        entityId: order.$key,
        serviceName: 'OrderLineTotal',
      },
    };
    return pricingOptions;
  },
  _configureOrderItemWarehouseOptions: function _configureOrderItemWarehouseOptions(selection, resource, scope) {
    const options = {
      operationName: 'UpdateLineItemWithWarehouse',
      resourceKind: 'salesOrders',
      requestOptions: {
        entityName: resource,
        entityId: scope.options.context[resource].$key,
        SlxLocationExtID: selection.SlxLocation,
        SlxLocationID: selection.SlxLocationID,
        ATPDate: selection.ATPDate,
        AvailableQuantity: selection.AvailableQuantity,
      },
    };
    return options;
  },
  _getEntryFromContext: function getEntryFromContext(scope, resourceKind) {
    const parentResource = this.parentMap[resourceKind];
    return scope.options.context[parentResource];
  },
  // RequestPricingAvailability function pulled from WebClient and modified by Tyler Wallace to remove dependencies - Sage.Utility
  _requestPricingAvailability: function _requestPricingAvailability(options = {}, scope, resolve) {
    const request = new Sage.SData.Client.SDataServiceOperationRequest(scope.getService())
      .setResourceKind(options.resourceKind)
      .setOperationName(options.operationName);

    const entry = {
      '$name': options.operationName,
      'request': {
        'options': JSON.stringify(options.requestOptions),
      },
    };
    request.execute(entry, {
      success: (data) => {
        this.hideBusy();
        let result = '';
        try {
          result = JSON.parse(data.response.Result);
        } catch (err) {
          console.log(err); // eslint-disable-line
        }
        resolve(result);
      },
      failure: (result) => {
        this.hideBusy();
        const response = JSON.parse(result.response)[0];
        this.createAlertDialog(response.message);
      },
    });
  },
  _updateItemWithSelectedWarehouse: function _updateItemWithSelectedWarehouse(options, scope) {
    const promise = new Promise((resolve, reject) => {
      const request = new Sage.SData.Client.SDataServiceOperationRequest(scope.getService())
        .setResourceKind(options.resourceKind)
        .setOperationName(options.operationName);
      const entry = {
        '$name': options.operationName,
        'request': {
          'options': JSON.stringify(options.requestOptions),
        },
      };
      request.execute(entry, {
        success: (result) => {
          resolve(result);
        },
        failure: (result) => {
          const response = JSON.parse(result.response)[0];
          this.createAlertDialog(response.message);
          reject(result);
        },
      });
    });
    return promise;
  },
  _validateQuoteOptions: function _validateQuoteOptions(product, resource, scope) {
    const promise = new Promise((resolve, reject) => {
      const request = new Sage.SData.Client.SDataServiceOperationRequest(scope.getService())
        .setResourceKind('quotes')
        .setOperationName('validateOrderTotal');

      const entry = {
        '$name': 'ValidateOrderTotal',
        'request': {
          'QuoteId': resource.$key,
        },
      };
      request.execute(entry, {
        success: () => {
          resolve(true);
        },
        failure: (result) => {
          reject(result); // eslint-disable-line
        },
      });
    });
    return promise;
  },
  _validateOrderOptions: function _validateOrderOptions(product, resource, scope) {
    const promise = new Promise((resolve, reject) => {
      const request = new Sage.SData.Client.SDataServiceOperationRequest(scope.getService())
        .setResourceKind('salesOrders')
        .setOperationName('validateOrderTotal');

      const entry = {
        '$name': 'ValidateOrderTotal',
        'request': {
          'SalesOrderId': resource.$key,
        },
      };
      request.execute(entry, {
        success: () => {
          resolve(true);
        },
        failure: (result) => {
          reject(result); // eslint-disable-line
        },
      });
    });
    return promise;
  },
  _validateRequest: function _validateRequest(resource, product, scope) {
    return this.validateMap[resource].bind(this)(product, this._getEntryFromContext(scope, resource), scope);
  },
  createAlertDialog: function createAlertDialog(response) {
    return App.modal.createSimpleDialog({ title: 'alert', content: response, getContent: () => { return; }, leftButton: 'cancel', rightButton: 'confirm' });
  },
  configurePricingOptions: function configurePricingOptions(product, resource, scope) {
    return this.resourceOptionsMap[resource].bind(this)(product, this._getEntryFromContext(scope, resource));
  },
  configureWarehouseOptions: function configureWarehouseOptions(selection, resource, scope) {
    return this.warehouseMap[resource].bind(this)(selection, resource, scope);
  },
  hideBusy: function hideBusy() {
    App.modal.disableClose = false;
    App.modal.showToolbar = true;
    this._busyIndicator.complete(true);
    App.modal.hide();
  },
  onCheckPricingAndAvailability: function onCheckPricingAndAvailability(product, resource, scope) {
    const promise = new Promise((resolve, reject) => {
      this.showBusy();
      if (scope.options && scope.options.context) {
        this._validateRequest(resource, product, scope).then(() => {
          const pricingOptions = this.configurePricingOptions(product, resource, scope);
          this._requestPricingAvailability(pricingOptions, scope, resolve);
        }, (result) => {
          this.hideBusy();
          const response = JSON.parse(result.response)[0];
          this.createAlertDialog(response.message);
          reject(result);
        });
      } else {
        this.hideBusy();
        reject();
      }
    });
    return promise;
  },
  onUpdateItemWithWarehouse: function onUpdateItemWithWarehouse(selection, resource, scope) {
    if (selection) {
      this.showBusy();
      const requestOptions = this.configureWarehouseOptions(selection, resource, scope);
      return this._updateItemWithSelectedWarehouse(requestOptions, scope).then((result) => {
        this.hideBusy();
        return result;
      }, (result) => {
        this.hideBusy();
        return result;
      });
    }
  },
  showBusy: function showBusy() {
    if (!this._busyIndicator || this._busyIndicator._destroyed) {
      this._busyIndicator = new BusyIndicator({ id: 'pricingavialability-busyIndicator' });
    }
    this._busyIndicator.start();
    App.modal.disableClose = true;
    App.modal.showToolbar = false;
    App.modal.add(this._busyIndicator);
  },
});

export default __class;
