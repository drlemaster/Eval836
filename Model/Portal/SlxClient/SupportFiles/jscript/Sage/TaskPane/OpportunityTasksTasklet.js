/*globals Sage, dojo, dojox, dijit, Simplate, window, Sys, define */
define("Sage/TaskPane/OpportunityTasksTasklet", [
    'dojo/i18n!./nls/OpportunityTasksTasklet',
    'Sage/TaskPane/_BaseTaskPaneTasklet',
    'Sage/TaskPane/TaskPaneContent',
    'Sage/MainView/Opportunity/OpportunityStatistics',
    'dojo/_base/declare',
    'Sage/Utility',
    'dojo/string',
    'Sage/Data/SDataServiceRegistry',
    'Sage/UI/Dialogs'
],
function (i18nStrings, _BaseTaskPaneTasklet, TaskPaneContent, OpportunityStatistics, declare, utility, dString, sDataServiceRegistry, dialogs) {
    var opportunityTasksTasklet = declare('Sage.TaskPane.OpportunityTasksTasklet', [_BaseTaskPaneTasklet, TaskPaneContent], {
        taskItems: [],
        constructor: function () {
            dojo.mixin(this, i18nStrings);
            if (utility.getModeId() === 'detail') {
                this.taskItems = [
                    {
                        taskId: 'InsertSalesOrder',
                        type: "Link",
                        displayName: this.addSalesOrder,
                        clientAction: "opportunityTasksActions.createSalesOrderFromOpportunity()",
                        securedAction: 'Entities/SalesOrder/Add'
                    },
                    {
                        taskId: 'InsertQuote',
                        type: "Link",
                        displayName: this.addQuote,
                        clientAction: "opportunityTasksActions.createQuoteFromOpportunity()",
                        securedAction: 'Entities/Quote/Add'
                    },
					{
                        taskId: 'promoteOpportunity',
                        type: "Link",
                        displayName: this.promoteTitle,
                        clientAction: "opportunityTasksActions.validateCanPromote()",
                        securedAction: 'Entities/Opportunity/Promote'
                    }
                ];
            } else {
                this.taskItems = [
                    {
                        taskId: 'OpportunityStatistics',
                        type: "Link",
                        displayName: this.opportunityStatisticsTitle,
                        clientAction: 'opportunityTasksActions.opportunityStatistics();',
                        securedAction: 'Entities/Opportunity/OpportunityStatistics'
                    }
                ];
            }
        },
        validateCanPromote: function () {
            var currentEntityId = utility.getCurrentEntityId();
			this.getCurrentEntity();
            if (!currentEntityId) return;
            var service = Sage.Services.getService('IntegrationContractService');

            if (!service.isBackOfficeIntegrationEnabled) {
                dialogs.showError(this.integrationNotEnabled);
                return false;
            }
            var request = new Sage.SData.Client.SDataServiceOperationRequest(sDataServiceRegistry.getSDataService('dynamic'));
            request.setResourceKind("opportunities");
            request.setOperationName("CanPromoteOpportunity");
            var entry = {
                "$name": "CanPromoteOpportunity",
                "request": {
                    "OpportunityId": currentEntityId
                }
            };
            request.execute(entry, {
                success: dojo.hitch(this, function () {
                    this._promoteOpportunity(currentEntityId);
                })
            });
        },
        _promoteOpportunity: function (currentEntityId) {
            var request = new Sage.SData.Client.SDataSingleResourceRequest(sDataServiceRegistry.getSDataService('dynamic'));
            request.setResourceKind("opportunities");
            request.setQueryArg('select', 'ErpLogicalId,ErpAccountingEntityId');
            request.setQueryArg('where', dString.substitute("Id eq '${0}'", [currentEntityId]));
            request.read({
                success: function (result) {
                    this.promoteEntity(result.ErpLogicalId, result.ErpAccountingEntityId, this.currentEntityPrettyName, currentEntityId, result.$descriptor);
                },
                scope: this,
                failure: function () { }
            });
        },
        promoteEntity: function (logicalId, accountingEntityId, entityName, entityId, Description) {
            var request = new Sage.SData.Client.SDataServiceOperationRequest(sDataServiceRegistry.getSDataService('dynamic'));
            request.setResourceKind('backOffices');
            request.setOperationName('SORPromote');
            var entry = {
                "$name": this.operationName,
                "request": {
                    "entityName": entityName,
                    "entityId": entityId,
                    "logicalId": logicalId,
                    "accountingEntityId": accountingEntityId,
                    "Description": Description
                }
            };
            request.execute(entry, {
                success: dojo.hitch(this, function (data) {
                    dialogs.showInfo(dString.substitute(this.requestSuccessfullSubmitted, [entityName, Description]));
                }),
                failure: dojo.hitch(this, function (result) {
                    dialogs.showError(dString.substitute(this.errorPromotion, [entityName, result]));
                })
            });

        },
        opportunityStatistics: function () {
            this.prepareSelectedRecords(this.opportunityStatisticsActionitem(this.getSelectionInfo()));
        },
        opportunityStatisticsActionitem: function (selectionInfo) {
            return function () {
                var dialog = new OpportunityStatistics(selectionInfo);
                dialog.show();
            };
        },
        createQuoteFromOpportunity: function () {
            var entry = {
                "$name": "CreateQuoteFromOpportunity",
                "request": {
                    "OpportunityId": utility.getCurrentEntityId()
                }
            };
            this._createEntityFromOpportunity("CreateQuoteFromOpportunity", entry, "Quote");
        },
        createSalesOrderFromOpportunity: function () {
            var entry = {
                "$name": "CreateSalesOrderFromOpportunity",
                "request": {
                    "OpportunityId": utility.getCurrentEntityId()
                }
            };
            this._createEntityFromOpportunity("CreateSalesOrderFromOpportunity", entry, "SalesOrder");
        },
        _createEntityFromOpportunity: function(operationName, entry, entityPage) {
            var service = sDataServiceRegistry.getSDataService('dynamic');
            var request = new Sage.SData.Client.SDataServiceOperationRequest(service)
                          .setResourceKind("opportunities")
                          .setOperationName(operationName);
            request.execute(entry, {
                async: false,
                success: function (result) {
                    if (result.response.Result) {
                        window.location.href = dString.substitute("${0}.aspx?entityId=${1}", [entityPage, result.response.Result]);
                    } else {
                        console.log('The entity Id is null');
                    }
                },
                failure: function (result) {
                    dialogs.showError(result);
                }
            });
        }
    });
    return opportunityTasksTasklet;
});
