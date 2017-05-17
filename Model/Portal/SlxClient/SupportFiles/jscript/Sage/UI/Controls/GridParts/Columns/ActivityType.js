/*globals Sage, dojo, dojox, dijit, Simplate, window, Sys, define */
define([
       'Sage/Utility',
       'Sage/Utility/Activity',
       'dojo/string',
       'dojo/_base/declare'
],
function (util, activityUtil, dString, declare) {
    return declare("Sage.UI.Controls.GridParts.Columns.ActivityType", null, {
        keyField: false,
        //format: function (value, inItem) {
        //    var type = value;
        //    if (!type) {
        //        return this.defaultValue;
        //    }
        //    var key = util.getValue(inItem, this.keyField || "$key");
        //    var fmt = '<div class="Global_Images icon16x16 ${0}"></div>&nbsp;<span onclick="javascript:Sage.Link.editActivity(\'${1}\')" class="activity-type-link">${2}</span>';
        //    return dString.substitute(fmt, [activity.getActivityImageClass(type, 'small'), key, activity.getActivityTypeName(type)]);
        //}
        format: function (value, inItem) {
            //console.log('index: ' + inRowIndex + '   item: %o', inItem);
            if (!inItem) {
                return this.defaultValue;
            }
            
            var activity = (inItem.hasOwnProperty('Activity') && typeof inItem['Activity'] === 'object') ? inItem.Activity : inItem;
            var key = util.getValue(activity, "$key");
            var type = util.getValue(activity, "Type");
            var confStatus = (inItem.hasOwnProperty('Status')) ? inItem.Status : false;
            var fmtStr = '<span onclick="${0}" class="activity-type-link" ><div class="Global_Images icon16x16 ${1}" title="${2}"></div>&nbsp;${2}</span>';

            //Determine the recurrnece context, se we pass the correct recurring flag so that the reocrrnce dlg will be not be shown if there is no ending to the reocurrnce. 
            var reocState = util.getValue(activity, 'RecurrenceState');
            var recurring = activityUtil._getReccurenceFlag(activity);
            //typically, we will want to edit the activity
            var href = 'javascript:Sage.Link.editActivity(\'' + key + '\', ' + recurring + ')';
            if (confStatus) {
                var curUser = util.getClientContextByKey('userID');
                //assume the current user is who the useractivity is for...
                var actUser = (inItem.hasOwnProperty['User']) ? inItem.User['$key'] : curUser;
                //if the current user has not confirmed the activity, then they need to confirm it before editing.
                if (confStatus === 'asUnconfirmed' && curUser === actUser) {
                    href = 'javascript:Sage.Link.confirmActivityFor(\'' + key + '\', \'' + curUser + '\')';
                }
            } else {
                //if we don't know if the user has confirmed or not, let the activity service check...
                href = 'javascript:Sage.Link.editActivityIfConfirmed(\'' + key + '\', ' + recurring + ')';
            }
            var retVal = dString.substitute(fmtStr, [href, activityUtil.getActivityImageClass(type, 'small'), activityUtil.getActivityTypeName(type)]);
            return retVal;
        }
    });
});
