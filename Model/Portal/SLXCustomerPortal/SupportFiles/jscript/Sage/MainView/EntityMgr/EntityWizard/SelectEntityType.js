/*globals Sage, dojo, dojox, dijit, Simplate, window, Sys, define */
define([
    'dojo/_base/declare',
    'dojo/_base/connect',
    'dojo/number',
    'dojo/string',
    'Sage/MainView/EntityMgr/EntityWizard/_EntityWizardDialogBase',
    'dojo/text!./templates/SelectEntityType.html',
    //'dojo/i18n!./nls/SelectFile',
    'Sage/MainView/EntityMgr/EntityWizard/EntityWizardUtility',
    'Sage/Utility',
    'Sage/Utility/File/Attachment'
],
function (
    declare,
    connect,
    dNumber,
    dString,
    wizardDialogBase,
    template,
    //nlsResources,
    entityWizardUtility,
    utility,
    attachmentUtility
) {
    var widgetTemplate = utility.makeTemplateFromString(template);
    var selectEntityType = declare('Sage.MainView.EntityMgr.EntityWizard.SelectEntityType', [wizardDialogBase], {
        id: "dlgSelectEntityType",
        widgetTemplate: widgetTemplate,
        //_nlsResources: nlsResources,
        _currentStep: entityWizardUtility.entityWizardStep.SelectEntityType,
        _fileInputOnChange: null,
        constructor: function () {
            this.inherited(arguments);
        },
        startup: function () {
            this.inherited(arguments);
        },
        isValid: function () {
            return true;
        },
        destroy: function () {
            this.inherited(arguments);
        }
    });
    return selectEntityType;
});