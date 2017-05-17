/*globals Sage, dojo, dojox, dijit, Simplate, window, Sys, define */
define([
    'dojo/_base/declare',
    'dojo/_base/connect',
    'dojo/number',
    'dojo/string',
    'dojo/store/Memory',
    'dojo/dom-construct',
    'dojo/dom-class',
    'dojo/_base/lang',
    'Sage/MainView/CopyUserProfile/_CopyUserProfileBase',
    'dojo/text!./templates/CopyUserProfile.html',
    'dojo/i18n!./nls/CopyUserProfile',
    'Sage/Utility',
    'Sage/Utility/File/Attachment',
    'Sage/UI/Dialogs',
    'Sage/Utility/Jobs',
    'Sage/UI/Controls/Lookup'
],
function (
    declare,
    connect,
    dNumber,
    dString,
    dMemory,
    domConstruct,
    domClass,
    lang,
    dialogBase,
    template,
    nlsResources,
    utility,
    attachmentUtility,
    dialogs,
    jobs,
    lookup
) {
    var widgetTemplate = utility.makeTemplateFromString(template);
    var copyUserProfile = declare('Sage.MainView.CopyUserProfile.CopyUserProfile', [dialogBase], {
        id: "dlgCopyUserProfile",
        useUser:false,
        widgetTemplate: widgetTemplate,
        _nlsResources: nlsResources,
        selectionInfo: null,
        _groupToProcess: null,
        _entityPrettyName: null,
        _entityTableName: null,
        constructor: function (args) {
            lang.mixin(this, args);
        },
        startup: function () {
            this._initUserLookup();
            this._initTemplateLookup();
            this.radUser.checked = true;
            this._radUser_OnChange();
            this.inherited(arguments);
        },
        destroy: function () {
            if (this.lueUser) {
                this.lueUser.destroy();
            }
            if (this.lueTemplate) {
                this.lueTemplate.destroy();
            }
            if (this.radUser) {
                this.radUser.destroy();
            }
            if (this.radTemplate) {
                this.radTemplate.destroy();
            }
            this.inherited(arguments);
        },
        _btnOk_OnClick: function () {
            this._startCopyProfileJob();
        },
        _initUserLookup: function () {
            this.userLookupConfig = {
                id: 'user',
                structure: [
                    {
                        label: nlsResources.lookupUserNameColText,
                        field: 'UserName'
                    },
                   {
                       label: nlsResources.lookupTitleColText,
                       field: 'UserInfo.Title'
                   },
                   {
                       label: nlsResources.lookupDepartmentColText,
                       field: 'UserInfo.Department'
                   },
                   {
                       label: nlsResources.lookupRegionColText,
                       field: 'UserInfo.Region'
                   }
                ],
                gridOptions: {
                    contextualCondition: '',
                    contextualShow: '',
                    selectionMode: 'single'
                },
                storeOptions: { resourceKind: 'users', sort: [{ attribute: 'UserName' }] },
                isModal: true,
                initialLookup: true,
                preFilters: [
                    {
                        propertyName: 'type',
                        propertyType: 'Sage.Entity.Interfaces.UserType',
                        conditionOperator: '!=',
                        filterValue: '5'
                    },
                    {
                        propertyName: 'type',
                        propertyType: 'Sage.Entity.Interfaces.UserType',
                        conditionOperator: '!=',
                        filterValue: '6'
                    },
                    {
                        propertyName: 'type',
                        propertyType: 'Sage.Entity.Interfaces.UserType',
                        conditionOperator: '!=',
                        filterValue: '8'
                    }
                ],
                returnPrimaryKey: true,
                dialogTitle: nlsResources.lookupUser_Caption,
                dialogButtonText: this.btnOK_Caption
            };
            this.lueUser = new lookup({
                id: 'lu_User',
                config: this.userLookupConfig,
                allowClearingResult: true,
                style: 'width:100%'
            });
            domConstruct.place(this.lueUser.domNode, this.user_Container.domNode, 'only');
        },
        _initTemplateLookup: function () {
            this.templateLookupConfig = {
                id: 'template',
                structure: [
                     {
                         label: nlsResources.lookupUserNameTemplateColText,
                         field: 'UserName'
                     }
                ],
                gridOptions: {
                    contextualCondition: '',
                    contextualShow: '',
                    selectionMode: 'single'
                },
                storeOptions: { resourceKind: 'users', sort: [{ attribute: 'UserName' }] },
                isModal: true,
                initialLookup: true,
                preFilters: [
                    {
                        propertyName: 'type',
                        propertyType: 'Sage.Entity.Interfaces.UserType',
                        conditionOperator: '=',
                        filterValue: '6'
                    }
                ],
                returnPrimaryKey: true,
                dialogTitle: nlsResources.lookupUser_Caption,
                dialogButtonText: this.btnOK_Caption
            };
            this.lueTemplate = new lookup({
                id: 'lu_Template',
                config: this.templateLookupConfig,
                allowClearingResult: true,
                style: 'width:100%'
            });
            domConstruct.place(this.lueTemplate.domNode, this.template_Container.domNode, 'only');
        },
        _setDomNodeVisible: function (domNode, visible) {
            if (domNode && visible) {
                domClass.remove(domNode, "display-none");
            }
            else if (domNode) {
                domClass.add(domNode, "display-none");
            }
        },
        _radUser_OnChange: function () {
            this.useUser = this.radUser.checked;
            this._setDomNodeVisible(this.userControlPoint, this.useUser);
            this._setDomNodeVisible(this.templateControlPoint, !this.useUser);

        },
        _getCopyParameters: function () {
            var parameters = {
                General: this.chkGeneral.checked,
                Calendar: this.chkCalendar.checked,
                Employee: this.chkEmployee.checked,
                ClientOptions: this.chkClient.checked,
                Security: this.chkSecurity.checked,
                Service: this.chkService.checked,
                Teams: this.chkTeams.checked
            };
            if (this.useUser) {
                parameters.SourceUserId = this.lueUser.selectedObject.$key;
            } else {
                parameters.SourceUserId = this.lueTemplate.selectedObject.$key;
            }
            return parameters;
        },
        _startCopyProfileJob: function () {


        var options = {
            descriptor: nlsResources.txtJobDescriptor,
            closable: true,
            title: nlsResources.dlg_Title,
            key: "Sage.SalesLogix.BusinessRules.Jobs.EntityIdMasterJob",
            parameters: [
                { "name": "EntityName", "value": this._entityPrettyName },
                { "name": "SelectedIds", "value": (this.selectionInfo.selectionCount > 0) ? this.selectionInfo.selectedIds.join(',') || '' : '' },
                { "name": "GroupId", "value": this._groupToProcess },
                { "name": "AppliedFilters", "value": Sys.Serialization.JavaScriptSerializer.serialize(jobs.getFiltersForJob()) },
                { "name": "LookupConditions", "value": Sys.Serialization.JavaScriptSerializer.serialize(jobs.getLookupConditionsForJob()) },
                { "name": "EntityTableName", "value": this.currentEntityTableName },
                { "name": "Parameters", "value": Sys.Serialization.JavaScriptSerializer.serialize(this._getCopyParameters()) },
                { "name": "FullTypeQualifiedJobName", "value": "Sage.SalesLogix.BusinessRules.Jobs.CopyUserProfileJob" }
            ],
            failure: function (error) {
                dialogs.showError(nlsResources.jobFailer);
            },
            ensureZeroFilters: true
        };
        jobs.triggerJobAndDisplayProgressDialog(options);
    }
    });
    return copyUserProfile;
});