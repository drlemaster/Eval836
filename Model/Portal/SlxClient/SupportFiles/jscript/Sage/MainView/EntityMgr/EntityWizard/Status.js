/*globals Sage, dojo, dojox, dijit, Simplate, window, Sys, define */
define([
    'dojo/_base/declare',
    'dojo/_base/connect',
    'dojo/number',
    'dojo/string',
    'Sage/MainView/EntityMgr/EntityWizard/_EntityWizardDialogBase',
    'dojo/text!./templates/Status.html',
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
    var status = declare('Sage.MainView.EntityMgr.EntityWizard.Status', [wizardDialogBase], {
        id: "dlgStatus",
        widgetTemplate: widgetTemplate,
        //_nlsResources: nlsResources,
        _currentStep: entityWizardUtility.entityWizardStep.EntityDetails,
        _fileInputOnChange: null,
        constructor: function () {
            this.inherited(arguments);
        },
        startup: function () {
            this.statusLabel.innerHTML = this.entityDetails.status;
            if (this.entityDetails.selectedRelStatus) {
                this.selectedRelStatus.innerHTML = this.entityDetails.selectedRelStatus;
            }
            if (this.entityDetails.ownerStatus) {
                this.ownerStatus.innerHTML = this.entityDetails.ownerStatus;
            }
            
            this.inherited(arguments);
        },
        postCreate: function () {
            this.lblCreateEntity.innerHTML = this._nlsResources.lblCreateEntity;
            this.btnCancel.innerHTML = this._nlsResources.lblCancel;
        },
        _btnFinish_OnClick: function () {
            this._dialog.hide();
            this.finishWizard();
        },
        isValid: function () { 
            var myform = this.Form;
            return myform.validate();
            //return true;
        },
        destroy: function () {
            this.inherited(arguments);
        }
    });
    return status;
});