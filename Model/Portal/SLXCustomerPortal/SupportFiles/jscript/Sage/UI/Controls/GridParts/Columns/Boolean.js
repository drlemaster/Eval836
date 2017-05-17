/*globals Sage, dojo, dojox, dijit, Simplate, window, Sys, define */
define([
    'dojo/i18n',
    'Sage/Utility',
    'dojo/i18n!../../../nls/Boolean',
    'dojo/_base/declare',
    'dojo/_base/lang'
],
function (i18n, Utility, nlsResource, declare, lang) {
    var widget = declare('Sage.UI.Controls.GridParts.Columns.Boolean', null, {
        constructor: function (args) {
            var resource = i18n.getLocalization('Sage.UI', 'Boolean', 'en');
            lang.mixin(this, resource);
            lang.mixin(this, args);
            this.inherited(arguments);
        },
        format: function (val) {
            var truthy = {
                'T': true,
                't': true,
                'Y': true,
                'y': true,
                '1': true,
                '+': true,
                'true': true
            };
            if (!this.formatString) return (val in truthy) ? this.yesText : this.noText;
            var arrVals = this.formatString.split('/');
            if (arrVals.length && arrVals.length === 2) {
                var strVal = (val in truthy) ? arrVals[0] : arrVals[1];
                if (!strVal) {
                    return (val in truthy) ? this.yesText : this.noText;
                } else { return Utility.htmlEncode(strVal); }
            }
            return (val in truthy) ? this.yesText : this.noText;
        }
    });

    return widget;
});