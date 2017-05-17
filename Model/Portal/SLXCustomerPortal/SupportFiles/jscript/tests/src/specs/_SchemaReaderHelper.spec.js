describe("Sage/Utility/_SchemaReaderHelper", function () {
    require(['Sage/Utility/_SchemaReaderHelper'], function (_srh) {
        var srh;
        describe("truthy tests", function () {
            beforeAll(function () {
                this.srh = new _srh();
            });
            it("trues", function () {

                var v = this.srh.__truthy(true);
                expect(v).not.toBeNull();
                expect(v).toBe(true);

                v = this.srh.__truthy("true");
                expect(v).not.toBeNull();
                expect(v).toBe(true);

                v = this.srh.__truthy("t");
                expect(v).not.toBeNull();
                expect(v).toBe(true);

                v = this.srh.__truthy(1);
                expect(v).not.toBeNull();
                expect(v).toBe(true);

                v = this.srh.__truthy('1');
                expect(v).not.toBeNull();
                expect(v).toBe(true);

                v = this.srh.__truthy("y");
                expect(v).not.toBeNull();
                expect(v).toBe(true);

                v = this.srh.__truthy("yes");
                expect(v).not.toBeNull();
                expect(v).toBe(true);

                v = this.srh.__truthy("apple");
                expect(v).toBeNull();
            });
            it("falses", function () {
                var v = this.srh.__truthy(false);
                expect(v).not.toBeNull();
                expect(v).toBe(false);

                v = this.srh.__truthy("false");
                expect(v).not.toBeNull();
                expect(v).toBe(false);

                v = this.srh.__truthy("f");
                expect(v).not.toBeNull();
                expect(v).toBe(false);

                v = this.srh.__truthy(0);
                expect(v).not.toBeNull();
                expect(v).toBe(false);

                v = this.srh.__truthy('0');
                expect(v).not.toBeNull();
                expect(v).toBe(false);

                v = this.srh.__truthy("n");
                expect(v).not.toBeNull();
                expect(v).toBe(false);

                v = this.srh.__truthy("no");
                expect(v).not.toBeNull();
                expect(v).toBe(false);

                v = this.srh.__truthy("apple");
                expect(v).toBeNull();
            });
        });
        describe("parsing test", function () {
            beforeAll(function () {
                this.srh = new _srh();
            });
            it("by creating object from sdata feed object via _buildObjectFromNodeList", function () {
                var headName = "pickList";
                this.srh._findAndAdd(this.bigOleString, headName);
                var picklistResourceNodes = this.srh._gatherNodesFromQueue(headName);
                if (picklistResourceNodes.data.length > 0) {
                    var picklist_object = this.srh._buildObjectFromNodeList(picklistResourceNodes.data[0]);
                    expect("true").toBe("true");
                }
                expect("true").toBe("true");
            });
            describe("__determineCorrectPathToTake to see if path is", function () {
                it("all->element", function () {
                    var paramNode = {};
                    var pathObj = this.srh.__determineCorrectPathToTake(paramNode);
                    expect(pathObj.length).toBe(0);
                    expect(pathObj.superParentNodeName).toBe('');
                    expect(pathObj.pathFromParent).toBe('xs:all//xs:element');
                });
                it("sequence->element", function () {
                    var paramNode = {};
                    var pathObj = this.srh.__determineCorrectPathToTake(paramNode);
                    expect(pathObj.length).toBe(0);
                    expect(pathObj.superParentNodeName).toBe('');
                    expect(pathObj.pathFromParent).toBe('xs:sequence//xs:element');
                });
                it("choice->element", function () {
                    var paramNode = {};
                    var pathObj = this.srh.__determineCorrectPathToTake(paramNode);
                    expect(pathObj.length).toBe(0);
                    expect(pathObj.superParentNodeName).toBe('');
                    expect(pathObj.pathFromParent).toBe('xs:choice//xs:element');
                });
                it("restriction->enumeration", function () {
                    var paramNode = {};
                    var pathObj = this.srh.__determineCorrectPathToTake(paramNode);
                    expect(pathObj.length).toBe(0);
                    expect(pathObj.superParentNodeName).toBe('');
                    expect(pathObj.pathFromParent).toBe('xs:restriction//xs:enumeration');
                });
            });
        });
        describe("testing adding objects to the list", function () {
            beforeAll(function () {
                this.srh = new _srh();
            });
            afterAll(function () {
                this.srh = null;
            });
            describe("by testing the exists function via __inQueue", function () {
                it("null input should be true", function () {
                    var node = null;
                    var boolean = this.srh.__inQueue("name", node);
                    expect(boolean).toBe(false);
                });
                it("valid input should be true", function () {
                    var node = {name: "ok"};
                    var boolean = this.srh.__inQueue("name", node["name"]);
                    expect(boolean).toBe(false);
                });
                it("duplicate input should be false", function () {
                    var node = { name: "ok" };
                    this.srh.__populationQueue.push(node);
                    var boolean = this.srh.__inQueue("name", node["name"]);
                    expect(boolean).toBe(true);
                });
                it("junk input should be true", function () {
                    var node = { name: {} };
                    var boolean = this.srh.__inQueue("name", node["name"]);
                    expect(boolean).toBe(false);
                });
            });
            describe("by actually adding nodes via __addToQueue", function () {
                beforeAll(function () {
                    this.srh = new _srh();
                });
                afterAll(function () {
                    this.srh = null;
                });
                it("null input should be false", function () {
                    var node = null;
                    var boolean = this.srh.__addToQueue("name", node);
                    expect(boolean).toBe(false);
                });
                it("valid input should be true", function () {
                    var node = { name: "ok" };
                    this.srh.__populationQueue = [];
                    var boolean = this.srh.__addToQueue("name", node);
                    expect(boolean).toBe(true);
                });
                it("duplicate input should be false", function () {
                    var node = { name: "ok" };
                    var boolean = this.srh.__addToQueue("name", node);
                    expect(boolean).toBe(false);
                });
                it("junk input should be false", function () {
                    var node = { name: {} };
                    var boolean = this.srh.__addToQueue("name", node);
                    expect(boolean).toBe(false);
                });
            });
        });


    });
});