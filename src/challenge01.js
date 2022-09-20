"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var challenge01__houses_1 = __importDefault(require("./challenge01_ houses"));
//Implementation
function findHouses(input, filter) {
    var houses = typeof input === 'string' ? JSON.parse(input) : input;
    return (filter ? houses.filter(filter) : houses)
        .map(function (house) { return (__assign({ id: houses.indexOf(house) }, house)); });
}
console.log(findHouses(JSON.stringify(challenge01__houses_1.default), function (_a) {
    var name = _a.name;
    return name === "Atreides";
}));
console.log(findHouses(challenge01__houses_1.default, function (_a) {
    var name = _a.name;
    return name === "Harkonnen";
}));
