/*globals Sage, dojo, dojox, dijit, Simplate, window, Sys, define */
define([
    'dojo/_base/declare',
    'dojo/text!./templates/RangeDetailsView.html',
    'Sage/MainView/EntityMgr/AddEditEntityDetail/_DetailsAddEditDialogBase',
    'Sage/MainView/EntityMgr/AddEditEntityDetail/DistinctDetailsView',
    'Sage/UI/GridView',
    'Sage/UI/ImageButton',
    'Sage/UI/Controls/TextBox',
    'dojo/store/Memory',
    'dojo/_base/lang',
    'dojo/query'
],
function (
    declare,
    template,
    _DetailsAddEditDialogBase,
    distinct,
    GridView,
    crmImageButton,
    crmTextBox,
    Memory,
    lang,
    Query
) {
    var widget = declare('Sage.MainView.EntityMgr.AddEditEntityDetail.RangeDetailsView', [_DetailsAddEditDialogBase], {

        widgetTemplate: new Simplate(eval(template)),
        widgetsInTemplate: true,

        character: false,
        rangeGridsObj: false,

        lastSelectedRange: false,

        addBtnId: 'rangeGrid_addBtn',
        rmvBtnId: 'rangeGrid_removeBtn',
        gridId: 'RangeDetailsView_grid',

        tmpRwId: 0,

        constructor: function (obj) {
            this.hasProperties = true;
            this.isMetric = false;
            if (this.Registry.byId(this.addBtnId)) {
                this.Registry.byId(this.addBtnId).destroy();
            }
            if (this.Registry.byId(this.rmvBtnId)) {
                this.Registry.byId(this.rmvBtnId).destroy();
            }
            if (this.Registry.byId(this.gridId)) {
                this.Registry.byId(this.gridId).destroy();
            }
        },

        postCreate: function () {
            this._createCharacter();
            this._createRangeGrid();

            this.startup();
        },
        _addItemToGrid: function (context) {

            context.rangeGridsObj.grid.addItem(
                {
                    rangeId: context.tmpRwId,
                    rangeName: '',
                    upper: '',
                    lower: '',
                    displayName: null,
                    customSQL: null
                });
            context.tmpRwId++;
            context.rangeGridsObj.refresh();
        },
        _removeItemFromGrid: function (context) {
            var selectedItemArr = context.rangeGridsObj.getSelectedRowData();
            var noItemsSelected = typeof (selectedItemArr) === "undefined" || selectedItemArr === null || selectedItemArr.length === 0;
            var keyVariable = this.store.idProperty;
            if (noItemsSelected) {
                context.Dialog.showWarning(context._nlsResources.SelectAnItem, "Infor CRM");
                return;
            }
            var somethingRemoved = false;
            for (var i = 0; i < selectedItemArr.length; i++) {
                var container = selectedItemArr[i];
                var deleted = false;
                var id = container[keyVariable];
                var count = this.store.data.length;
                if (typeof (id) !== 'undefined') {
                    this.store.remove(id);
                    if (count > this.store.data.length) {
                        somethingRemoved = true;
                        console.log(context.DojoString.substitute('${0}: was removed', [id]));
                        i--;//reset to the previous index sinve we are removing an item
                        deleted = true;
                    }
                }
                id = container.id;
                count = this.store.data.length;
                if (typeof (id) !== 'undefined') {
                    this.store.remove(id);
                    if (count > this.store.data.length) {
                        somethingRemoved = true;
                        console.log(context.DojoString.substitute('${0}: was removed', [id]));
                        i--;//reset to the previous index sinve we are removing an item
                        deleted = true;
                    }
                }
            }
            if (somethingRemoved) {
                this.grid.refresh();
            }
            else {
                context.Dialog.showWarning(context._nlsResources.SelectAnItem, "Infor CRM");
            }
        },
        _createRangeGrid: function () {
            var dataStore = new Memory({ data: [] });
            if (this.details && this.details.rangeFilter && this.details.rangeFilter.ranges) {
                dataStore = Memory({ idProperty: 'rangeId', data: this.details.rangeFilter.ranges });
            }

            var columns = this.detailUtility.rangeFilterGridCol.data.sort(function (a, b) {
                var nameA = a['id'],
                    nameB = b['id'];

                return (nameA < nameB)
                    ? -1
                    : (nameA > nameB)
                        ? 1
                        : 0;
            });

            var grid = this.rangeGridsObj = new GridView({
                tools: ['add', 'delete'],
                store: dataStore,
                columns: columns,
                addNew: this.Lang.partial(this._addItemToGrid, this), // set the add item function
                deleteSelected: this.Lang.partial(this._removeItemFromGrid, this), // set the remove item function
                placeHolder: this.rangegridwhole,
                columnHiding: true,
                columnResizing: true,
                columnReordering: true,
                selectionMode: 'single',
                rowSelection: true,
                minRowsPerPage: dataStore.data.length,
                maxRowsPerPage: dataStore.data.length,
                id: this.gridI,
                shouldPublishMarkDirty: false
            });
            grid.createGridView();
            grid.innerHTML = this._nlsResources.lblRange;

            // make sure that the grid shows a horizontal scrollbar if all column cannot be displayed.
            grid.grid.onLoadComplete=function () {
                grid.grid.resize();
            };
        },
        _createCharacter: function () {
            this.character = new distinct(
            {
                embedded: true,
                isMetric: false,
                hasProperty: this.hasProperty,
                details: this.details,
                detailUtility: this.detailUtility
            });
            this.DomConstruct.place(this.character.domNode, this.characterContainer, 'only');
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
            var rangeFilter = {
                rangeFilter: {
                    characters: this.character.getDetails(true),
                    ranges: []
                }
            };
            var store = this.rangeGridsObj.store.data;
            for (var i = 0; i < store.length; i++) {
                var range = {
                    range: store[i]
                };
                range.range.rangeId = this._stripoutNonRangeIds(range);
                if (range.range.rangeId === "") {
                    delete range.range.rangeId;
                }
                if (range.range.displayName === null) {
                    delete range.range.displayName;
                }
                if (range.range.upper === null) {
                    delete range.range.upper;
                }
                if (range.range.lower === null) {
                    delete range.range.lower;
                }
                if (range.range.rangeName === null) {
                    delete range.range.rangeName;
                }
                if (range.range.customSQL === null) {
                    delete range.range.customSQL;
                }
                rangeFilter.rangeFilter.ranges.push(range.range);
            }

            return rangeFilter;
        },
        _stripoutNonRangeIds: function (obj) {
            // an id in this instance is 5 "chunks" of alphanumerics separated by a hyphen/dash.
            var idRegex = "[A-Z|0-9|a-z]+[-][A-Z|0-9|a-z]+[-][A-Z|0-9|a-z]+[-][A-Z|0-9|a-z]+[-][A-Z|0-9|a-z]+";
            var matches = idRegex.match(obj.range.rangeId, 'g');
            if (matches) {
                if (lang.isArray(matches)) {
                    if (matches[0].length == obj.range.rangeId.length) {
                        return obj.range.rangeId;
                    }
                }
            }
            return "";
        },
        isValid: function () {
            var list = Query("td.dgrid-cell.dgrid-cell-padding.dgrid-column-AArangeName", this.rangeGridsObj.grid.bodyNode);
            var Lowerlist = Query("td.dgrid-cell.dgrid-cell-padding.dgrid-column-lower", this.rangeGridsObj.grid.bodyNode);
            var Upperlist = Query("td.dgrid-cell.dgrid-cell-padding.dgrid-column-upper", this.rangeGridsObj.grid.bodyNode);

            var subSection = this.character.isValid();

            var bool = true;
            for (var i = 0; i < list.length; i++) {
                list[i].widget.isValid(true);
                list[i].widget.onChanged();

                var validWid = list[i].widget.state !== 'Error' && !(list[i].widget.state === 'Incomplete' && list[i].widget.required);

                if (!validWid) {
                    list[i].widget.set('state', 'Error');
                }

                if (Lowerlist[i].widget.value > Upperlist[i].widget.value) {

                    Lowerlist[i].widget.set('message', this._nlsResources.LowerMustBeLessThanUpper);
                    Upperlist[i].widget.set('message', this._nlsResources.LowerMustBeLessThanUpper);

                    Lowerlist[i].widget.set('state', 'Error');
                    Upperlist[i].widget.set('state', 'Error');
                    validWid = false;
                }

                bool = bool && validWid;
            }
            return bool && subSection;
        }
    });
    return widget;
});