/**
 * NOTE:
 * A custom settings UI shall only be implemented if settings are dynamic, for instance based on data retrieved from a server.
 * Or if the settings structure is complicated, and not possible to handle using supported metadata setting types (string, boolean, number, selector).
 * For other cases, use metadata settings handled by the default settings UI.
**/
/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/lime/lime.d.ts" />
define(["require", "exports", "lime"], function (require, exports, lm) {
    var inforCRMChartMainCtrl = (function () {
        function inforCRMChartMainCtrl(scope) {
            var _this = this;
            this.scope = scope;
            this.hideText = false;
            this.hideChart = false;
            // Get the widget context and the widget instance that are made available on the scope by the framework
            this.widgetContext = scope[lm.WidgetConstants.widgetContextKey];
            var widgetInstance = scope[lm.WidgetConstants.widgetInstanceKey];
            var settings = this.widgetContext.getSettings();
            this.widgetInstanceId = this.widgetContext.getWidgetInstanceId();
            console.log('widget Instance Id - Main: ' + this.widgetInstanceId);
            var date = new Date();
            this.dateTime = date.getTime().toString();
            // Callback triggered from Framework when settings are saved
            widgetInstance.settingsSaved = function (saveArg) {
                _this.setContent();
            };
            widgetInstance.widgetSettingsFactory = function (settingsContext) {
                var instance = {};
                instance.angularConfig = {
                    relativeTemplateUrl: "settings.html",
                    // Pass the settings instance to settings scope so that its closing() callback can be set from the Settings Controller (in which settings are persisted if called by Save button)
                    // Pass the settings context to settings scope from which the widget context also can be retrieved
                    scopeValue: { name: "settingsData", value: { settingsContext: settingsContext, settingsInstance: instance } }
                };
                return instance;
            };
            // Get the language object from the widget context.
            this.language = this.widgetContext.getLanguage();
            this.setContent();
        }
        inforCRMChartMainCtrl.prototype.showSettingsDialog = function () {
            this.widgetContext.getSettings().showSettings();
        };
        inforCRMChartMainCtrl.prototype.isNumeric = function (n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        };
        inforCRMChartMainCtrl.prototype.setContent = function () {
            var _this = this;
            var settings = this.widgetContext.getSettings();
            var entity = settings.get("entity");
            var group;
            group = settings.get("group");
            var filter = settings.get("filter");
            var metric = settings.get("metric");
            var chartType = settings.get("chartType");
            var limitCount = settings.get("limitCount");
            if (entity && group && filter && metric && chartType && limitCount) {
                var context = this;
                this.setBusy(true);
                var sdataUrlContext = settings.get("SDataApiContext");
                var analyticsUrl = sdataUrlContext + '/SData/slx/system/-/groups("{0}")/$queries/executeMetric?format=json&_filterName={1}&_metricName={2}&limit={3}&count={4}&_t={5}';
                analyticsUrl = this.format([analyticsUrl, group.key, filter, metric, limitCount, limitCount, this.dateTime]);
                var analyticsReq = this.createRequest(encodeURI(analyticsUrl));
                analyticsReq.withCredentials = true;
                this.widgetContext.executeIonApiAsync(analyticsReq).then(function (response) {
                    var data = response.data['$resources'];
                    var items = [];
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].value !== 0 && _this.isNumeric(data[i].value)) {
                            var item = { 'name': data[i].$descriptor, 'value': data[i].value };
                            items.push(item);
                        }
                    }
                    if (data.length === 0 || items.length === 0) {
                        context.textValue = context.language['noData'];
                        context.hideText = false;
                        context.hideChart = true;
                        context.setBusy(false);
                    }
                    else {
                        var info = [{
                                data: items
                            }];
                        context.chartOptions = {
                            type: chartType.charAt(0).toLowerCase() + chartType.slice(1),
                            dataset: info
                        };
                        context.hideText = true;
                        context.hideChart = false;
                        context.setBusy(false);
                    }
                }, function (error) { _this.onRequestError(error); });
            }
            else {
                this.textValue = this.language['notConfigured'];
                this.hideText = false;
                this.hideChart = true;
            }
        };
        inforCRMChartMainCtrl.add = function (m) {
            m.controller("inforCRMChartMainCtrl", inforCRMChartMainCtrl);
        };
        inforCRMChartMainCtrl.prototype.format = function (args) {
            var s = args[0];
            for (var i = 0; i < args.length - 1; i++) {
                var reg = new RegExp("\\{" + i + "\\}", "gm");
                s = s.replace(reg, args[i + 1]);
            }
            return s;
        };
        inforCRMChartMainCtrl.prototype.setBusy = function (isBusy) {
            this.widgetContext.setState(isBusy ? lm.WidgetState.busy : lm.WidgetState.running);
        };
        inforCRMChartMainCtrl.prototype.onRequestError = function (error) {
            this.textValue = this.language['errorOccured'];
            this.setBusy(false);
            console.log("Failed to call ION API: " + error);
        };
        inforCRMChartMainCtrl.prototype.createRequest = function (url) {
            var request = {
                method: "GET",
                url: url,
                cache: false,
                headers: {
                    "Accept": "application/json"
                }
            };
            return request;
        };
        // Use the $inject array to avoid issues with minification
        inforCRMChartMainCtrl.$inject = ["$scope"];
        return inforCRMChartMainCtrl;
    })();
    var CustomSettingsCtrl = (function () {
        function CustomSettingsCtrl(scope) {
            var _this = this;
            this.scope = scope;
            this.entityChanged = function () {
                var _this = this;
                console.log('entityChanged');
                var context = this;
                var dateTime = this.dateTime;
                var entitySelected = this.entityValue || this.widgetContext.getSettings().get("entity");
                if (!entitySelected) {
                    console.log('entityValue is undefined');
                    return;
                }
                context.isGroupBusy = true;
                context.isFilterBusy = true;
                context.isMetricBusy = true;
                context.groupDropdownOptions = null;
                context.filterDropdownOptions = null;
                context.metricDropdownOptions = null;
                var sdataUrlContext = context.widgetContext.getSettings().get("SDataApiContext");
                var groupsUrl = sdataUrlContext + '/SData/slx/system/-/groups?startIndex=0&count=300&where=upper(family) eq upper(\'{0}\')&select=name,displayName&orderBy=name&format=json&_t={1}';
                groupsUrl = context.format([groupsUrl, entitySelected.value, dateTime]);
                var groupsReq = this.createRequest(encodeURI(groupsUrl));
                groupsReq.withCredentials = true;
                this.widgetContext.executeIonApiAsync(groupsReq).then(function (response) {
                    var data = response.data.$resources;
                    var options = [], item, i;
                    for (i = 0; i < data.length; i++) {
                        item = { 'name': data[i].name, 'key': data[i].$key };
                        options.push(item);
                    }
                    context.groupOptions = options;
                    var groupVal = context.widgetContext.getSettings().get("group");
                    var defaultValueSelected = false;
                    if (groupVal && groupVal.name) {
                        for (i = 0; i < options.length; i++) {
                            if (groupVal.name === options[i].name) {
                                context.groupValue = options[i];
                                defaultValueSelected = true;
                                break;
                            }
                        }
                    }
                    if (defaultValueSelected === false) {
                        context.groupValue = options[0];
                    }
                    if (context.groupDropdownOptions) {
                        context.groupDropdownOptions = null;
                    }
                    else {
                        context.groupDropdownOptions = {};
                    }
                    context.isGroupBusy = false;
                }, function (error) { _this.onRequestError(error); });
                var filtersUrl = sdataUrlContext + '/SData/slx/metadata/-/entities("{0}")/filters?startIndex=0&count=300&where=analyticsAvailable and filterType ne \'analyticsMetric\'&select=filterName,displayName,analyticsDescription&orderBy=filterName&format=json&_t={1}';
                filtersUrl = context.format([filtersUrl, entitySelected.name, dateTime]);
                var filtersReq = this.createRequest(encodeURI(filtersUrl));
                filtersReq.withCredentials = true;
                this.widgetContext.executeIonApiAsync(filtersReq).then(function (response) {
                    var data = response.data.$resources;
                    var options = [];
                    for (var i = 0; i < data.length; i++) {
                        options.push(data[i].filterName);
                    }
                    context.filterOptions = options; //Options
                    var defaultFilterSelected = false;
                    var value = context.widgetContext.getSettings().get("filter");
                    if (value && options.indexOf(value) > -1) {
                        context.dimensionValue = value;
                    }
                    else {
                        context.dimensionValue = options[0];
                    }
                    if (context.filterDropdownOptions) {
                        context.filterDropdownOptions = null;
                    }
                    else {
                        context.filterDropdownOptions = {};
                    }
                    context.isFilterBusy = false;
                }, function (error) { _this.onRequestError(error); });
                var metricsUrl = sdataUrlContext + '/SData/slx/metadata/-/entities("{0}")/filters?_compact=true&startIndex=0&count=300&where=analyticsAvailable and filterType eq \'analyticsMetric\'&select=filterName,displayName,analyticsDescription&orderBy=filterName&format=json&_t={1}';
                metricsUrl = context.format([metricsUrl, entitySelected.name, dateTime]);
                var metricsReq = this.createRequest(encodeURI(metricsUrl));
                metricsReq.withCredentials = true;
                this.widgetContext.executeIonApiAsync(metricsReq).then(function (response) {
                    var data = response.data.$resources;
                    var options = [];
                    for (var i = 0; i < data.length; i++) {
                        options.push(data[i].filterName);
                    }
                    context.metricOptions = options; //Options
                    var value = context.widgetContext.getSettings().get("metric");
                    if (value && options.indexOf(value) > -1) {
                        context.metricValue = value;
                    }
                    else {
                        context.metricValue = options[0];
                    }
                    if (context.metricDropdownOptions) {
                        context.metricDropdownOptions = null;
                    }
                    else {
                        context.metricDropdownOptions = {};
                    }
                    context.isMetricBusy = false;
                }, function (error) { _this.onRequestError(error); });
            };
            $('body').initialize('en-US');
            this.isEntityBusy = true;
            this.repeatSelect = null;
            // Get instance and context from the scope property defined in Settings factory
            var settingsInstance = scope["settingsData"].settingsInstance;
            var settingsContext = scope["settingsData"].settingsContext;
            this.widgetContext = settingsContext.getWidgetContext();
            this.widgetInstanceId = this.widgetContext.getWidgetInstanceId();
            console.log('widget Instance Id - Settings: ' + this.widgetInstanceId);
            this.widgetSettings = this.widgetContext.getSettings();
            this.widgetTitle = this.widgetContext.getTitle() || this.widgetContext.getStandardTitle();
            this.titleEditEnabled = this.widgetContext.isTitleEditEnabled();
            var context = this;
            var date = new Date();
            this.dateTime = date.getTime().toString();
            this.language = this.widgetContext.getLanguage();
            //Labels text
            this.textTitle = this.language['titleText'] || "Title";
            this.textEntity = this.language['textEntity'] || "Entity";
            this.textGroup = this.language['textGroup'] || "Group";
            this.textDimension = this.language['textDimension'] || "Dimension";
            this.textMetric = this.language['textMetric'] || "Metric";
            this.textType = this.language['textType'] || "Type";
            this.textLimit = this.language['textLimit'] || "Limit";
            // Callback triggered from Framework when Configure dialog is about to be closed
            settingsInstance.closing = function (closingArg) {
                if (closingArg.isSave) {
                    _this.widgetContext.getSettings().set("entity", context.entityValue);
                    _this.widgetContext.getSettings().set("title", context.widgetTitle);
                    _this.widgetContext.setTitle(context.widgetTitle);
                    _this.widgetContext.getSettings().set("group", context.groupValue);
                    _this.widgetContext.getSettings().set("filter", context.dimensionValue);
                    _this.widgetContext.getSettings().set("metric", context.metricValue);
                    _this.widgetContext.getSettings().set("chartType", context.chartValue);
                    _this.widgetContext.getSettings().set("limitCount", context.limitCount);
                }
            };
            //Populate the dropdowns
            this.chartOptions = ["Bar", "Column", "Donut", "Line", "Pie"];
            var value = context.widgetContext.getSettings().get("chartType");
            if (value) {
                this.chartValue = value;
            }
            value = context.widgetContext.getSettings().get("limitCount");
            if (value) {
                this.limitCount = value;
            }
            //begin
            context.entityDropdownOptions = null;
            var sdataUrlContext = context.widgetContext.getSettings().get("SDataApiContext");
            var entityUrl = sdataUrlContext + '/SData/slx/metadata/-/entities?startIndex=0&count=300&where=filters.analyticsAvailable eq true and filters.filterType eq \'analyticsMetric\'&select=name,displayName,tableName&orderBy=$descriptor&format=json&_t={0}';
            entityUrl = context.format([entityUrl, this.dateTime]);
            var entityReq = this.createRequest(encodeURI(entityUrl));
            entityReq.withCredentials = true;
            this.widgetContext.executeIonApiAsync(entityReq).then(function (response) {
                var data = response.data.$resources;
                var options = [], item, i;
                for (i = 0; i < data.length; i++) {
                    item = { 'name': data[i].name, 'value': data[i].tableName };
                    options.push(item);
                }
                context.entityOptions = options;
                var entityVal = context.widgetContext.getSettings().get("entity");
                var defaultValueSelected = false;
                if (entityVal && entityVal.value) {
                    for (i = 0; i < options.length; i++) {
                        if (entityVal.value === options[i].value) {
                            context.entityValue = options[i];
                            defaultValueSelected = true;
                            break;
                        }
                    }
                }
                if (defaultValueSelected === false) {
                    context.entityValue = options[0];
                }
                if (_this.entityDropdownOptions) {
                    _this.entityDropdownOptions = null;
                }
                else {
                    _this.entityDropdownOptions = {};
                }
                _this.entityChanged();
                context.isEntityBusy = false;
            }, function (error) { _this.onRequestError(error); });
            //end
        }
        CustomSettingsCtrl.prototype.onRequestError = function (error) {
            this.textValue = this.language['errorOccured'];
            //this.setBusy(false);
            this.isEntityBusy = false;
            this.isGroupBusy = false;
            this.isFilterBusy = false;
            this.isMetricBusy = false;
            console.log("Failed to call ION API: " + error);
        };
        CustomSettingsCtrl.prototype.createRequest = function (url) {
            var request = {
                method: "GET",
                url: url,
                cache: false,
                headers: {
                    "Accept": "application/json"
                }
            };
            return request;
        };
        CustomSettingsCtrl.prototype.setBusy = function (isBusy) {
            this.widgetContext.setState(isBusy ? lm.WidgetState.busy : lm.WidgetState.running);
        };
        CustomSettingsCtrl.add = function (m) {
            m.controller("CustomSettingsCtrl", CustomSettingsCtrl);
        };
        CustomSettingsCtrl.prototype.format = function (args) {
            var s = args[0];
            for (var i = 0; i < args.length - 1; i++) {
                var reg = new RegExp("\\{" + i + "\\}", "gm");
                s = s.replace(reg, args[i + 1]);
            }
            return s;
        };
        CustomSettingsCtrl.$inject = ["$scope"];
        return CustomSettingsCtrl;
    })();
    // Widget factory function
    exports.widgetFactory = function (context) {
        var m = context.getAngularContext().module;
        // Add controllers to the provided AngularJS module
        inforCRMChartMainCtrl.add(m);
        CustomSettingsCtrl.add(m);
        // Create and return the widget instance
        var instance = {
            angularConfig: {
                relativeTemplateUrl: "widget.html"
            }
        };
        return instance;
    };
});
//# sourceMappingURL=widget.js.map