/*globals Sage, dojo, dojox, dijit, Simplate, window, Sys, define, cookie */
define([
    'dojo/_base/connect',
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/dom-class',
    'dojo/aspect',
    'dojo/string',
    'dojo/store/Memory',
    'Sage/UI/Dialogs',
    'Sage/UI/Forms/FormFromSData',
    'Sage/UI/Controls/TextBox',
    'Sage/UI/Controls/CheckBox'
],
function (
    dojoConnect,
    declare,
    lang,
    domClass,
    dojoAspect,
    dString,
    memory,
    Dialogs,
    FormFromSData,
    TextBox,
    CheckBox
) {

    var widget = declare('Sage.UI.Forms.PickListManagerForm', [FormFromSData], {
        excludeOnNew: [],
        listOfSupressFields: ['createuser', 'createdate', 'modifydate', 'modifyuser'],
        dialogs: Dialogs,
        _itemsGrid: null,
        allowViaAddRule: "Administration/Picklist/Add",
        allowViaEditRule: "Administration/Picklist/Edit",
        allowViaViewRule: "Administration/Picklist/View",
        allowViaDeleteRule: "Administration/Picklist/Delete",
        formBase: "picklists",
        duplicateCheck: [{ field: "name", where: "lower(name) eq '${0}'" }],
        saveIfValid: { update: true, insert: true },

        assignControlBasedOffOfName: function (name, type, val, collection, disabledViaSec) {
            var retVal = null;

            switch (name.toLowerCase()) {
                case "name":
                    retVal = new TextBox({
                        shouldPublishMarkDirty: false,
                        required: true,
                        disabled: disabledViaSec
                    });
                    if (typeof (val) !== "undefined" && val !== null) {
                        retVal.textbox.value = val;
                    }
                    break;
            }

            return retVal;
        },
        _createGridControl: function (name, type, val, collection, disabledViaSec) {
            var control = null;
            switch (name.toLowerCase()) {
                case "items":
                    var cols = [];
                    var selec = [];
                    for (var col_i = 0; col_i < collection.data.data.length; col_i++) {

                        var col_item = collection.data.data[col_i];
                        var col_control = null;
                        var col_column = {};

                        switch (col_item.type.toLowerCase()) {
                            case "xs:boolean":
                                if (this.editMode) {
                                    col_control = {
                                        editor: "radio", // use HTML radio button over dijit radio because HTML radio button works with dgrid, dijit radio button does not.
                                        editorArgs: {
                                            disabled: disabledViaSec,
                                            shouldPublishMarkDirty: false,
                                            name: col_item.name
                                        },
                                        width: 150
                                    };
                                }
                                break;
                            default: 
                                col_control = {
                                    editor: TextBox,
                                    editorArgs: {
                                        disabled: disabledViaSec,
                                        shouldPublishMarkDirty: false
                                    },
                                    width: 150
                                };
                                break;
                        }
                        if (col_control !== null) {
                            col_column =
                                 {
                                     field: col_item.name,
                                     label: col_item.name === "number" ? this.formNlsResource[col_item.name] : col_item.label,
                                     editable: !disabledViaSec,
                                     hidden: false,
                                     unhidable: false,
                                     editOn: "",
                                     autoSave: true,
                                     id: col_item.name,
                                     width: 150
                                 };

                            lang.mixin(col_column, col_control);
                            cols.push(col_column);
                            selec.push(col_item.name);
                        }
                    }
                    cols.push({
                        label: "",
                        field: "$key",
                        unhidable: true,
                        editable: false,
                        hidden: true,
                        id: "$key"
                    });

                    // At the moment the Grid should be populated from a local store, so that the form has more control over when and what gets saved.
                    // Also use control.getStore() to manipulate the store.
                    var dataStore = { store: dojo.data.ObjectStore(dojo.store.Memory({ data: [] })) };
                    if (this.formData[name]) {
                        dataStore = { store: dojo.data.ObjectStore(dojo.store.Memory({ idProperty: '$key', data: this.formData[name] })) };
                    }
                    var label = collection.label ? collection.label : this.formNlsResource[name];
                    var toolbox = [];
                    if (!disabledViaSec) {
                        toolbox = ['add', 'delete'];
                    }
                    control = {
                        type: "Grid",
                        options: {
                            tools: toolbox,
                            gridLabel: label,
                            editable: true,    // allows the column editor to be mixed in
                            selectionMode: 'single',
                            rowSelection: true,
                            columnHiding: true,  // allows the column hider to be mixed in
                            showRecordCount: true,
                            addNew: lang.partial(this._addItemToGrid,this), // set the add item function
                            deleteSelected: lang.partial(this._removeItemFromGrid, this), // set the remove item function
                            parent: this,
                            shouldPublishMarkDirty: false,
                            columns: cols,
                            classNames: 'items'
                        }
                    };
                    control.options = lang.mixin(control.options, dataStore);
                    dojoConnect.subscribe('sdata/form/setGrid', this, this._setItemsGrid);
                    break;
            }
            return control;
        },
        _setItemsGrid: function (grid) {
            if (grid.className === "items") {
                this._itemsGrid = grid;
            }
        },
        _addItemToGrid: function (context) {
            var maxValue = -1;
            for (var d = 0; d < this.store.data.length; d++) {
                var number = this.store.data[d];
                if (number.number > maxValue) {
                    maxValue = number.number;
                }
            }
            maxValue = Number(maxValue) + 1;

            var newRecordEntry = {};
            for (var cols_i = 0; cols_i < this.columns.length; cols_i++) {
                var cols_item = this.columns[cols_i];
                switch (cols_item.field) {
                    case "number":
                    case "$key":
                        newRecordEntry[cols_item.field] = maxValue;
                        break;
                    case "isDefault":
                        newRecordEntry[cols_item.field] = false;
                        break;
                    default:
                        newRecordEntry[cols_item.field] = "";
                }
            }

            this.store.add(newRecordEntry);
            this.refresh();
        },
        _removeItemFromGrid: function (context) {
            var selectedItemArr = this.getSelectedRowData();
            var noItemsSelected = typeof (selectedItemArr) === "undefined" || selectedItemArr === null || selectedItemArr.length === 0;
            var keyVariable = this.store.idProperty;
            var id, count;
            if (noItemsSelected) {
                context.dialogs.showWarning(context.gridNlsResource.noSelectionsText, "Infor CRM");
                return;
            }
            var somethingRemoved = false, doubleCheck = false;
            for (var i = 0; i < selectedItemArr.length; i++) {
                var container = selectedItemArr[i];
                count = this.store.data.length;
                if (container) {
                    id = container[keyVariable];
                    if (typeof (id) !== 'undefined') {
                        this.store.remove(id);
                        if (count > this.store.data.length) {
                            somethingRemoved = true;
                            console.log(dString.substitute('${0}: was removed', [id]));
                            i--;//reset to the previous index sinve we are removing an item
                        }
                    }
                }
                else {
                    doubleCheck = true;
                }
            }
            // when doing a selection of multiple rows at once, some get recorded by getSelectedRowData as undefined.
            // this may be caused by range selections, or paging or both.
            // the _grid.selection object still has a list of selected ids, so double check against it if needed.
            if (doubleCheck) {
                for (var sel_i = 0; sel_i < this.store.data.length; sel_i++) {
                    var sel_item = this.store.data[sel_i];
                    id = sel_item[keyVariable];
                    count = this.store.data.length;
                    if (id) {
                        if (this.grid._grid.selection[id] === true) {
                            this.store.remove(id);
                            if (count > this.store.data.length) {
                                somethingRemoved = true;
                                console.log(dString.substitute('${0}: was removed', [id]));
                                i--;//reset to the previous index sinve we are removing an item
                            }
                        }
                    }
                }
            }
            if (somethingRemoved) {
                this.refresh();
            }
            else {
                context.dialogs.showWarning(context.gridNlsResource.noSelectionsText, "Infor CRM");
            }
        },
        _changeObjectPathParameters: function (path, value, propName, skip, stringifyValue) {
            if (propName === "items" && path[path.length - 1] !== "$resources") {
                path.push("$resources");
            }
            var prev=path[path.length-1];
            for (var path_idx = path.length - 2; path_idx > 0; path_idx--) {
                if (prev === "$resources" && prev === path[path_idx]) {
                    path.splice(path_idx, 1);
                }
            }
            return {
                propName: propName,
                path: path,
                builtUpPath: JSON.stringify(value),
                skip: skip,
                stringify: stringifyValue,
                lineEscape: propName === "items" ? '\"' : ''
            };
        },
        _save: function (formName) {
            if (formName && formName.type && formName.type === "click") {
                formName = null;
            }
            var sdataPkg = {}, value = false;
            var allowToContinue = this.isValid();
            if (allowToContinue) {
                sdataPkg = lang.mixin(this.formData, this.getActiveValues());
                if (sdataPkg.items) {
                    // When set to true this flag will removed items from the server, that are not included in the list being currently provided.
                    sdataPkg.items.$deleteMissing = true;
                }
                var service = Sage.Data.SDataServiceRegistry.getSDataService('system');
                var resourceRequest = new Sage.SData.Client.SDataSingleResourceRequest(service).setResourceKind('picklists');
                resourceRequest.setQueryArg('language', cookie.getCookie("SLXLanguageSetting"));

                var returnObjectHandler = {
                    isSecurityManager: true,
                    scope: this,
                    format: 'json',
                    ignoreETag: !this.editMode,
                    async: false,
                    success: function (data) {
                        value = true;
                        if (typeof (formName) === "undefined" || formName === null || this.formBase === formName) {
                            dojoConnect.publish("Sage/picklist/form/reload", data);
                            var strWarning = dString.substitute(this.formNlsResource.messageOnSave, [data.name]);
                            this.dialogs.showWarning(strWarning, "Infor CRM");
                        }
                    },
                    failure: function (xhr, sdata) {
                        var msgObj = JSON.parse(xhr.response);
                        var errMsg = dString.substitute("${0}(${1})", [xhr.statusText, xhr.status]);
                        if (msgObj.length > 0 && typeof (msgObj[0].message) !== "undefined") {
                            errMsg = dString.substitute("${0}: {${1}", [errMsg, msgObj[0].message]);
                        }
                        // Handle failure
                        value = false;
                    }
                };

                var action = "create";
                if (this.editMode) {
                    resourceRequest.setResourceSelector(dString.substitute("'${0}'", [sdataPkg['$key']]));
                    action = 'update';
                }

                resourceRequest[action](sdataPkg, returnObjectHandler);
            }
            return value;
        },
        customValidation: function (ob) {
            var retVal = null;
            var n = "";

            if (typeof (ob.name) !== "undefined") {
                n = ob.name.toLowerCase();
            }

            switch (n) {
                case "":
                    retVal = false;
                    break;
                case "name":
                    if (!this.editMode) {
                        if (ob.control.value.trim() !== "") {
                            retVal = !this._checkIfDuplicate(Sage.Data.SDataServiceRegistry.getSDataService('system'), ob);
                        }
                    }
                    break;
            }
            return retVal;
        }
    });

    return widget;
});