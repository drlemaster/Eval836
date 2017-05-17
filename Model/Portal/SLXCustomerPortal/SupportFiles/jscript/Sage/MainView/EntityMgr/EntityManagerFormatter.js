/*globals Sage, dojo, dojox, dijit, Simplate, window, Sys, define */
define([
    'dojo/_base/lang'
],
function (lang)
{
    Sage.namespace('Sage.MainView.EntityMgr.EntityManagerFormatter');
    lang.mixin(Sage.MainView.EntityMgr.EntityManagerFormatter, {
       
        formatCountProps: function (value) {
            return value.$resources.length;
        },
        formatCountFilter: function (value) {
            var metricCount = 0, fitlerCount = 0;
            for(var i=0; i<value.$resources.length; i++){
                if (value.$resources[i].filterType.indexOf("analyticsMetric") > -1){
                    ++metricCount;
                } else {
                    ++fitlerCount;
                }
            }
            return fitlerCount;
        },
        formatCountMetric: function (value) {
            var metricCount = 0, fitlerCount = 0;
            for (var i = 0; i < value.$resources.length; i++) {
                if (value.$resources[i].filterType.indexOf("analyticsMetric") > -1) {
                    ++metricCount;
                } else{
                    ++fitlerCount;
                }
            }
            return metricCount;
        },
        formatProperCaseValue: function (value) {
            try{
                if (typeof value === "string") {
                    return value.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
                }
                else {
                    return '';
                }
            }catch(error){}
            return '';
        }

    });
    return Sage.MainView.EntityMgr.EntityManagerFormatter;
});