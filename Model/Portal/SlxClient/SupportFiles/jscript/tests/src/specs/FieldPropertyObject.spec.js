
/*
Type test template:

describe("Single:", function () {
    beforeEach(function () {
        //id, name, isUnicode, isSupported
        dataType = new _fpo('a6bf2690-3477-4a18-9849-56abf8693934', "Single", false, true);
    });
    it("Exists", function () {
        expect(dataType).toBeTruthy();
    });
    describe("Properties:", function () {
        it("SqlType", function () {
            expect(dataType.SqlType).toBeTruthy();
        });
    });
    describe("Properties It Does Not Have:", function () {
        it("Number", function () {
            // expect(dataType.Length).toBeTruthy();
            expect(dataType.Number).toBeUndefined();
        });
        it("Length", function () {
            // expect(dataType.Length).toBeTruthy();
            expect(dataType.Length).toBeUndefined();
        });
    });
});
*/


describe("Sage/UI/Controls/FieldPropertyObject", function () {
    require(['Sage/UI/Controls/FieldPropertyObject'],
        function (_fpo) {
            /** Mock Data Section Start **/
            var dataType, engName;
            /** Mock Data Section End **/
        describe("Type Functionality", function () {
            /** Mock Data Section Start **/
           
            /** Mock Data Section End **/
            describe("Single:", function () {
                beforeEach(function () {
                    engName = "Single";
                    //id, name, isUnicode, isSupported
                    dataType = new _fpo('a6bf2690-3477-4a18-9849-56abf8693934', engName, false, true);
                });
                it("Exists", function () {
                    expect(dataType).toBeTruthy();
                });
                describe("Properties:", function () {
                    it("SqlType exists", function () {
                        expect(dataType.SqlType).toBeTruthy();
                    });
                    it('show empty', function () {
                        expect(dataType.show).not.toBeUndefined();
                        expect(dataType.show).not.toBeNull();
                        expect([]).toEqual(dataType.show);
                    });
                    it('hidden empty', function () {
                        expect(dataType.hidden).not.toBeUndefined();
                        expect(dataType.hidden).not.toBeNull();
                        expect([]).toEqual(dataType.hidden);
                    });
                    it("Number true", function () {
                        expect(dataType.number).not.toBeUndefined();
                        expect(dataType.number).not.toBeNull();
                        expect(true).toEqual(dataType.number);
                    });
                    it("Calculated false", function () {
                        expect(dataType.calculated).not.toBeUndefined();
                        expect(dataType.calculated).not.toBeNull();
                        expect(false).toEqual(dataType.calculated);
                    });
                    it("IdType false", function () {
                        expect(dataType.idType).not.toBeUndefined();
                        expect(dataType.idType).not.toBeNull();
                        expect(false).toEqual(dataType.idType);
                    });
                    it("BitType false", function () {
                        expect(dataType.bitType).not.toBeUndefined();
                        expect(dataType.bitType).not.toBeNull();
                        expect(false).toEqual(dataType.bitType);
                    });
                    it("Complex false", function () {
                        expect(dataType.complex).not.toBeUndefined();
                        expect(dataType.complex).not.toBeNull();
                        expect(false).toEqual(dataType.complex);
                    });
                    it("IsBoolean false", function () {
                        expect(dataType.isBoolean).not.toBeUndefined();
                        expect(dataType.isBoolean).not.toBeNull();
                        expect(false).toEqual(dataType.isBoolean);
                    });
                    it("DateTime false", function () {
                        expect(dataType.dateTime).not.toBeUndefined();
                        expect(dataType.dateTime).not.toBeNull();
                        expect(false).toEqual(dataType.dateTime);
                    });
                    it("Length not defined", function () {
                        // expect(dataType.Length).toBeTruthy();
                        expect(dataType.Length).toBeUndefined();
                    });
                });
            });
            describe("Short:", function () {
                beforeEach(function () {
                    engName = "Short";
                    //id, name, isUnicode, isSupported
                    dataType = new _fpo('6b0b3d51-0728-4b67-9473-52836a81da53', engName, false, true);
                });
                afterEach(function () {
                    dataType = null;
                });
                it("Exists", function () {
                    expect(dataType).toBeTruthy();
                });
                describe("Properties:", function () {
                    it("SqlType exists", function () {
                        expect(dataType.SqlType).toBeTruthy();
                    });
                    it('show empty', function () {
                        expect(dataType.show).not.toBeUndefined();
                        expect(dataType.show).not.toBeNull();
                        expect([]).toEqual(dataType.show);
                    });
                    it('hidden empty', function () {
                        expect(dataType.hidden).not.toBeUndefined();
                        expect(dataType.hidden).not.toBeNull();
                        expect([]).toEqual(dataType.hidden);
                    });
                    it("Number true", function () {
                        expect(dataType.number).not.toBeUndefined();
                        expect(dataType.number).not.toBeNull();
                        expect(true).toEqual(dataType.number);
                    });
                    it("Calculated false", function () {
                        expect(dataType.calculated).not.toBeUndefined();
                        expect(dataType.calculated).not.toBeNull();
                        expect(false).toEqual(dataType.calculated);
                    });
                    it("IdType false", function () {
                        expect(dataType.idType).not.toBeUndefined();
                        expect(dataType.idType).not.toBeNull();
                        expect(false).toEqual(dataType.idType);
                    });
                    it("BitType false", function () {
                        expect(dataType.bitType).not.toBeUndefined();
                        expect(dataType.bitType).not.toBeNull();
                        expect(false).toEqual(dataType.bitType);
                    });
                    it("Complex false", function () {
                        expect(dataType.complex).not.toBeUndefined();
                        expect(dataType.complex).not.toBeNull();
                        expect(false).toEqual(dataType.complex);
                    });
                    it("IsBoolean false", function () {
                        expect(dataType.isBoolean).not.toBeUndefined();
                        expect(dataType.isBoolean).not.toBeNull();
                        expect(false).toEqual(dataType.isBoolean);
                    });
                    it("DateTime fals", function () {
                        expect(dataType.dateTime).not.toBeUndefined();
                        expect(dataType.dateTime).not.toBeNull();
                        expect(false).toEqual(dataType.dateTime);
                    });
                    it("Length undefined", function () {
                        expect(dataType.Length).toBeUndefined();
                    });
                });
            });
            describe("Integer:", function () {
                beforeEach(function () {
                    engName = "Integer";
                    //id, name, isUnicode, isSupported
                    dataType = new _fpo('47f90249-e4c8-4564-9ae6-e1fa9904f8b8', engName, false, true);
                });
                afterEach(function () {
                    dataType = null;
                });
                it("Exists", function () {
                    expect(dataType).toBeTruthy();
                });
                describe("Properties:", function () {
                    it("SqlType exists", function () {
                        expect(dataType.SqlType).toBeTruthy();
                    });
                    it('show empty', function () {
                        expect(dataType.show).not.toBeUndefined();
                        expect(dataType.show).not.toBeNull();
                        expect([]).toEqual(dataType.show);
                    });
                    it('hidden empty', function () {
                        expect(dataType.hidden).not.toBeUndefined();
                        expect(dataType.hidden).not.toBeNull();
                        expect([]).toEqual(dataType.hidden);
                    });
                    it("Number true", function () {
                        expect(dataType.number).not.toBeUndefined();
                        expect(dataType.number).not.toBeNull();
                        expect(true).toEqual(dataType.number);
                    });
                    it("Calculated false", function () {
                        expect(dataType.calculated).not.toBeUndefined();
                        expect(dataType.calculated).not.toBeNull();
                        expect(false).toEqual(dataType.calculated);
                    });
                    it("IdType false", function () {
                        expect(dataType.idType).not.toBeUndefined();
                        expect(dataType.idType).not.toBeNull();
                        expect(false).toEqual(dataType.idType);
                    });
                    it("BitType false", function () {
                        expect(dataType.bitType).not.toBeUndefined();
                        expect(dataType.bitType).not.toBeNull();
                        expect(false).toEqual(dataType.bitType);
                    });
                    it("Complex false", function () {
                        expect(dataType.complex).not.toBeUndefined();
                        expect(dataType.complex).not.toBeNull();
                        expect(false).toEqual(dataType.complex);
                    });
                    it("IsBoolean false", function () {
                        expect(dataType.isBoolean).not.toBeUndefined();
                        expect(dataType.isBoolean).not.toBeNull();
                        expect(false).toEqual(dataType.isBoolean);
                    });
                    it("DateTime false", function () {
                        expect(dataType.dateTime).not.toBeUndefined();
                        expect(dataType.dateTime).not.toBeNull();
                        expect(false).toEqual(dataType.dateTime);
                    });
                    it("Length undefined", function () {
                        expect(dataType.Length).toBeUndefined();
                    });
                });
            });
            describe("YesNo:", function () {
                beforeEach(function () {
                    engName = "YesNo";
                    //id, name, isUnicode, isSupported
                    dataType = new _fpo('95ca9d52-6f0b-4a96-bd40-43583f41faf8', engName, false, true);
                });
                afterEach(function () {
                    dataType = null;
                });
                it("Exists", function () {
                    expect(dataType).toBeTruthy();
                });
                describe("Properties:", function () {
                    it("SqlType exists", function () {
                        expect(dataType.SqlType).toBeTruthy();
                    });
                    it('show empty', function () {
                        expect(dataType.show).not.toBeUndefined();
                        expect(dataType.show).not.toBeNull();
                        expect([]).toEqual(dataType.show);
                    });
                    it('hidden empty', function () {
                        expect(dataType.hidden).not.toBeUndefined();
                        expect(dataType.hidden).not.toBeNull();
                        expect([]).toEqual(dataType.hidden);
                    });
                    it("Number false", function () {
                        expect(dataType.number).not.toBeUndefined();
                        expect(dataType.number).not.toBeNull();
                        expect(false).toEqual(dataType.number);
                    });
                    it("Calculated false", function () {
                        expect(dataType.calculated).not.toBeUndefined();
                        expect(dataType.calculated).not.toBeNull();
                        expect(false).toEqual(dataType.calculated);
                    });
                    it("IdType false", function () {
                        expect(dataType.idType).not.toBeUndefined();
                        expect(dataType.idType).not.toBeNull();
                        expect(false).toEqual(dataType.idType);
                    });
                    it("BitType false", function () {
                        expect(dataType.bitType).not.toBeUndefined();
                        expect(dataType.bitType).not.toBeNull();
                        expect(false).toEqual(dataType.bitType);
                    });
                    it("Complex false", function () {
                        expect(dataType.complex).not.toBeUndefined();
                        expect(dataType.complex).not.toBeNull();
                        expect(false).toEqual(dataType.complex);
                    });
                    it("IsBoolean true", function () {
                        expect(dataType.isBoolean).not.toBeUndefined();
                        expect(dataType.isBoolean).not.toBeNull();
                        expect(true).toEqual(dataType.isBoolean);
                    });
                    it("DateTime false", function () {
                        expect(dataType.dateTime).not.toBeUndefined();
                        expect(dataType.dateTime).not.toBeNull();
                        expect(false).toEqual(dataType.dateTime);
                    });
                    it("Length undefined", function () {
                        expect(dataType.Length).toBeUndefined();
                    });
                });
            });
            describe("Boolean:", function () {
                beforeEach(function () {
                    engName = "Boolean";
                    //id, name, isUnicode, isSupported
                    dataType = new _fpo('3edc7c52-e711-431d-b150-969d88ebabf4', engName, false, true);
                });
                afterEach(function () {
                    dataType = null;
                });
                it("Exists", function () {
                    expect(dataType).toBeTruthy();
                });
                describe("Properties:", function () {
                    it("SqlType exists", function () {
                        expect(dataType.SqlType).toBeTruthy();
                    });
                    it('show empty', function () {
                        expect(dataType.show).not.toBeUndefined();
                        expect(dataType.show).not.toBeNull();
                        expect([]).toEqual(dataType.show);
                    });
                    it('hidden empty', function () {
                        expect(dataType.hidden).not.toBeUndefined();
                        expect(dataType.hidden).not.toBeNull();
                        expect([]).toEqual(dataType.hidden);
                    });
                    it("Number false", function () {
                        expect(dataType.number).not.toBeUndefined();
                        expect(dataType.number).not.toBeNull();
                        expect(false).toEqual(dataType.number);
                    });
                    it("Calculated false", function () {
                        expect(dataType.calculated).not.toBeUndefined();
                        expect(dataType.calculated).not.toBeNull();
                        expect(false).toEqual(dataType.calculated);
                    });
                    it("IdType false", function () {
                        expect(dataType.idType).not.toBeUndefined();
                        expect(dataType.idType).not.toBeNull();
                        expect(false).toEqual(dataType.idType);
                    });
                    it("BitType false", function () {
                        expect(dataType.bitType).not.toBeUndefined();
                        expect(dataType.bitType).not.toBeNull();
                        expect(false).toEqual(dataType.bitType);
                    });
                    it("Complex false", function () {
                        expect(dataType.complex).not.toBeUndefined();
                        expect(dataType.complex).not.toBeNull();
                        expect(false).toEqual(dataType.complex);
                    });
                    it("IsBoolean true", function () {
                        expect(dataType.isBoolean).not.toBeUndefined();
                        expect(dataType.isBoolean).not.toBeNull();
                        expect(true).toEqual(dataType.isBoolean);
                    });
                    it("DateTime false", function () {
                        expect(dataType.dateTime).not.toBeUndefined();
                        expect(dataType.dateTime).not.toBeNull();
                        expect(false).toEqual(dataType.dateTime);
                    });
                    it("Length undefined", function () {
                        expect(dataType.Length).toBeUndefined();
                    });
                });
            });
            describe("DateTime:", function () {
                beforeEach(function () {
                    engName = "DateTime";
                    //id, name, isUnicode, isSupported
                    dataType = new _fpo('1f08f2eb-87c8-443b-a7c2-a51f590923f5', engName, false, true);
                });
                afterEach(function () {
                    dataType = null;
                });
                it("Exists", function () {
                    expect(dataType).toBeTruthy();
                });
                describe("Properties:", function () {
                    it("SqlType exists", function () {
                        expect(dataType.SqlType).toBeTruthy();
                    });
                    it('show empty', function () {
                        expect(dataType.show).not.toBeUndefined();
                        expect(dataType.show).not.toBeNull();
                        expect([]).toEqual(dataType.show);
                    });
                    it('hidden empty', function () {
                        expect(dataType.hidden).not.toBeUndefined();
                        expect(dataType.hidden).not.toBeNull();
                        expect([]).toEqual(dataType.hidden);
                    });
                    it("Number false", function () {
                        expect(dataType.number).not.toBeUndefined();
                        expect(dataType.number).not.toBeNull();
                        expect(false).toEqual(dataType.number);
                    });
                    it("Calculated false", function () {
                        expect(dataType.calculated).not.toBeUndefined();
                        expect(dataType.calculated).not.toBeNull();
                        expect(false).toEqual(dataType.calculated);
                    });
                    it("IdType false", function () {
                        expect(dataType.idType).not.toBeUndefined();
                        expect(dataType.idType).not.toBeNull();
                        expect(false).toEqual(dataType.idType);
                    });
                    it("BitType false", function () {
                        expect(dataType.bitType).not.toBeUndefined();
                        expect(dataType.bitType).not.toBeNull();
                        expect(false).toEqual(dataType.bitType);
                    });
                    it("Complex false", function () {
                        expect(dataType.complex).not.toBeUndefined();
                        expect(dataType.complex).not.toBeNull();
                        expect(false).toEqual(dataType.complex);
                    });
                    it("IsBoolean false", function () {
                        expect(dataType.isBoolean).not.toBeUndefined();
                        expect(dataType.isBoolean).not.toBeNull();
                        expect(false).toEqual(dataType.isBoolean);
                    });
                    it("DateTime true", function () {
                        expect(dataType.dateTime).not.toBeUndefined();
                        expect(dataType.dateTime).not.toBeNull();
                        expect(true).toEqual(dataType.dateTime);
                    });
                    it("Length undefined", function () {
                        expect(dataType.Length).toBeUndefined();
                    });
                });
            });
            describe("Char:", function () {
                beforeEach(function () {
                    engName = "Char";
                    //id, name, isUnicode, isSupported
                    dataType = new _fpo('189a1a4e-396c-4146-95c0-93b5d9e7d160', engName, false, true);
                });
                afterEach(function () {
                    dataType = null;
                });
                it("Exists", function () {
                    expect(dataType).toBeTruthy();
                });
                describe("Properties:", function () {
                    it("SqlType exists", function () {
                        expect(dataType.SqlType).toBeTruthy();
                    });
                    it('show empty', function () {
                        expect(dataType.show).not.toBeUndefined();
                        expect(dataType.show).not.toBeNull();
                        expect([]).toEqual(dataType.show);
                    });
                    it('hidden empty', function () {
                        expect(dataType.hidden).not.toBeUndefined();
                        expect(dataType.hidden).not.toBeNull();
                        expect([]).toEqual(dataType.hidden);
                    });
                    it("Number false", function () {
                        expect(dataType.number).not.toBeUndefined();
                        expect(dataType.number).not.toBeNull();
                        expect(false).toEqual(dataType.number);
                    });
                    it("Calculated false", function () {
                        expect(dataType.calculated).not.toBeUndefined();
                        expect(dataType.calculated).not.toBeNull();
                        expect(false).toEqual(dataType.calculated);
                    });
                    it("IdType false", function () {
                        expect(dataType.idType).not.toBeUndefined();
                        expect(dataType.idType).not.toBeNull();
                        expect(false).toEqual(dataType.idType);
                    });
                    it("BitType false", function () {
                        expect(dataType.bitType).not.toBeUndefined();
                        expect(dataType.bitType).not.toBeNull();
                        expect(false).toEqual(dataType.bitType);
                    });
                    it("Complex false", function () {
                        expect(dataType.complex).not.toBeUndefined();
                        expect(dataType.complex).not.toBeNull();
                        expect(false).toEqual(dataType.complex);
                    });
                    it("IsBoolean false", function () {
                        expect(dataType.isBoolean).not.toBeUndefined();
                        expect(dataType.isBoolean).not.toBeNull();
                        expect(false).toEqual(dataType.isBoolean);
                    });
                    it("DateTime false", function () {
                        expect(dataType.dateTime).not.toBeUndefined();
                        expect(dataType.dateTime).not.toBeNull();
                        expect(false).toEqual(dataType.dateTime);
                    });
                    it("Length undefined", function () {
                        expect(dataType.Length).toBeUndefined();
                    });
                });
            });
            describe("Byte:", function () {
                beforeEach(function () {
                    engName = "Byte";
                    //id, name, isUnicode, isSupported
                    dataType = new _fpo('68e04249-f7e2-4b63-90be-55fbb1f4aa77', engName, false, true);
                });
                afterEach(function () {
                    dataType = null;
                });
                it("Exists", function () {
                    expect(dataType).toBeTruthy();
                });
                describe("Properties:", function () {
                    it("SqlType exists", function () {
                        expect(dataType.SqlType).toBeTruthy();
                    });
                    it('show empty', function () {
                        expect(dataType.show).not.toBeUndefined();
                        expect(dataType.show).not.toBeNull();
                        expect([]).toEqual(dataType.show);
                    });
                    it('hidden empty', function () {
                        expect(dataType.hidden).not.toBeUndefined();
                        expect(dataType.hidden).not.toBeNull();
                        expect([]).toEqual(dataType.hidden);
                    });
                    it("Number false", function () {
                        expect(dataType.number).not.toBeUndefined();
                        expect(dataType.number).not.toBeNull();
                        expect(false).toEqual(dataType.number);
                    });
                    it("Calculated false", function () {
                        expect(dataType.calculated).not.toBeUndefined();
                        expect(dataType.calculated).not.toBeNull();
                        expect(false).toEqual(dataType.calculated);
                    });
                    it("IdType false", function () {
                        expect(dataType.idType).not.toBeUndefined();
                        expect(dataType.idType).not.toBeNull();
                        expect(false).toEqual(dataType.idType);
                    });
                    it("BitType true", function () {
                        expect(dataType.bitType).not.toBeUndefined();
                        expect(dataType.bitType).not.toBeNull();
                        expect(true).toEqual(dataType.bitType);
                    });
                    it("Complex false", function () {
                        expect(dataType.complex).not.toBeUndefined();
                        expect(dataType.complex).not.toBeNull();
                        expect(false).toEqual(dataType.complex);
                    });
                    it("IsBoolean false", function () {
                        expect(dataType.isBoolean).not.toBeUndefined();
                        expect(dataType.isBoolean).not.toBeNull();
                        expect(false).toEqual(dataType.isBoolean);
                    });
                    it("DateTime false", function () {
                        expect(dataType.dateTime).not.toBeUndefined();
                        expect(dataType.dateTime).not.toBeNull();
                        expect(false).toEqual(dataType.dateTime);
                    });
                    it("Length undefined", function () {
                        expect(dataType.Length).toBeUndefined();
                    });
                });
            });
            describe("Text:", function () {
                beforeEach(function () {
                    engName = "Text";
                    //id, name, isUnicode, isSupported
                    dataType = new _fpo('ccc0f01d-7ba5-408e-8526-a3f942354b3a', engName, false, true);
                });
                afterEach(function () {
                    dataType = null;
                });
                it("Exists", function () {
                    expect(dataType).toBeTruthy();
                });
                describe("Properties:", function () {
                    it("ClrDataType exists", function () {
                        expect(dataType.ClrDataType).toBeTruthy();
                        expect("System.String").toEqual(dataType.ClrDataType);
                    });
                    it("ThisObj exists", function () {
                        expect(dataType.ClrDataType).toBeTruthy();
                        expect(engName).toEqual(dataType.ThisObj);
                    });
                    it("SqlType exists", function () {
                        expect(dataType.SqlType).toBeTruthy();
                        expect("AnsiString(Length=255)").toEqual(dataType.SqlType);
                    });
                    it("Encrypted exists", function () {
                        expect(dataType.IsEncrypted).not.toBeUndefined();
                        expect(dataType.IsEncrypted).not.toBeNull();
                    });
                    it("Length 255", function () {
                        expect(dataType.Length).toBeTruthy();
                        expect(255).toEqual(dataType.Length);
                    });
                    it('show [Length, IsEncrypted]', function () {
                        expect(dataType.show).not.toBeUndefined();
                        expect(dataType.show).not.toBeNull();
                        expect(['Length', 'IsEncrypted']).toEqual(dataType.show);
                    });
                    it('hidden empty', function () {
                        expect(dataType.hidden).not.toBeUndefined();
                        expect(dataType.hidden).not.toBeNull();
                        expect([]).toEqual(dataType.hidden);
                    });
                    it("Number false", function () {
                        expect(dataType.number).not.toBeUndefined();
                        expect(dataType.number).not.toBeNull();
                        expect(false).toEqual(dataType.number);
                    });
                    it("Calculated false", function () {
                        expect(dataType.calculated).not.toBeUndefined();
                        expect(dataType.calculated).not.toBeNull();
                        expect(false).toEqual(dataType.calculated);
                    });
                    it("IdType false", function () {
                        expect(dataType.idType).not.toBeUndefined();
                        expect(dataType.idType).not.toBeNull();
                        expect(false).toEqual(dataType.idType);
                    });
                    it("BitType false", function () {
                        expect(dataType.bitType).not.toBeUndefined();
                        expect(dataType.bitType).not.toBeNull();
                        expect(false).toEqual(dataType.bitType);
                    });
                    it("Complex false", function () {
                        expect(dataType.complex).not.toBeUndefined();
                        expect(dataType.complex).not.toBeNull();
                        expect(false).toEqual(dataType.complex);
                    });
                    it("IsBoolean false", function () {
                        expect(dataType.isBoolean).not.toBeUndefined();
                        expect(dataType.isBoolean).not.toBeNull();
                        expect(false).toEqual(dataType.isBoolean);
                    });
                    it("DateTime false", function () {
                        expect(dataType.dateTime).not.toBeUndefined();
                        expect(dataType.dateTime).not.toBeNull();
                        expect(false).toEqual(dataType.dateTime);
                    });
                });
            });
            describe("Memo:", function () {
                beforeEach(function () {
                    engName = "Memo";
                    //id, name, isUnicode, isSupported
                    dataType = new _fpo('f4ca6023-9f5f-4e41-8571-50ba94e8f233', engName, true, true);
                });
                afterEach(function () {
                    dataType = null;
                });
                it("Exists", function () {
                    expect(dataType).toBeTruthy();
                });
                describe("Properties:", function () {
                    it("ClrDataType exists", function () {
                        expect(dataType.ClrDataType).toBeTruthy();
                        expect("System.String").toEqual(dataType.ClrDataType);
                    });
                    it("ThisObj  exists", function () {
                        expect(dataType.ClrDataType).toBeTruthy();
                        expect(engName).toEqual(dataType.ThisObj);
                    });
                    it("SqlType exists", function () {
                        expect(dataType.SqlType).toBeTruthy();
                        expect("AnsiString(Length=2147483647)").toEqual(dataType.SqlType);
                    });
                    it("Encrypted exists", function () {
                        expect(dataType.IsEncrypted).not.toBeUndefined();
                        expect(dataType.IsEncrypted).not.toBeNull();
                    });
                    it("Length 2147483647", function () {
                        expect(dataType.Length).toBeTruthy();
                        expect(2147483647).toEqual(dataType.Length);
                    });
                    it('show [Length, IsEncrypted]', function () {
                        expect(dataType.show).not.toBeUndefined();
                        expect(dataType.show).not.toBeNull();
                        expect(['Length', 'IsEncrypted']).toEqual(dataType.show);
                    });
                    it('hidden empty', function () {
                        expect(dataType.hidden).not.toBeUndefined();
                        expect(dataType.hidden).not.toBeNull();
                        expect([]).toEqual(dataType.hidden);
                    });
                    it("Number false", function () {
                        expect(dataType.number).not.toBeUndefined();
                        expect(dataType.number).not.toBeNull();
                        expect(false).toEqual(dataType.number);
                    });
                    it("Calculated false", function () {
                        expect(dataType.calculated).not.toBeUndefined();
                        expect(dataType.calculated).not.toBeNull();
                        expect(false).toEqual(dataType.calculated);
                    });
                    it("IdType false", function () {
                        expect(dataType.idType).not.toBeUndefined();
                        expect(dataType.idType).not.toBeNull();
                        expect(false).toEqual(dataType.idType);
                    });
                    it("BitType false", function () {
                        expect(dataType.bitType).not.toBeUndefined();
                        expect(dataType.bitType).not.toBeNull();
                        expect(false).toEqual(dataType.bitType);
                    });
                    it("Complex false", function () {
                        expect(dataType.complex).not.toBeUndefined();
                        expect(dataType.complex).not.toBeNull();
                        expect(false).toEqual(dataType.complex);
                    });
                    it("IsBoolean false", function () {
                        expect(dataType.isBoolean).not.toBeUndefined();
                        expect(dataType.isBoolean).not.toBeNull();
                        expect(false).toEqual(dataType.isBoolean);
                    });
                    it("DateTime false", function () {
                        expect(dataType.dateTime).not.toBeUndefined();
                        expect(dataType.dateTime).not.toBeNull();
                        expect(false).toEqual(dataType.dateTime);
                    });
                });
            });
            describe("Email:", function () {
                beforeEach(function () {
                    engName = "Email";
                    //id, name, isUnicode, isSupported
                    dataType = new _fpo('31e8638d-4232-4c61-8827-d94132a33887', engName, true, true);
                });
                afterEach(function () {
                    dataType = null;
                });
                it("Exists", function () {
                    expect(dataType).toBeTruthy();
                });
                describe("Properties:", function () {
                    it("ClrDataType exists", function () {
                        expect(dataType.ClrDataType).toBeTruthy();
                        expect("System.String").toEqual(dataType.ClrDataType);
                    });
                    it("ThisObj exists", function () {
                        expect(dataType.ClrDataType).toBeTruthy();
                        expect(engName).toEqual(dataType.ThisObj);
                    });
                    it("SqlType exists", function () {
                        expect(dataType.SqlType).toBeTruthy();
                        expect("AnsiString(Length=128)").toEqual(dataType.SqlType);
                    });
                    it("Encrypted exists", function () {
                        expect(dataType.IsEncrypted).not.toBeUndefined();
                        expect(dataType.IsEncrypted).not.toBeNull();
                    });
                    it("Length 128", function () {
                        expect(dataType.Length).toBeTruthy();
                        expect(128).toEqual(dataType.Length);
                    });
                    it('show [Length, IsEncrypted]', function () {
                        expect(dataType.show).not.toBeUndefined();
                        expect(dataType.show).not.toBeNull();
                        expect(['Length', 'IsEncrypted']).toEqual(dataType.show);
                    });
                    it('hidden empty', function () {
                        expect(dataType.hidden).not.toBeUndefined();
                        expect(dataType.hidden).not.toBeNull();
                        expect([]).toEqual(dataType.hidden);
                    });
                    it("Number false", function () {
                        expect(dataType.number).not.toBeUndefined();
                        expect(dataType.number).not.toBeNull();
                        expect(false).toEqual(dataType.number);
                    });
                    it("Calculated false", function () {
                        expect(dataType.calculated).not.toBeUndefined();
                        expect(dataType.calculated).not.toBeNull();
                        expect(false).toEqual(dataType.calculated);
                    });
                    it("IdType false", function () {
                        expect(dataType.idType).not.toBeUndefined();
                        expect(dataType.idType).not.toBeNull();
                        expect(false).toEqual(dataType.idType);
                    });
                    it("BitType false", function () {
                        expect(dataType.bitType).not.toBeUndefined();
                        expect(dataType.bitType).not.toBeNull();
                        expect(false).toEqual(dataType.bitType);
                    });
                    it("Complex false", function () {
                        expect(dataType.complex).not.toBeUndefined();
                        expect(dataType.complex).not.toBeNull();
                        expect(false).toEqual(dataType.complex);
                    });
                    it("IsBoolean false", function () {
                        expect(dataType.isBoolean).not.toBeUndefined();
                        expect(dataType.isBoolean).not.toBeNull();
                        expect(false).toEqual(dataType.isBoolean);
                    });
                    it("DateTime false", function () {
                        expect(dataType.dateTime).not.toBeUndefined();
                        expect(dataType.dateTime).not.toBeNull();
                        expect(false).toEqual(dataType.dateTime);
                    });
                });
            });
            describe("Binary:", function () {
                beforeEach(function () {
                    engName = "Binary";
                    //id, name, isUnicode, isSupported
                    dataType = new _fpo('07370ef3-ad24-409f-86a8-ff2db5ee6d69', engName, true, true);
                });
                afterEach(function () {
                    dataType = null;
                });
                it("Exists", function () {
                    expect(dataType).toBeTruthy();
                });
                describe("Properties:", function () {
                    it("ClrDataType exists", function () {
                        expect(dataType.ClrDataType).toBeTruthy();
                        expect("System.Byte[]").toEqual(dataType.ClrDataType);
                    });
                    it("ThisObj exists", function () {
                        expect(dataType.ClrDataType).toBeTruthy();
                        expect(engName).toEqual(dataType.ThisObj);
                    });
                    it("SqlType exists", function () {
                        expect(dataType.SqlType).toBeTruthy();
                        expect("Binary(Length=8000)").toEqual(dataType.SqlType);
                    });
                    it("Encrypted exists", function () {
                        expect(dataType.IsEncrypted).not.toBeUndefined();
                        expect(dataType.IsEncrypted).not.toBeNull();
                    });
                    it("Length 8000", function () {
                        expect(dataType.Length).toBeTruthy();
                        expect(8000).toEqual(dataType.Length);
                    });
                    it('show [Length, IsEncrypted]', function () {
                        expect(dataType.show).not.toBeUndefined();
                        expect(dataType.show).not.toBeNull();
                        expect(['Length', 'IsEncrypted']).toEqual(dataType.show);
                    });
                    it('hidden empty', function () {
                        expect(dataType.hidden).not.toBeUndefined();
                        expect(dataType.hidden).not.toBeNull();
                        expect([]).toEqual(dataType.hidden);
                    });
                    it("Number false", function () {
                        expect(dataType.number).not.toBeUndefined();
                        expect(dataType.number).not.toBeNull();
                        expect(false).toEqual(dataType.number);
                    });
                    it("Calculated false", function () {
                        expect(dataType.calculated).not.toBeUndefined();
                        expect(dataType.calculated).not.toBeNull();
                        expect(false).toEqual(dataType.calculated);
                    });
                    it("IdType false", function () {
                        expect(dataType.idType).not.toBeUndefined();
                        expect(dataType.idType).not.toBeNull();
                        expect(false).toEqual(dataType.idType);
                    });
                    it("BitType true", function () {
                        expect(dataType.bitType).not.toBeUndefined();
                        expect(dataType.bitType).not.toBeNull();
                        expect(true).toEqual(dataType.bitType);
                    });
                    it("Complex false", function () {
                        expect(dataType.complex).not.toBeUndefined();
                        expect(dataType.complex).not.toBeNull();
                        expect(false).toEqual(dataType.complex);
                    });
                    it("IsBoolean false", function () {
                        expect(dataType.isBoolean).not.toBeUndefined();
                        expect(dataType.isBoolean).not.toBeNull();
                        expect(false).toEqual(dataType.isBoolean);
                    });
                    it("DateTime false", function () {
                        expect(dataType.dateTime).not.toBeUndefined();
                        expect(dataType.dateTime).not.toBeNull();
                        expect(false).toEqual(dataType.dateTime);
                    });
                });
            });
            describe("Unicode Text:", function () {
                beforeEach(function () {
                    engName = "Unicode Text";
                    //id, name, isUnicode, isSupported
                    dataType = new _fpo('76c537a8-8b08-4b35-84cf-fa95c6c133b0', engName, true, true);
                });
                afterEach(function () {
                    dataType = null;
                });
                it("Exists", function () {
                    expect(dataType).toBeTruthy();
                });
                describe("Properties:", function () {
                    it("ClrDataType exists", function () {
                        expect(dataType.ClrDataType).toBeTruthy();
                        expect("System.String").toEqual(dataType.ClrDataType);
                    });
                    it("ThisObj exists", function () {
                        expect(dataType.ClrDataType).toBeTruthy();
                        expect(engName).toEqual(dataType.ThisObj);
                    });
                    it("SqlType exists", function () {
                        expect(dataType.SqlType).toBeTruthy();
                        expect("String(Length=255)").toEqual(dataType.SqlType);
                    });
                    it("Encrypted exists", function () {
                        expect(dataType.IsEncrypted).not.toBeUndefined();
                        expect(dataType.IsEncrypted).not.toBeNull();
                    });
                    it("Length 255", function () {
                        expect(255).toEqual(dataType.Length);
                    });
                    it('show [Length, IsEncrypted]', function () {
                        expect(dataType.show).not.toBeUndefined();
                        expect(dataType.show).not.toBeNull();
                        expect(['Length', 'IsEncrypted']).toEqual(dataType.show);
                    });
                    it('hidden empty', function () {
                        expect(dataType.hidden).not.toBeUndefined();
                        expect(dataType.hidden).not.toBeNull();
                        expect([]).toEqual(dataType.hidden);
                    });
                    it("Number false", function () {
                        expect(dataType.number).not.toBeUndefined();
                        expect(dataType.number).not.toBeNull();
                        expect(false).toEqual(dataType.number);
                    });
                    it("Calculated false", function () {
                        expect(dataType.calculated).not.toBeUndefined();
                        expect(dataType.calculated).not.toBeNull();
                        expect(false).toEqual(dataType.calculated);
                    });
                    it("IdType false", function () {
                        expect(dataType.idType).not.toBeUndefined();
                        expect(dataType.idType).not.toBeNull();
                        expect(false).toEqual(dataType.idType);
                    });
                    it("BitType false", function () {
                        expect(dataType.bitType).not.toBeUndefined();
                        expect(dataType.bitType).not.toBeNull();
                        expect(false).toEqual(dataType.bitType);
                    });
                    it("Complex false", function () {
                        expect(dataType.complex).not.toBeUndefined();
                        expect(dataType.complex).not.toBeNull();
                        expect(false).toEqual(dataType.complex);
                    });
                    it("IsBoolean false", function () {
                        expect(dataType.isBoolean).not.toBeUndefined();
                        expect(dataType.isBoolean).not.toBeNull();
                        expect(false).toEqual(dataType.isBoolean);
                    });
                    it("DateTime false", function () {
                        expect(dataType.dateTime).not.toBeUndefined();
                        expect(dataType.dateTime).not.toBeNull();
                        expect(false).toEqual(dataType.dateTime);
                    });
                });
            });
            describe("Unicode Memo:", function () {
                beforeEach(function () {
                    engName = "Unicode Memo";
                    //id, name, isUnicode, isSupported
                    dataType = new _fpo('b2ed309e-ea89-4eef-8051-6244987953a4', engName, true, true);
                });
                afterEach(function () {
                    dataType = null;
                });
                it("Exists", function () {
                    expect(dataType).toBeTruthy();
                });
                describe("Properties:", function () {
                    it("SqlType exists", function () {
                        expect(dataType.SqlType).toBeTruthy();
                    });
                    it("Length 214783647", function () {
                        expect(dataType.Length).not.toBeUndefined();
                        expect(dataType.Length).not.toBeNull();
                        expect(2147483647).toEqual(dataType.Length);
                    });
                    it('show [Length, IsEncrypted]', function () {
                        expect(dataType.show).not.toBeUndefined();
                        expect(dataType.show).not.toBeNull();
                        expect(['Length', 'IsEncrypted']).toEqual(dataType.show);
                    });
                    it('hidden empty', function () {
                        expect(dataType.hidden).not.toBeUndefined();
                        expect(dataType.hidden).not.toBeNull();
                        expect([]).toEqual(dataType.hidden);
                    });
                    it("Number false", function () {
                        expect(dataType.number).not.toBeUndefined();
                        expect(dataType.number).not.toBeNull();
                        expect(false).toEqual(dataType.number);
                    });
                    it("Calculated false", function () {
                        expect(dataType.calculated).not.toBeUndefined();
                        expect(dataType.calculated).not.toBeNull();
                        expect(false).toEqual(dataType.calculated);
                    });
                    it("IdType false", function () {
                        expect(dataType.idType).not.toBeUndefined();
                        expect(dataType.idType).not.toBeNull();
                        expect(false).toEqual(dataType.idType);
                    });
                    it("BitType false", function () {
                        expect(dataType.bitType).not.toBeUndefined();
                        expect(dataType.bitType).not.toBeNull();
                        expect(false).toEqual(dataType.bitType);
                    });
                    it("Complex false", function () {
                        expect(dataType.complex).not.toBeUndefined();
                        expect(dataType.complex).not.toBeNull();
                        expect(false).toEqual(dataType.complex);
                    });
                    it("IsBoolean false", function () {
                        expect(dataType.isBoolean).not.toBeUndefined();
                        expect(dataType.isBoolean).not.toBeNull();
                        expect(false).toEqual(dataType.isBoolean);
                    });
                    it("DateTime false", function () {
                        expect(dataType.dateTime).not.toBeUndefined();
                        expect(dataType.dateTime).not.toBeNull();
                        expect(false).toEqual(dataType.dateTime);
                    });
                });
            });
            describe("Calculated String:", function () {
                beforeEach(function () {
                    engName = "Calculated String";
                    //id, name, isUnicode, isSupported
                    dataType = new _fpo('f750817f-73ad-4bf3-b2de-bd0f5cc47dfd', engName, false, true);
                });
                afterEach(function () {
                    dataType = null;
                });
                it("Exists", function () {
                    expect(dataType).toBeTruthy();
                });
                describe("Properties:", function () {
                    it("SqlType exists", function () {
                        expect(dataType.SqlType).toBeTruthy();
                    });
                    describe("Type Specific Fields:", function () {
                        it("DisplayName blank", function () {
                            expect(dataType.DisplayName).not.toBeUndefined();
                            expect(dataType.DisplayName).not.toBeNull();
                            expect("").toEqual(dataType.DisplayName);
                        });
                        it("Description blank", function () {
                            expect(dataType.Description).not.toBeUndefined();
                            expect(dataType.Description).not.toBeNull();
                            expect("").toEqual(dataType.Description);
                        });
                        it("Template blank", function () {
                            expect(dataType.Template).not.toBeUndefined();
                            expect(dataType.Template).not.toBeNull();
                            expect("").toEqual(dataType.Template);
                        });
                        it("type 0", function () {
                            expect(dataType.type).not.toBeUndefined();
                            expect(dataType.type).not.toBeNull();
                            expect(0).toEqual(dataType.type);
                        });
                        it("oldTemplate blank", function () {
                            expect(dataType.oldTemplate).not.toBeUndefined();
                            expect(dataType.oldTemplate).not.toBeNull();
                            expect("").toEqual(dataType.oldTemplate);
                        });
                    });
                    it('show [Description, Template]', function () {
                        expect(dataType.show).not.toBeUndefined();
                        expect(dataType.show).not.toBeNull();
                        expect(['Description', 'Template']).toEqual(dataType.show);
                    });
                    it('hidden [oldTemplate]', function () {
                        expect(dataType.hidden).not.toBeUndefined();
                        expect(dataType.hidden).not.toBeNull();
                        expect(['oldTemplate']).toEqual(dataType.hidden);
                    });
                    it("Number false", function () {
                        expect(dataType.number).not.toBeUndefined();
                        expect(dataType.number).not.toBeNull();
                        expect(false).toEqual(dataType.number);
                    });
                    it("Calculated true", function () {
                        expect(dataType.calculated).not.toBeUndefined();
                        expect(dataType.calculated).not.toBeNull();
                        expect(true).toEqual(dataType.calculated);
                    });
                    it("IdType false", function () {
                        expect(dataType.idType).not.toBeUndefined();
                        expect(dataType.idType).not.toBeNull();
                        expect(false).toEqual(dataType.idType);
                    });
                    it("BitType false", function () {
                        expect(dataType.bitType).not.toBeUndefined();
                        expect(dataType.bitType).not.toBeNull();
                        expect(false).toEqual(dataType.bitType);
                    });
                    it("Complex false", function () {
                        expect(dataType.complex).not.toBeUndefined();
                        expect(dataType.complex).not.toBeNull();
                        expect(false).toEqual(dataType.complex);
                    });
                    it("IsBoolean false", function () {
                        expect(dataType.isBoolean).not.toBeUndefined();
                        expect(dataType.isBoolean).not.toBeNull();
                        expect(false).toEqual(dataType.isBoolean);
                    });
                    it("DateTime false", function () {
                        expect(dataType.dateTime).not.toBeUndefined();
                        expect(dataType.dateTime).not.toBeNull();
                        expect(false).toEqual(dataType.dateTime);
                    });
                    it("Length undefined", function () {
                        expect(dataType.Length).toBeUndefined();
                    });
                });
            });
            describe("URL:", function () {
                beforeEach(function () {
                    engName = "URL";
                    //id, name, isUnicode, isSupported
                    dataType = new _fpo('85f2bba5-1fb7-4ecf-941a-d98d4739c305', engName, false, true);
                });
                afterEach(function () {
                    dataType = null;
                });
                it("Exists", function () {
                    expect(dataType).toBeTruthy();
                });
                describe("Properties:", function () {
                    it("SqlType exists", function () {
                        expect(dataType.SqlType).toBeTruthy();
                    });
                    it("Length 255", function () {
                        expect(255).toEqual(dataType.Length);
                    });
                    it('show [Length, IsEncrypted]', function () {
                        expect(dataType.show).not.toBeUndefined();
                        expect(dataType.show).not.toBeNull();
                        expect(['Length', 'IsEncrypted']).toEqual(dataType.show);
                    });
                    it('hidden empty', function () {
                        expect(dataType.hidden).not.toBeUndefined();
                        expect(dataType.hidden).not.toBeNull();
                        expect([]).toEqual(dataType.hidden);
                    });
                    it("Number false", function () {
                        expect(dataType.number).not.toBeUndefined();
                        expect(dataType.number).not.toBeNull();
                        expect(false).toEqual(dataType.number);
                    });
                    it("Calculated false", function () {
                        expect(dataType.calculated).not.toBeUndefined();
                        expect(dataType.calculated).not.toBeNull();
                        expect(false).toEqual(dataType.calculated);
                    });
                    it("IdType false", function () {
                        expect(dataType.idType).not.toBeUndefined();
                        expect(dataType.idType).not.toBeNull();
                        expect(false).toEqual(dataType.idType);
                    });
                    it("BitType false", function () {
                        expect(dataType.bitType).not.toBeUndefined();
                        expect(dataType.bitType).not.toBeNull();
                        expect(false).toEqual(dataType.bitType);
                    });
                    it("Complex false", function () {
                        expect(dataType.complex).not.toBeUndefined();
                        expect(dataType.complex).not.toBeNull();
                        expect(false).toEqual(dataType.complex);
                    });
                    it("IsBoolean false", function () {
                        expect(dataType.isBoolean).not.toBeUndefined();
                        expect(dataType.isBoolean).not.toBeNull();
                        expect(false).toEqual(dataType.isBoolean);
                    });
                    it("DateTime false", function () {
                        expect(dataType.dateTime).not.toBeUndefined();
                        expect(dataType.dateTime).not.toBeNull();
                        expect(false).toEqual(dataType.dateTime);
                    });
                });
            });
            describe("Phone:", function () {
                beforeEach(function () {
                    engName = "Phone";
                    //id, name, isUnicode, isSupported
                    dataType = new _fpo('85f2bba5-1fb7-4ecf-941a-d98d4739c305', engName, false, true);
                });
                afterEach(function () {
                    dataType = null;
                });
                it("Exists", function () {
                    expect(dataType).toBeTruthy();
                });
                describe("Properties:", function () {
                    it("SqlType exists", function () {
                        expect(dataType.SqlType).toBeTruthy();
                    });
                    it("Length 255", function () {
                        expect(255).toEqual(dataType.Length);
                    });
                    it('show [Length, IsEncrypted]', function () {
                        expect(dataType.show).not.toBeUndefined();
                        expect(dataType.show).not.toBeNull();
                        expect(['Length', 'IsEncrypted']).toEqual(dataType.show);
                    });
                    it('hidden empty', function () {
                        expect(dataType.hidden).not.toBeUndefined();
                        expect(dataType.hidden).not.toBeNull();
                        expect([]).toEqual(dataType.hidden);
                    });
                    it("Number false", function () {
                        expect(dataType.number).not.toBeUndefined();
                        expect(dataType.number).not.toBeNull();
                        expect(false).toEqual(dataType.number);
                    });
                    it("Calculated false", function () {
                        expect(dataType.calculated).not.toBeUndefined();
                        expect(dataType.calculated).not.toBeNull();
                        expect(false).toEqual(dataType.calculated);
                    });
                    it("IdType false", function () {
                        expect(dataType.idType).not.toBeUndefined();
                        expect(dataType.idType).not.toBeNull();
                        expect(false).toEqual(dataType.idType);
                    });
                    it("BitType false", function () {
                        expect(dataType.bitType).not.toBeUndefined();
                        expect(dataType.bitType).not.toBeNull();
                        expect(false).toEqual(dataType.bitType);
                    });
                    it("Complex false", function () {
                        expect(dataType.complex).not.toBeUndefined();
                        expect(dataType.complex).not.toBeNull();
                        expect(false).toEqual(dataType.complex);
                    });
                    it("IsBoolean false", function () {
                        expect(dataType.isBoolean).not.toBeUndefined();
                        expect(dataType.isBoolean).not.toBeNull();
                        expect(false).toEqual(dataType.isBoolean);
                    });
                    it("DateTime false", function () {
                        expect(dataType.dateTime).not.toBeUndefined();
                        expect(dataType.dateTime).not.toBeNull();
                        expect(false).toEqual(dataType.dateTime);
                    });
                });
            });
            describe("Decimal:", function () {
                beforeEach(function () {
                    engName = "Decimal";
                    //id, name, isUnicode, isSupported
                    dataType = new _fpo('2596d57d-89d6-4b72-9036-b18c64c5324c', engName, false, true);
                });
                afterEach(function () {
                    dataType = null;
                });
                it("Exists", function () {
                    expect(dataType).toBeTruthy();
                });
                describe("Properties:", function () {
                    it("SqlType exists", function () {
                        expect(dataType.SqlType).toBeTruthy();
                    });
                    it("Precision 17", function () {
                        expect(dataType.Precision).not.toBeUndefined();
                        expect(dataType.Precision).not.toBeNull();
                        expect(17).toEqual(dataType.Precision);
                    });
                    it("Scale 4", function () {
                        expect(dataType.Scale).not.toBeUndefined();
                        expect(dataType.Scale).not.toBeNull();
                        expect(4).toEqual(dataType.Scale);
                    });
                    it('show [Precision, Scale]', function () {
                        expect(dataType.show).not.toBeUndefined();
                        expect(dataType.show).not.toBeNull();
                        expect(['Precision', 'Scale']).toEqual(dataType.show);
                    });
                    it('hidden empty', function () {
                        expect(dataType.hidden).not.toBeUndefined();
                        expect(dataType.hidden).not.toBeNull();
                        expect([]).toEqual(dataType.hidden);
                    });
                    it("Number true", function () {
                        expect(dataType.number).not.toBeUndefined();
                        expect(dataType.number).not.toBeNull();
                        expect(true).toEqual(dataType.number);
                    });
                    it("Calculated false", function () {
                        expect(dataType.calculated).not.toBeUndefined();
                        expect(dataType.calculated).not.toBeNull();
                        expect(false).toEqual(dataType.calculated);
                    });
                    it("IdType false", function () {
                        expect(dataType.idType).not.toBeUndefined();
                        expect(dataType.idType).not.toBeNull();
                        expect(false).toEqual(dataType.idType);
                    });
                    it("BitType false", function () {
                        expect(dataType.bitType).not.toBeUndefined();
                        expect(dataType.bitType).not.toBeNull();
                        expect(false).toEqual(dataType.bitType);
                    });
                    it("Complex false", function () {
                        expect(dataType.complex).not.toBeUndefined();
                        expect(dataType.complex).not.toBeNull();
                        expect(false).toEqual(dataType.complex);
                    });
                    it("IsBoolean false", function () {
                        expect(dataType.isBoolean).not.toBeUndefined();
                        expect(dataType.isBoolean).not.toBeNull();
                        expect(false).toEqual(dataType.isBoolean);
                    });
                    it("DateTime false", function () {
                        expect(dataType.dateTime).not.toBeUndefined();
                        expect(dataType.dateTime).not.toBeNull();
                        expect(false).toEqual(dataType.dateTime);
                    });
                    it("Length undefined", function () {
                        expect(dataType.Length).toBeUndefined();
                    });
                });
            });
            describe("Double:", function () {
                beforeEach(function () {
                    engName = "Double";
                    //id, name, isUnicode, isSupported
                    dataType = new _fpo('f37c635c-9fbf-40d8-98d5-750a54a3cca1', engName, false, true);
                });
                afterEach(function () {
                    dataType = null;
                });
                it("Exists", function () {
                    expect(dataType).toBeTruthy();
                });
                describe("Properties:", function () {
                    it("SqlType exists", function () {
                        expect(dataType.SqlType).toBeTruthy();
                    });
                    it("IsPercentage false", function () {
                        expect(dataType.IsPercentage).not.toBeUndefined();
                        expect(dataType.IsPercentage).not.toBeNull();
                        expect(false).toEqual(dataType.IsPercentage);
                    });
                    it('show [IsPercentage]', function () {
                        expect(dataType.show).not.toBeUndefined();
                        expect(dataType.show).not.toBeNull();
                        expect(['IsPercentage']).toEqual(dataType.show);
                    });
                    it('hidden empty', function () {
                        expect(dataType.hidden).not.toBeUndefined();
                        expect(dataType.hidden).not.toBeNull();
                        expect([]).toEqual(dataType.hidden);
                    });
                    it("Number true", function () {
                        expect(dataType.number).not.toBeUndefined();
                        expect(dataType.number).not.toBeNull();
                        expect(true).toEqual(dataType.number);
                    });
                    it("Calculated false", function () {
                        expect(dataType.calculated).not.toBeUndefined();
                        expect(dataType.calculated).not.toBeNull();
                        expect(false).toEqual(dataType.calculated);
                    });
                    it("IdType false", function () {
                        expect(dataType.idType).not.toBeUndefined();
                        expect(dataType.idType).not.toBeNull();
                        expect(false).toEqual(dataType.idType);
                    });
                    it("BitType false", function () {
                        expect(dataType.bitType).not.toBeUndefined();
                        expect(dataType.bitType).not.toBeNull();
                        expect(false).toEqual(dataType.bitType);
                    });
                    it("Complex false", function () {
                        expect(dataType.complex).not.toBeUndefined();
                        expect(dataType.complex).not.toBeNull();
                        expect(false).toEqual(dataType.complex);
                    });
                    it("IsBoolean false", function () {
                        expect(dataType.isBoolean).not.toBeUndefined();
                        expect(dataType.isBoolean).not.toBeNull();
                        expect(false).toEqual(dataType.isBoolean);
                    });
                    it("DateTime false", function () {
                        expect(dataType.dateTime).not.toBeUndefined();
                        expect(dataType.dateTime).not.toBeNull();
                        expect(false).toEqual(dataType.dateTime);
                    });
                    it("Length undefined", function () {
                        expect(dataType.Length).toBeUndefined();
                    });
                });
            });
            describe("Calculated Number:", function () {
                beforeEach(function () {
                    engName = "Calculated Number";
                    //id, name, isUnicode, isSupported
                    dataType = new _fpo('44bc190a-99f3-4fa9-98a3-d5b2336d6e7c', engName, false, true);
                });
                afterEach(function () {
                    dataType = null;
                });
                it("Exists", function () {
                    expect(dataType).toBeTruthy();
                });
                describe("Properties:", function () {
                    it("SqlType exists", function () {
                        expect(dataType.SqlType).toBeTruthy();
                    });
                    describe("Type Specific Fields:", function () {
                        it("DisplayName blank", function () {
                            expect(dataType.DisplayName).not.toBeUndefined();
                            expect(dataType.DisplayName).not.toBeNull();
                            expect("").toEqual(dataType.DisplayName);
                        });
                        it("Description blank", function () {
                            expect(dataType.Description).not.toBeUndefined();
                            expect(dataType.Description).not.toBeNull();
                            expect("").toEqual(dataType.Description);
                        });
                        it("Template blank", function () {
                            expect(dataType.Template).not.toBeUndefined();
                            expect(dataType.Template).not.toBeNull();
                            expect("").toEqual(dataType.Template);
                        });
                        it("type 1", function () {
                            expect(dataType.type).not.toBeUndefined();
                            expect(dataType.type).not.toBeNull();
                            expect(1).toEqual(dataType.type);
                        });
                        it("oldTemplate blank", function () {
                            expect(dataType.oldTemplate).not.toBeUndefined();
                            expect(dataType.oldTemplate).not.toBeNull();
                            expect("").toEqual(dataType.oldTemplate);
                        });
                    });
                    it('show [Description, Template]', function () {
                        expect(dataType.show).not.toBeUndefined();
                        expect(dataType.show).not.toBeNull();
                        expect(['Description', 'Template']).toEqual(dataType.show);
                    });
                    it('hidden [oldTemplate]', function () {
                        expect(dataType.hidden).not.toBeUndefined();
                        expect(dataType.hidden).not.toBeNull();
                        expect(['oldTemplate']).toEqual(dataType.hidden);
                    });
                    it("Number true", function () {
                        expect(dataType.number).not.toBeUndefined();
                        expect(dataType.number).not.toBeNull();
                        expect(true).toEqual(dataType.number);
                    });
                    it("Calculated true", function () {
                        expect(dataType.calculated).not.toBeUndefined();
                        expect(dataType.calculated).not.toBeNull();
                        expect(true).toEqual(dataType.calculated);
                    });
                    it("IdType false", function () {
                        expect(dataType.idType).not.toBeUndefined();
                        expect(dataType.idType).not.toBeNull();
                        expect(false).toEqual(dataType.idType);
                    });
                    it("BitType false", function () {
                        expect(dataType.bitType).not.toBeUndefined();
                        expect(dataType.bitType).not.toBeNull();
                        expect(false).toEqual(dataType.bitType);
                    });
                    it("Complex false", function () {
                        expect(dataType.complex).not.toBeUndefined();
                        expect(dataType.complex).not.toBeNull();
                        expect(false).toEqual(dataType.complex);
                    });
                    it("IsBoolean false", function () {
                        expect(dataType.isBoolean).not.toBeUndefined();
                        expect(dataType.isBoolean).not.toBeNull();
                        expect(false).toEqual(dataType.isBoolean);
                    });
                    it("DateTime false", function () {
                        expect(dataType.dateTime).not.toBeUndefined();
                        expect(dataType.dateTime).not.toBeNull();
                        expect(false).toEqual(dataType.dateTime);
                    });
                    it("Length undefined", function () {
                        expect(dataType.Length).toBeUndefined();
                    });
                });
            });
            describe("Standard Id:", function () {
                beforeEach(function () {
                    engName = "Standard Id";
                    //id, name, isUnicode, isSupported
                    dataType = new _fpo('30053f5a-8d40-4db1-b185-1e4128eb26cc', engName, false, true);
                });
                afterEach(function () {
                    dataType = null;
                });
                it("Exists", function () {
                    expect(dataType).toBeTruthy();
                });
                describe("Properties:", function () {
                    it("SqlType exists", function () {
                        expect(dataType.SqlType).toBeTruthy();
                    });
                    it('show empty', function () {
                        expect(dataType.show).not.toBeUndefined();
                        expect(dataType.show).not.toBeNull();
                        expect([]).toEqual(dataType.show);
                    });
                    it('hidden empty', function () {
                        expect(dataType.hidden).not.toBeUndefined();
                        expect(dataType.hidden).not.toBeNull();
                        expect([]).toEqual(dataType.hidden);
                    });
                    it("Number false", function () {
                        expect(dataType.number).not.toBeUndefined();
                        expect(dataType.number).not.toBeNull();
                        expect(false).toEqual(dataType.number);
                    });
                    it("Calculated false", function () {
                        expect(dataType.calculated).not.toBeUndefined();
                        expect(dataType.calculated).not.toBeNull();
                        expect(false).toEqual(dataType.calculated);
                    });
                    it("IdType true", function () {
                        expect(dataType.idType).not.toBeUndefined();
                        expect(dataType.idType).not.toBeNull();
                        expect(true).toEqual(dataType.idType);
                    });
                    it("BitType false", function () {
                        expect(dataType.bitType).not.toBeUndefined();
                        expect(dataType.bitType).not.toBeNull();
                        expect(false).toEqual(dataType.bitType);
                    });
                    it("Complex false", function () {
                        expect(dataType.complex).not.toBeUndefined();
                        expect(dataType.complex).not.toBeNull();
                        expect(false).toEqual(dataType.complex);
                    });
                    it("IsBoolean false", function () {
                        expect(dataType.isBoolean).not.toBeUndefined();
                        expect(dataType.isBoolean).not.toBeNull();
                        expect(false).toEqual(dataType.isBoolean);
                    });
                    it("DateTime false", function () {
                        expect(dataType.dateTime).not.toBeUndefined();
                        expect(dataType.dateTime).not.toBeNull();
                        expect(false).toEqual(dataType.dateTime);
                    });
                    it("Length undefined", function () {
                        expect(dataType.Length).toBeUndefined();
                    });
                });
            });
            describe("Owner:", function () {
                beforeEach(function () {
                    engName = "Owner";
                    //id, name, isUnicode, isSupported
                    dataType = new _fpo('17541523-fc31-4269-ac97-df63290d0e31', engName, false, true);
                });
                afterEach(function () {
                    dataType = null;
                });
                it("Exists", function () {
                    expect(dataType).toBeTruthy();
                });
                describe("Properties:", function () {
                    it("SqlType exiss", function () {
                        expect(dataType.SqlType).toBeTruthy();
                    });
                    it('show empty', function () {
                        expect(dataType.show).not.toBeUndefined();
                        expect(dataType.show).not.toBeNull();
                        expect([]).toEqual(dataType.show);
                    });
                    it('hidden empty', function () {
                        expect(dataType.hidden).not.toBeUndefined();
                        expect(dataType.hidden).not.toBeNull();
                        expect([]).toEqual(dataType.hidden);
                    });
                    it("Number false", function () {
                        expect(dataType.number).not.toBeUndefined();
                        expect(dataType.number).not.toBeNull();
                        expect(false).toEqual(dataType.number);
                    });
                    it("Calculated false", function () {
                        expect(dataType.calculated).not.toBeUndefined();
                        expect(dataType.calculated).not.toBeNull();
                        expect(false).toEqual(dataType.calculated);
                    });
                    it("IdType false", function () {
                        expect(dataType.idType).not.toBeUndefined();
                        expect(dataType.idType).not.toBeNull();
                        expect(false).toEqual(dataType.idType);
                    });
                    it("BitType false", function () {
                        expect(dataType.bitType).not.toBeUndefined();
                        expect(dataType.bitType).not.toBeNull();
                        expect(false).toEqual(dataType.bitType);
                    });
                    it("Complex false", function () {
                        expect(dataType.complex).not.toBeUndefined();
                        expect(dataType.complex).not.toBeNull();
                        expect(false).toEqual(dataType.complex);
                    });
                    it("IsBoolean false", function () {
                        expect(dataType.isBoolean).not.toBeUndefined();
                        expect(dataType.isBoolean).not.toBeNull();
                        expect(false).toEqual(dataType.isBoolean);
                    });
                    it("DateTime false", function () {
                        expect(dataType.dateTime).not.toBeUndefined();
                        expect(dataType.dateTime).not.toBeNull();
                        expect(false).toEqual(dataType.dateTime);
                    });
                    it("Length undefined", function () {
                        expect(dataType.Length).toBeUndefined();
                    });
                });
            });
            describe("TrueFalse:", function () {
                beforeEach(function () {
                    engName = "TrueFalse";
                    //id, name, isUnicode, isSupported
                    dataType = new _fpo('92432b4d-8206-4a96-ba7b-e4cbd374f148', engName, false, true);
                });
                afterEach(function () {
                    dataType = null;
                });
                it("Exists", function () {
                    expect(dataType).toBeTruthy();
                });
                describe("Properties:", function () {
                    it("SqlType exiss", function () {
                        expect(dataType.SqlType).toBeTruthy();
                    });
                    it('show empty', function () {
                        expect(dataType.show).not.toBeUndefined();
                        expect(dataType.show).not.toBeNull();
                        expect([]).toEqual(dataType.show);
                    });
                    it('hidden empty', function () {
                        expect(dataType.hidden).not.toBeUndefined();
                        expect(dataType.hidden).not.toBeNull();
                        expect([]).toEqual(dataType.hidden);
                    });
                    it("Number false", function () {
                        expect(dataType.number).not.toBeUndefined();
                        expect(dataType.number).not.toBeNull();
                        expect(false).toEqual(dataType.number);
                    });
                    it("Calculated false", function () {
                        expect(dataType.calculated).not.toBeUndefined();
                        expect(dataType.calculated).not.toBeNull();
                        expect(false).toEqual(dataType.calculated);
                    });
                    it("IdType false", function () {
                        expect(dataType.idType).not.toBeUndefined();
                        expect(dataType.idType).not.toBeNull();
                        expect(false).toEqual(dataType.idType);
                    });
                    it("BitType false", function () {
                        expect(dataType.bitType).not.toBeUndefined();
                        expect(dataType.bitType).not.toBeNull();
                        expect(false).toEqual(dataType.bitType);
                    });
                    it("Complex false", function () {
                        expect(dataType.complex).not.toBeUndefined();
                        expect(dataType.complex).not.toBeNull();
                        expect(false).toEqual(dataType.complex);
                    });
                    it("IsBoolean true", function () {
                        expect(dataType.isBoolean).not.toBeUndefined();
                        expect(dataType.isBoolean).not.toBeNull();
                        expect(true).toEqual(dataType.isBoolean);
                    });
                    it("DateTime false", function () {
                        expect(dataType.dateTime).not.toBeUndefined();
                        expect(dataType.dateTime).not.toBeNull();
                        expect(false).toEqual(dataType.dateTime);
                    });
                    it("Length undefined", function () {
                        expect(dataType.Length).toBeUndefined();
                    });
                });
            });
            describe("PickList:", function () {
                beforeEach(function () {
                    engName = "PickList";
                    //id, name, isUnicode, isSupported
                    dataType = new _fpo('b71918bf-fac1-4b62-9ed5-0b0294bc9900', engName, false, true);
                });
                afterEach(function () {
                    dataType = null;
                });
                it("Exists", function () {
                    expect(dataType).toBeTruthy();
                });
                describe("Properties:", function () {
                    it("SqlType exists", function () {
                        expect(dataType.SqlType).toBeTruthy();
                    });
                    it("Length 64", function () {
                        expect(64).toEqual(dataType.Length);
                    });
                    describe("Storage", function () {
                        it("Display Text", function () {
                            expect(dataType.Display).not.toBeUndefined();
                            expect(dataType.dateTime).not.toBeNull();
                            expect('Text').toEqual(dataType.Display);
                        });
                        it("DisplayOptions 4", function () {
                            expect(dataType.DisplayOptions).not.toBeUndefined();
                            expect(dataType.DisplayOptions).not.toBeNull();
                            expect(4).toEqual(dataType.DisplayOptions.length);
                        });
                        it("Storage Text", function () {
                            expect(dataType.Storage).not.toBeUndefined();
                            expect(dataType.Storage).not.toBeNull();
                            expect('Text').toEqual(dataType.Storage);
                        });
                        it("StorageOptions 4", function () {
                            expect(dataType.StorageOptions).not.toBeUndefined();
                            expect(dataType.StorageOptions).not.toBeNull();
                            expect(4).toEqual(dataType.StorageOptions.length);
                        });
                    });
                    describe("Type Specific Fields:", function () {
                        it("PickListId blabk",function(){
                            expect(dataType.PickListId).not.toBeUndefined();
                            expect(dataType.PickListId).not.toBeNull();
                            expect('').toEqual(dataType.PickListId);
                        });
                        it("PickListName blank",function(){
                            expect(dataType.PickListName).not.toBeUndefined();
                            expect(dataType.PickListName).not.toBeNull();
                            expect('').toEqual(dataType.PickListName);
                        });
                        it("AllowMultiples false", function () {
                            expect(dataType.AllowMultiples).not.toBeUndefined();
                            expect(dataType.AllowMultiples).not.toBeNull();
                            expect(false).toEqual(dataType.AllowMultiples);
                        });
                        it("AlphaSort false", function () {
                            expect(dataType.AlphaSort).not.toBeUndefined();
                            expect(dataType.AlphaSort).not.toBeNull();
                            expect(false).toEqual(dataType.AlphaSort);
                        });
                        it("MustExistInList false", function () {
                            expect(dataType.MustExistInList).not.toBeUndefined();
                            expect(dataType.MustExistInList).not.toBeNull();
                            expect(true).toEqual(dataType.MustExistInList);
                        });
                        it("NoneEditable false", function () {
                            expect(dataType.NoneEditable).not.toBeUndefined();
                            expect(dataType.NoneEditable).not.toBeNull();
                            expect(false).toEqual(dataType.NoneEditable);
                        });
                        it("PickListFilter blank", function () {
                            expect(dataType.PickListFilter).not.toBeUndefined();
                            expect(dataType.PickListFilter).not.toBeNull();
                            expect('').toEqual(dataType.PickListFilter);
                        });
                        it("ValueStoredAsText true", function () {
                            expect(dataType.ValueStoredAsText).not.toBeUndefined();
                            expect(dataType.ValueStoredAsText).not.toBeNull();
                            expect(true).toEqual(dataType.ValueStoredAsText);
                        });
                    });
                    it('show [...]', function () {
                        expect(dataType.show).not.toBeUndefined();
                        expect(dataType.show).not.toBeNull();
                        expect(['Length', 'Display', 'Storage', 'PickListName', 'AllowMultiples', 'AlphaSort', 'MustExistInList', 'NoneEditable', 'ValueStoredAsText']).toEqual(dataType.show);
                    });
                    it('hidden empty', function () {
                        expect(dataType.hidden).not.toBeUndefined();
                        expect(dataType.hidden).not.toBeNull();
                        expect([]).toEqual(dataType.hidden);
                    });
                    it("Number false", function () {
                        expect(dataType.number).not.toBeUndefined();
                        expect(dataType.number).not.toBeNull();
                        expect(false).toEqual(dataType.number);
                    });
                    it("Calculated false", function () {
                        expect(dataType.calculated).not.toBeUndefined();
                        expect(dataType.calculated).not.toBeNull();
                        expect(false).toEqual(dataType.calculated);
                    });
                    it("IdType false", function () {
                        expect(dataType.idType).not.toBeUndefined();
                        expect(dataType.idType).not.toBeNull();
                        expect(false).toEqual(dataType.idType);
                    });
                    it("BitType false", function () {
                        expect(dataType.bitType).not.toBeUndefined();
                        expect(dataType.bitType).not.toBeNull();
                        expect(false).toEqual(dataType.bitType);
                    });
                    it("Complex true", function () {
                        expect(dataType.complex).not.toBeUndefined();
                        expect(dataType.complex).not.toBeNull();
                        expect(true).toEqual(dataType.complex);
                    });
                    it("IsBoolean false", function () {
                        expect(dataType.isBoolean).not.toBeUndefined();
                        expect(dataType.isBoolean).not.toBeNull();
                        expect(false).toEqual(dataType.isBoolean);
                    });
                    it("DateTime false", function () {
                        expect(dataType.dateTime).not.toBeUndefined();
                        expect(dataType.dateTime).not.toBeNull();
                        expect(false).toEqual(dataType.dateTime);
                    });
                });
            });
            describe("Lookup:", function () {
                beforeEach(function () {
                    engName = "Lookup";
                    //id, name, isUnicode, isSupported
                    dataType = new _fpo('a3b52518-801b-44be-96bf-fdca3de84f7f', engName, false, true);
                });
                afterEach(function () {
                    dataType = null;
                });
                it("Exists", function () {
                    expect(dataType).toBeTruthy();
                });
                describe("Properties:", function () {
                    it("SqlType exists", function () {
                        expect(dataType.SqlType).toBeTruthy();
                    });
                    it("Length 64", function () {
                        expect(64).toEqual(dataType.Length);
                    });
                    describe("Storage", function () {
                        it("Display blank", function () {
                            expect(dataType.Display).not.toBeUndefined();
                            expect(dataType.dateTime).not.toBeNull();
                            expect('').toEqual(dataType.Display);
                        });
                        it("DisplayOptions 0", function () {
                            expect(dataType.DisplayOptions).not.toBeUndefined();
                            expect(dataType.DisplayOptions).not.toBeNull();
                            expect(0).toEqual(dataType.DisplayOptions.length);
                        });
                        it("Storage blank", function () {
                            expect(dataType.Storage).not.toBeUndefined();
                            expect(dataType.Storage).not.toBeNull();
                            expect('').toEqual(dataType.Storage);
                        });
                        it("StorageOptions 0", function () {
                            expect(dataType.StorageOptions).not.toBeUndefined();
                            expect(dataType.StorageOptions).not.toBeNull();
                            expect(0).toEqual(dataType.StorageOptions.length);
                        });
                    });
                    
                    describe("Type Specific Fields:", function () {
                        it("EnableHyperLinking false", function () {
                            expect(dataType.EnableHyperLinking).not.toBeUndefined();
                            expect(dataType.EnableHyperLinking).not.toBeNull();
                            expect(false).toEqual(dataType.EnableHyperLinking);
                        });
                        it("EnableHyperLinking blank", function(){
                            expect(dataType.LookupEntityName).not.toBeUndefined();
                            expect(dataType.LookupEntityName).not.toBeNull();
                            expect('').toEqual(dataType.LookupEntityName);
                        });
                        it("EnableHyperLinking empty", function(){
                            expect(dataType.LookupPreFilters).not.toBeUndefined();
                            expect(dataType.LookupPreFilters).not.toBeNull();
                            expect([]).toEqual(dataType.LookupPreFilters);
                        });
                        it("EnableHyperLinking rmpty", function(){
                            expect(dataType.LookupProperties).not.toBeUndefined();
                            expect(dataType.LookupProperties).not.toBeNull();
                            expect([]).toEqual(dataType.LookupProperties);
                        });
                        it("EnableHyperLinking true", function(){
                            expect(dataType.ReturnPrimaryKey).not.toBeUndefined();
                            expect(dataType.ReturnPrimaryKey).not.toBeNull();
                            expect(true).toEqual(dataType.ReturnPrimaryKey);
                        });
                    });
                    it('show [...]', function () {
                        expect(dataType.show).not.toBeUndefined();
                        expect(dataType.show).not.toBeNull();
                        expect(['Length', 'LookupEntityName', 'EnableHyperLinking', 'ReturnPrimaryKey', 'LookupProperties', 'LookupPreFilters']).toEqual(dataType.show);
                    });
                    it('hidden empty', function () {
                        expect(dataType.hidden).not.toBeUndefined();
                        expect(dataType.hidden).not.toBeNull();
                        expect([]).toEqual(dataType.hidden);
                    });
                    it("Number false", function () {
                        expect(dataType.number).not.toBeUndefined();
                        expect(dataType.number).not.toBeNull();
                        expect(false).toEqual(dataType.number);
                    });
                    it("Calculated false", function () {
                        expect(dataType.calculated).not.toBeUndefined();
                        expect(dataType.calculated).not.toBeNull();
                        expect(false).toEqual(dataType.calculated);
                    });
                    it("IdType false", function () {
                        expect(dataType.idType).not.toBeUndefined();
                        expect(dataType.idType).not.toBeNull();
                        expect(false).toEqual(dataType.idType);
                    });
                    it("BitType false", function () {
                        expect(dataType.bitType).not.toBeUndefined();
                        expect(dataType.bitType).not.toBeNull();
                        expect(false).toEqual(dataType.bitType);
                    });
                    it("Complex true", function () {
                        expect(dataType.complex).not.toBeUndefined();
                        expect(dataType.complex).not.toBeNull();
                        expect(true).toEqual(dataType.complex);
                    });
                    it("IsBoolean false", function () {
                        expect(dataType.isBoolean).not.toBeUndefined();
                        expect(dataType.isBoolean).not.toBeNull();
                        expect(false).toEqual(dataType.isBoolean);
                    });
                    it("DateTime false", function () {
                        expect(dataType.dateTime).not.toBeUndefined();
                        expect(dataType.dateTime).not.toBeNull();
                        expect(false).toEqual(dataType.dateTime);
                    });
                });
            });
            describe("dependencyLookup:", function () {
                beforeEach(function () {
                    engName = "dependencyLookup";
                    //id, name, isUnicode, isSupported
                    dataType = new _fpo('517d5e69-9efa-4d0a-8e7a-1c7691f921ba', engName, false, true);
                });
                afterEach(function () {
                    dataType = null;
                });
                it("Exists", function () {
                    expect(dataType).toBeTruthy();
                });
                describe("Properties:", function () {
                    it("SqlType exist", function () {
                        expect(dataType.SqlType).toBeTruthy();
                    });
                    it("Length 64", function () {
                        expect(64).toEqual(dataType.Length);
                    });
                    describe("Type Specific Fields:", function () {
                        it("LookupEntityName blank",function(){
                            expect(dataType.LookupEntityName).not.toBeUndefined();
                            expect(dataType.LookupEntityName).not.toBeNull();
                            expect('').toEqual(dataType.LookupEntityName);
                        });
                        it("LookupGroup 1.0",function(){
                            expect(dataType.LookupGroup).not.toBeUndefined();
                            expect(dataType.LookupGroup).not.toBeNull();
                            expect(1.0).toEqual(dataType.LookupGroup);
                        });
                        it("ParentProperty blank",function(){
                            expect(dataType.ParentProperty).not.toBeUndefined();
                            expect(dataType.ParentProperty).not.toBeNull();
                            expect('').toEqual(dataType.ParentProperty);
                        });
                    });
                    it('show [...]', function () {
                        expect(dataType.show).not.toBeUndefined();
                        expect(dataType.show).not.toBeNull();
                        expect(['Length', 'LookupEntityName', 'LookupGroup', 'ParentProperty']).toEqual(dataType.show);
                    });
                    it('hidden empty', function () {
                        expect(dataType.hidden).not.toBeUndefined();
                        expect(dataType.hidden).not.toBeNull();
                        expect([]).toEqual(dataType.hidden);
                    });
                    it("Number false", function () {
                        expect(dataType.number).not.toBeUndefined();
                        expect(dataType.number).not.toBeNull();
                        expect(false).toEqual(dataType.number);
                    });
                    it("Calculated false", function () {
                        expect(dataType.calculated).not.toBeUndefined();
                        expect(dataType.calculated).not.toBeNull();
                        expect(false).toEqual(dataType.calculated);
                    });
                    it("IdType false", function () {
                        expect(dataType.idType).not.toBeUndefined();
                        expect(dataType.idType).not.toBeNull();
                        expect(false).toEqual(dataType.idType);
                    });
                    it("BitType false", function () {
                        expect(dataType.bitType).not.toBeUndefined();
                        expect(dataType.bitType).not.toBeNull();
                        expect(false).toEqual(dataType.bitType);
                    });
                    it("Complex true", function () {
                        expect(dataType.complex).not.toBeUndefined();
                        expect(dataType.complex).not.toBeNull();
                        expect(true).toEqual(dataType.complex);
                    });
                    it("IsBoolean false", function () {
                        expect(dataType.isBoolean).not.toBeUndefined();
                        expect(dataType.isBoolean).not.toBeNull();
                        expect(false).toEqual(dataType.isBoolean);
                    });
                    it("DateTime false", function () {
                        expect(dataType.dateTime).not.toBeUndefined();
                        expect(dataType.dateTime).not.toBeNull();
                        expect(false).toEqual(dataType.dateTime);
                    });
                });
            });
            describe("Enum:", function () {
                beforeEach(function () {
                    engName = "Enum";
                    //id, name, isUnicode, isSupported
                    dataType = new _fpo('8edd8fce-2be5-4d3d-bedd-ea667e78a8af', engName, false, true);
                });
                afterEach(function () {
                    dataType = null;
                });
                it("Exists", function () {
                    expect(dataType).toBeTruthy();
                });
                describe("Properties:", function () {
                    it("SqlType exists", function () {
                        expect(dataType.SqlType).toBeTruthy();
                    });
                    describe("Storage", function () {
                        it("Display blank", function () {
                            expect(dataType.Display).not.toBeUndefined();
                            expect(dataType.dateTime).not.toBeNull();
                            expect('').toEqual(dataType.Display);
                        });
                        it("DisplayOptions 0", function () {
                            expect(dataType.DisplayOptions).not.toBeUndefined();
                            expect(dataType.DisplayOptions).not.toBeNull();
                            expect(0).toEqual(dataType.DisplayOptions.length);
                        });
                        it("Storage Name", function () {
                            expect(dataType.Storage).not.toBeUndefined();
                            expect(dataType.Storage).not.toBeNull();
                            expect('Name').toEqual(dataType.Storage);
                        });
                        it("StorageOptions 3", function () {
                            expect(dataType.StorageOptions).not.toBeUndefined();
                            expect(dataType.StorageOptions).not.toBeNull();
                            expect(3).toEqual(dataType.StorageOptions.length);
                        });
                    });
                    describe("Type Specific Fields:", function () {
                        it("StorageOptions empty", function () {
                            expect(dataType.Items).not.toBeUndefined();
                            expect(dataType.Items).not.toBeNull();
                            expect([]).toEqual(dataType.Items);
                        });
                        it("StorageOptions false", function () {
                            expect(dataType.MultiSelect).not.toBeUndefined();
                            expect(dataType.MultiSelect).not.toBeNull();
                            expect(false).toEqual(dataType.MultiSelect);
                        });
                        it("StorageOptions blank", function () {
                            expect(dataType.OverriddenName).not.toBeUndefined();
                            expect(dataType.OverriddenName).not.toBeNull();
                            expect('').toEqual(dataType.OverriddenName);
                        });
                    });
                    it('show [...]', function () {
                        expect(dataType.show).not.toBeUndefined();
                        expect(dataType.show).not.toBeNull();
                        expect(['Storage', 'MultiSelect', 'Items', 'OverriddenName']).toEqual(dataType.show);
                    });
                    it('hidden empty', function () {
                        expect(dataType.hidden).not.toBeUndefined();
                        expect(dataType.hidden).not.toBeNull();
                        expect([]).toEqual(dataType.hidden);
                    });
                    it("Number false", function () {
                        expect(dataType.number).not.toBeUndefined();
                        expect(dataType.number).not.toBeNull();
                        expect(false).toEqual(dataType.number);
                    });
                    it("Calculated false", function () {
                        expect(dataType.calculated).not.toBeUndefined();
                        expect(dataType.calculated).not.toBeNull();
                        expect(false).toEqual(dataType.calculated);
                    });
                    it("IdType false", function () {
                        expect(dataType.idType).not.toBeUndefined();
                        expect(dataType.idType).not.toBeNull();
                        expect(false).toEqual(dataType.idType);
                    });
                    it("BitType false", function () {
                        expect(dataType.bitType).not.toBeUndefined();
                        expect(dataType.bitType).not.toBeNull();
                        expect(false).toEqual(dataType.bitType);
                    });
                    it("Complex true", function () {
                        expect(dataType.complex).not.toBeUndefined();
                        expect(dataType.complex).not.toBeNull();
                        expect(true).toEqual(dataType.complex);
                    });
                    it("IsBoolean false", function () {
                        expect(dataType.isBoolean).not.toBeUndefined();
                        expect(dataType.isBoolean).not.toBeNull();
                        expect(false).toEqual(dataType.isBoolean);
                    });
                    it("DateTime false", function () {
                        expect(dataType.dateTime).not.toBeUndefined();
                        expect(dataType.dateTime).not.toBeNull();
                        expect(false).toEqual(dataType.dateTime);
                    });
                    it("Length undefined", function () {
                        expect(dataType.Length).toBeUndefined();
                    });
                });
            });
            describe("GUID:", function () {
                beforeEach(function () {
                    engName = "GUID";
                    //id, name, isUnicode, isSupported
                    dataType = new _fpo('3ca925e1-4b76-4621-a39c-a0d4cb7327d5', engName, false, true);
                });
                afterEach(function () {
                    dataType = null;
                });
                it("Exists", function () {
                    expect(dataType).toBeTruthy();
                });
                describe("Properties:", function () {
                    it("SqlType exists", function () {
                        expect(dataType.SqlType).toBeTruthy();
                    });
                    describe("Storage", function () {
                        it("Display blank", function () {
                            expect(dataType.Display).not.toBeUndefined();
                            expect(dataType.dateTime).not.toBeNull();
                            expect('').toEqual(dataType.Display);
                        });
                        it("DisplayOptions 0", function () {
                            expect(dataType.DisplayOptions).not.toBeUndefined();
                            expect(dataType.DisplayOptions).not.toBeNull();
                            expect(0).toEqual(dataType.DisplayOptions.length);
                        });
                        it("Storage string", function () {
                            expect(dataType.Storage).not.toBeUndefined();
                            expect(dataType.Storage).not.toBeNull();
                            expect('String').toEqual(dataType.Storage);
                        });
                        it("StorageOptions 1", function () {
                            expect(dataType.StorageOptions).not.toBeUndefined();
                            expect(dataType.StorageOptions).not.toBeNull();
                            expect(1).toEqual(dataType.StorageOptions.length);
                        });
                    });
                    it('show [storage]', function () {
                        expect(dataType.show).not.toBeUndefined();
                        expect(dataType.show).not.toBeNull();
                        expect(['Storage']).toEqual(dataType.show);
                    });
                    it('hidden empty', function () {
                        expect(dataType.hidden).not.toBeUndefined();
                        expect(dataType.hidden).not.toBeNull();
                        expect([]).toEqual(dataType.hidden);
                    });
                    it("Number false", function () {
                        expect(dataType.number).not.toBeUndefined();
                        expect(dataType.number).not.toBeNull();
                        expect(false).toEqual(dataType.number);
                    });
                    it("Calculated false", function () {
                        expect(dataType.calculated).not.toBeUndefined();
                        expect(dataType.calculated).not.toBeNull();
                        expect(false).toEqual(dataType.calculated);
                    });
                    it("IdType true", function () {
                        expect(dataType.idType).not.toBeUndefined();
                        expect(dataType.idType).not.toBeNull();
                        expect(true).toEqual(dataType.idType);
                    });
                    it("BitType false", function () {
                        expect(dataType.bitType).not.toBeUndefined();
                        expect(dataType.bitType).not.toBeNull();
                        expect(false).toEqual(dataType.bitType);
                    });
                    it("Complex false", function () {
                        expect(dataType.complex).not.toBeUndefined();
                        expect(dataType.complex).not.toBeNull();
                        expect(false).toEqual(dataType.complex);
                    });
                    it("IsBoolean false", function () {
                        expect(dataType.isBoolean).not.toBeUndefined();
                        expect(dataType.isBoolean).not.toBeNull();
                        expect(false).toEqual(dataType.isBoolean);
                    });
                    it("DateTime false", function () {
                        expect(dataType.dateTime).not.toBeUndefined();
                        expect(dataType.dateTime).not.toBeNull();
                        expect(false).toEqual(dataType.dateTime);
                    });
                    it("Length undefined", function () {
                        expect(dataType.Length).toBeUndefined();
                    });
                });
            });
        });
    });
});
