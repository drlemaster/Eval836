/*globals Sage, dojo, dojox, dijit, Simplate, window, Sys, define */
define([
    'dojo/_base/declare',
    'dojo/store/Memory',
    'dojo/text!./templates/UserLookupDetailsView.html',
    'Sage/MainView/EntityMgr/AddEditEntityDetail/_DetailsAddEditDialogBase',
    'Sage/UI/Controls/Grid',
    'Sage/UI/Controls/CheckBox'
],
function (
    declare,
    memory,
    template,
    _DetailsAddEditDialogBase,
    Grid,
    crmCheckBox) {
    var widget = declare('Sage.MainView.EntityMgr.AddEditEntityDetail.UserLookupDetailsView', [_DetailsAddEditDialogBase], {
        widgetTemplate: new Simplate(eval(template)),
        constructor: function () {
            this.hasProperties = true;
            this.isMetric = false;
        },
        postCreate: function () {
            this._createOperationsGrid();
            this.startup();
        },
        _createCustomCheckBox: function () {
            var custCheckBox = declare('Sage.MainView.EntityMgr.AddEditEntityFilter.customChkBx', Sage.UI.Controls.CheckBox, {
                shouldPublishMarkDirty: false,
                constructor: function () {
                },
                postCreate: function () {
                    if (this.hotKey !== '') {
                        this.focusNode.accessKey = this.hotKey;
                    }

                    this.connect(this, 'onChange', this.onChanged);
                }
            });
            return custCheckBox;
        },
        _createDataForList: function () {
            var list = this.detailUtility.operation.data;
            var datastore = new memory();

            for (var i = 0; i < list.length; i++) {
                var isChecked = false;
                if (this.details && this.details.userLookupFilter && this.details.userLookupFilter.operators && list[i].id) {
                    isChecked = this.details.userLookupFilter.operators.indexOf(list[i].id) >= 0;
                }
                datastore.add({ id: list[i].id, data: isChecked, label: list[i].name });
            }
            return datastore;
        },
        _createOperationsGrid: function () {
            var datastore = this._createDataForList();

            var grid = new Grid({
                gridLabel: this._nlsResources.lblOperators,
                store: datastore,
                sort: [{ attribute: 'label', descending: false }],
                columns: [
                    {
                        label: '',
                        field: 'data',
                        autoSave: true,
                        editable: true,
                        editor: this._createCustomCheckBox(),
                        id: 'col1',
                        width: 250
                    },
                {
                    label: '',
                    field: 'label',
                    autoSave: true,
                    editable: false,
                    id: 'col2',
                    width: 250
                }
                ],
                placeHolder: this.rangegridwhole,
                columnResizing: true,
                selectionMode: 'single',
                rowSelection: true,
                minRowsPerPage: datastore.data.length,
                maxRowsPerPage: datastore.data.length
            });
            this.rangeGridsObj = grid;
            this.lookupGridLabel.innerHTML = this._nlsResources.lblOperators;
            // make sure that the grid shows a horizontal scrollbar if all column cannot be displayed.
            grid._grid.onLoadComplete = function () {
                grid._grid.resize();
            };
        },
        /**
        * This is a last method in the initialization process. 
        * It is called after all the child widgets are rendered so it's good for a container widget to finish it's post rendering here. 
        * This is where the container widgets could for example set sizes of their children relative to it's own size.
        */
        startup: function () {
            this.inherited(arguments);
        },
        getDetails: function () {
            var list = this.rangeGridsObj.store.data;
            var datasource = [];
            for (var i = 0; i < list.length; i++) {
                var item = list[i];
                if (typeof (item) !== 'undefined' && typeof (item.data) !== 'undefined' && item.data) {
                    datasource.push(item.id);
                }
            }
            return { userLookupFilter: { operators: datasource } };
        }
    });
    return widget;
});