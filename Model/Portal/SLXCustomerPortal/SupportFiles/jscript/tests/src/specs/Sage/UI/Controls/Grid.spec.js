describe("Sage/UI/Controls/Grid", function () {
    require(['Sage/UI/Controls/Grid',
        'dojo/store/Memory',
        'dojo/_base/lang',
        'dojo/_base/array',
       'dojo/query'
    ], function (Grid, Memory, lang, array, query) {

        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

        describe("Mixins", function () {
            it("can translate grid options to an array of mix-ins for the grid.", function () {
                var grid = new Grid({
                    rowSelection: true,
                    columnReordering: true,
                    columnResizing: true,
                    columnHiding: true,
                    pagination: true,
                    keyboardNavigation: true,
                    columns: [{ 1: "one", 2: "two" }]
                });

                // 6 plus onDemandGrid/Grid mixin added by default
                var expectedNumberOfMixins = 7;
                var actualArray = grid._getGridMixins();

                expect(actualArray.length).toEqual(expectedNumberOfMixins);
            });
        });
        describe("Indirect selection", function () {
            it("if enabled, appends the selector column to the front of the structure", function () {
                var grid = new Grid({
                    indirectSelection: true,
                    columns: [
                        {
                            field: 'test',
                            label: 'First Column'
                        }
                    ]
                });
                var expectedLabel = 'field-checkbox';
                expect(grid._grid.columns[0].className).toBe(expectedLabel);
                expect(ObjectLength(grid._grid.columns)).toBe(2);

            });
            it("if disabled, does not append selector column to the front of the structure", function () {
                var grid = new Grid({
                    indirectSelection: false,
                    columns: [
                        {
                            field: 'test',
                            label: 'First Column'
                        }
                    ]
                });

                var expectedLabel = 'field-checkbox';
                expect(grid._grid.columns[0].className).not.toBe(expectedLabel);
                expect(ObjectLength(grid._grid.columns)).toBe(1);
            });
        });
        describe("Record count", function () {
            beforeEach(function (done) {
                this.grid = new Grid({
                    // indirectSelection: true, // TODO turning this true throws exception with memory data
                    columns: [{
                        field: 'name',
                        label: 'name'
                    }],
                    store: new Memory({
                        data: [{ "id": "10", "name": "one" },
                            { "id": "2", "name": "two" },
                            { "id": "2", "name": "two" }]
                    })
                });
                this.grid.onLoadComplete = function (evt) {
                    done();
                };
            });
            it("matches number of items bound to grid", function () {
                expect(this.grid.totalRecords).toEqual(3);
            });
        });
        describe("Row Selection", function () {
            beforeEach(function (done) {
                var items = [
                  { id: 11, name: 'Item 1', selected: true },
                  { id: 21, name: 'Item 2', selected: false }
                ];

                var store = new Memory({
                    data: items,
                    idProperty: "id"
                });

                this.grid = new Grid({
                    columns: [{
                        field: 'name',
                        label: 'name'
                    }],
                    store: store,
                    rowSelection: true,
                    selectionMode: "multiple",
                });
                this.grid.onLoadComplete = lang.hitch(this, function (evt) {
                    this.grid._grid.select(query(".dgrid-row", this.grid.domNode)[0]);
                    done();
                });
            });
            it("fetches selected row data items and row id", function () {
                expect(this.grid.getSelectedRowData().length).toEqual(1);
                expect(this.grid.getSelectedRowId()).toEqual('11');
            });
        });
        describe("Clear Row Selection", function () {
            beforeEach(function (done) {
                var items = [
                  { id: 11, name: 'Item 1', selected: true },
                  { id: 21, name: 'Item 2', selected: false }
                ];

                var store = new Memory({
                    data: items,
                    idProperty: "id"
                });

                this.grid = new Grid({
                    columns: [{
                        field: 'name',
                        label: 'name'
                    }],
                    store: store,
                    rowSelection: true,
                    selectionMode: "multiple",
                });
                this.grid.onLoadComplete = lang.hitch(this, function (evt) {
                    this.grid._grid.select(query(".dgrid-row", this.grid.domNode)[0]);
                    this.grid.clearSelection();
                    done();
                });
            });
            it("cleared after selecting one", function () {
                expect(this.grid.getSelectedRowData().length).toEqual(0);
            });
        });
    });
});
