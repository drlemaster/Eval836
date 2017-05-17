/*globals Sage, dojo, dojox, dijit, Simplate, window, Sys, define, getCookie, cookie, $ */
define('Sage/Utility/PricingAndAvailability', [
    'dojo/_base/lang',
    'dojo/_base/declare',
    'dojo/dom-construct',
    'Sage/Data/SDataServiceRegistry',
    'dojo/json',
    'dojo/string',
    'dojo/i18n!./nls/PricingAndAvailability',
    'Sage/UI/Dialogs',
    'Sage/MainView/IntegrationContract/PricingAvailabilityWidget'
],
function (lang, declare, domConstruct, sDataServiceRegistry, json, dString, nlsStrings, dialogs, PricingAvailabilityWidget) {
    var pricingAvailabilityUtil = declare('Sage.Utility.PricingAndAvailability', [], {
        requestPricingAvailability: function (options) {
            var service = sDataServiceRegistry.getSDataService('dynamic');
            var req = new Sage.SData.Client.SDataServiceOperationRequest(service);
            req.setResourceKind(options.resourceKind);
            req.setOperationName(options.operationName);
            var entry = {
                "$name": options.operationName,
                "request": {
                    "options": Sys.Serialization.JavaScriptSerializer.serialize(options.requestOptions)
                }
            };
            req.execute(entry, {
                success: function (data) {
                    if (options.callback) {
                        var result = dojo.isObject(data.response) && data.response.Result ? json.parse(data.response.Result) : "";
                        options.callback(result);
                    }
                },
                failure: function (result) {
                    dialogs.showError(result);
                }
            });
        },
        showWarehouseAvailability: function (options) {
            var dialog = dijit.byId("dlgPricingAvailabilityWidget");
            if (!dialog) {
                dialog = new PricingAvailabilityWidget();
            }
            dialog.initialize(options);
            dialog.show();
        },
        buildWarehouseUrl: function (options) {
            var clientContextService = Sage.Services.getService('ClientContextService');
            var closed = !!(clientContextService !== null && clientContextService.containsKey('IsClosed')) && clientContextService.getValue('IsClosed') == 'True';
            //var logicalId = !!(clientContextService !== null && clientContextService.containsKey('LogicalId')) && clientContextService.getValue('LogicalId');
            var location;
            var isCPQ = false;
            if (options.item.SlxLocation) {
                location = options.item.SlxLocation.Name ? options.item.SlxLocation.Name : options.item.SlxLocation.$key;
            } else if (options.configuredItem) {
                location = "";
            } else {
                location = nlsStrings.warehouse_Default;
            }
            var service = Sage.Services.getService('IntegrationContractService');
            var cpqConfigStatus = nlsStrings.status_NotConfigurable;
            if (service.isCPQIntegrationEnabled && options.item.Product && options.item.Product.ErpConfiguredItem === true && options.item.Status != cpqConfigStatus) {
                isCPQ = true;
            }
            return closed || isCPQ ? location : dString.substitute("<a id='warehouseLink' href='javascript:Sage.Utility.PricingAndAvailability.showWarehouseAvailability(${0});'>${1}<a>",
            [JSON.stringify(options), location]);
        },
        updateItemResponsePricing: function (pricingResponse, newEntity) {
            if (pricingResponse) {
                for (var x = 0; x < pricingResponse.Children.length; x++) {
                    var product = pricingResponse.Children[x];
                    for (var key in product.Properties) {
                        if (key != 'ProductCode') {
                            if (key.indexOf('.') > 0 && key.indexOf('ErpExtId') > 0) {
                                var propname = key.split(".");
                                var extid = product.Properties[key].split("#");
                                if(extid !== null && extid !== '')
								{
									if (newEntity[propname[0]] === null) {
										newEntity[propname[0]] = { Name: extid[0], $key: extid[1] };
									} else {
										newEntity[propname[0]]["Name"] = extid[0];
										newEntity[propname[0]]["$key"] = extid[1];
									}
								}
                            } else
                                newEntity[key] = product.Properties[key];
                        }
                    }
                }
            }
            return newEntity;
        },
        requestCPQStatus: function (options) {
            if (options.item.Product) {
                // To see if user has the permission
                var svc = Sage.Services.getService('RoleSecurityService');
                var hasAccess = svc.hasAccess(options.securedAction);
                var clientContextService = Sage.Services.getService('ClientContextService');
                var closed = !!(clientContextService !== null && clientContextService.containsKey("IsClosed")) && clientContextService.getValue("IsClosed") == 'True';
                if (closed || !hasAccess) {
                    if (options.lineResourceKind === "SalesOrderItems")
					{
                         if (!options.item.ErpStatus ) {
                             return nlsStrings.status_NotConfigurable;
                         } else {
                            return options.item.ErpStatus;
                         }
					}
					else  
					{
                         if (!options.item.Status) {
                             return nlsStrings.status_NotConfigurable;
                         } else {
                            return options.item.Status;
                         }
					}
					
                } else { // If the entity is not closed
                    var service = Sage.Services.getService('IntegrationContractService');
                    if (service.isCPQIntegrationEnabled && options.item.Product.ErpConfiguredItem === true) {
                        var cpqConfigStatus;
                        if (options.lineResourceKind === "SalesOrderItems")
                        {
                             if (!options.item.ErpLineNumber && (!options.item.ErpStatus || options.item.ErpStatus === 'Open')) {
                                cpqConfigStatus = nlsStrings.status_Configure;
                             } else {
                                 cpqConfigStatus = options.item.ErpStatus;
                             }
                        }
						else
                        {
							if (!options.item.ErpLineNumber && (!options.item.Status || options.item.Status === 'Open')) {
                                cpqConfigStatus = nlsStrings.status_Configure;
                            } else {
                                cpqConfigStatus = options.item.Status;
                            }
                        }
                        var requestOptions = {
                            entry: {
                                "$name": "ConfigProductItem",
                                "request": {
                                    "entity": options.item,
                                    "currentUrl": window.location.href,
                                    "isPrepare": true,
                                    "status": cpqConfigStatus,
                                    "languageSetting": cookie.getCookie("SLXLanguageSetting")
                                }
                            },
                            businessRuleMethod: "ConfigProductItem"
                        };
 
                        if ((options.lineResourceKind === "SalesOrderItems" || options.lineResourceKind === "QuoteItems") && !options.item.ErpLineNumber) {
                           return dString.substitute("<a id='requestCPQ' href='javascript:Sage.Link.redirectUrl(${0},\"${1}\");'>${2}<a>",[JSON.stringify(requestOptions),options.lineResourceKind,cpqConfigStatus]);
                        }
                        else if ((options.lineResourceKind !== "SalesOrderItems" && options.lineResourceKind !== "QuoteItems") && !options.item.Status) {
                           return dString.substitute("<a id='requestCPQ' href='javascript:Sage.Link.redirectUrl(${0},\"${1}\");'>${2}<a>",[JSON.stringify(requestOptions),options.lineResourceKind,cpqConfigStatus]);
                        }
                       else{
                           return cpqConfigStatus;
                        }
                    } else { // If the CPQ is not enalbled or produt is not configured
                        return nlsStrings.status_NotConfigurable;
                    }
                }
            } else { // Add custom product
                return nlsStrings.status_NotConfigurable;
            }
        },
        _isEntityClosed: function (options) {
            var service = sDataServiceRegistry.getSDataService('dynamic');
            var req = new Sage.SData.Client.SDataServiceOperationRequest(service);
            req.setResourceKind(options.resourceKind)
                .setOperationName(options.operationName);
            var entry = {
                "$name": options.operationName,
                "request": {
                    "entityId": Sage.Utility.getCurrentEntityId()
                }
            };
            req.execute(entry, {
                async: false,
                success: function (result) {
                    return result.response.Result;
                },
                failure: function (result) {
                    dialogs.showError(result);
                }
            });
            return true;
        },
        _updateItemWithSelectedWarehouse: function (options) {
            var grid = dijit.byId(options.gridId);
            var pricingOptions = {
                resourceKind: options.resourceKind,
                operationName: 'RequestPricingAvailability',
                requestOptions: {
                    locationId: options.SlxLocationID,
                    quantity: options.item.Quantity,
                    childEntityIds: options.item.Product.$key,
                    childEntityName: 'Product',
                    itemEntityName: options.childEntityName,
                    entityName: options.entityName,
                    entityId: Sage.Utility.getCurrentEntityId(),
                    serviceName: options.serviceName,
                    unitOfMeasureId: ('UnitOfMeasure' in options) ? options.UnitOfMeasure.$key : ""
                },
                callback: function (pricingResponse) {
                    if (pricingResponse) {
                        var request = pricingResponse.Children[0];
                        if (request) {
                            var errorProp = request.Properties['messageText'];
                            var errorCode = request.Properties['ErrorCode'];
                            if (errorProp || errorCode) {
                                Sage.UI.Dialogs.showError(dojo.string.substitute(nlsStrings.error_PricingRequest, [errorProp]));
                            } else {
                                Sage.Utility.PricingAndAvailability.updateItemResponsePricing(pricingResponse, options.item);
                                var rowId = grid.getSelectedRowId();
                                grid._grid.updateDirty(rowId, 'SlxLocation', options.item['SlxLocation']);
                                grid._grid.updateDirty(rowId, 'DocCalculatedPrice', options.item['DocCalculatedPrice']);
                                grid._grid.updateDirty(rowId, 'DocExtendedPrice', options.item['DocExtendedPrice']);
                                grid._grid.updateDirty(rowId, 'DocTotalAmount', options.item['DocTotalAmount']);

                                //var data = grid.getSelectedRowData();
                                //var row = grid.reRenderRow(data[0]);
                                //var rowElement = dojo.byId(dString.substitute('Sales Order_SalesOrderProductsgrdItems_gridView-row-${0}', [rowId]));
                                //domConstruct.place(row.childNodes[0], rowElement, 'replace');
                                grid._grid.save();
                                grid.refresh();
                            }
                        }
                    }
                }
            };
            Sage.Utility.PricingAndAvailability.requestPricingAvailability(pricingOptions);
            return true;
        }
    });

    Sage.namespace('Utility.PricingAndAvailability');
    lang.mixin(Sage.Utility.PricingAndAvailability, new pricingAvailabilityUtil());
    return pricingAvailabilityUtil;
});

require(['Sage/Utility/PricingAndAvailability']);
