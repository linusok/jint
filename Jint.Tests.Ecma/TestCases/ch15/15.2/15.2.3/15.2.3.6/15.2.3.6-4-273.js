/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-273.js
 * @description Object.defineProperty - 'O' is an Array, 'name' is an array index named property, name is accessor property and 'desc' is accessor descriptor, test updating multiple attribute values of 'name' (15.4.5.1 step 4.c)
 */


function testcase() {

        var arrObj = [];

        function setFunc(value) {
            arrObj.setVerifyHelpProp = value;
        }
        function getFunc() {
            return 12;
        }
        Object.defineProperty(arrObj, "1", {
            get: function () {
                return 6;
            },
            set: setFunc,
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(arrObj, "1", {
            get: getFunc,
            enumerable: false,
            configurable: false
        });
        return accessorPropertyAttributesAreCorrect(arrObj, "1", getFunc, setFunc, "setVerifyHelpProp", false, false);
    }
runTestCase(testcase);
