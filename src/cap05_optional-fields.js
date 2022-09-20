"use strict";
function printIngredient(quantity, ingredient, extra) {
    console.log('printIngredient() >> ', "".concat(quantity, " ").concat(ingredient, " ").concat(extra ? "".concat(extra) : ""));
}
function getEmail(user) {
    if (user.info) {
        // add '!' to be aware the function will not return "" / (null)
        return user.info.email;
    }
    return "";
}
function getEmailEasy(user) {
    var _a, _b;
    return (_b = (_a = user === null || user === void 0 ? void 0 : user.info) === null || _a === void 0 ? void 0 : _a.email) !== null && _b !== void 0 ? _b : "";
}
function addWithCallback(x, y, callback) {
    console.log('[x, y]', [x, y]);
    callback === null || callback === void 0 ? void 0 : callback();
}
