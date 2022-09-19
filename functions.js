"use strict";
exports.__esModule = true;
exports.getName = exports.printFormat = exports.format = exports.addStrings = void 0;
//defines the parameters types and the return types
function addNumbers(a, b) {
    return a + b;
}
exports["default"] = addNumbers;
//default params
var addStrings = function (str1, str2) {
    if (str2 === void 0) { str2 = ""; }
    return "".concat(str1, " ").concat(str2);
};
exports.addStrings = addStrings;
//returns a string
var format = function (title, param) {
    return "".concat(title, " ").concat(param);
};
exports.format = format;
//returns void
var printFormat = function (title, param) {
    console.log('format(title, param) >>', (0, exports.format)(title, param));
};
exports.printFormat = printFormat;
// return Promise
// export const fetchData = (url: string): Promise<string> =>
// //in case of Promise type error, change tsconfig.json to '"target": "esnext"'
//   Promise.resolve(`Data from ${url}`);
// rest parameters
function introduce(salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    //add any argument after salutation as an array
    return "".concat(salutation, " ").concat(names.join(" "));
}
//typescript only runs at compile not on run time
function getName(user) {
    var _a, _b;
    // return `${user.first} ${user.last}`
    //is possible add conditionals in case no parameter or errors
    return "".concat((_a = user === null || user === void 0 ? void 0 : user.first) !== null && _a !== void 0 ? _a : "first", " ").concat((_b = user === null || user === void 0 ? void 0 : user.last) !== null && _b !== void 0 ? _b : "last");
}
exports.getName = getName;
