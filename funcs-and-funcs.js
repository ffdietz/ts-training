"use strict";
exports.__esModule = true;
exports.createAdder = exports.newArrayMutate = exports.arrayMutate = exports.printToFile = void 0;
//functions that takes functions as a parameter and return void
function printToFile(text, callback) {
    console.log('text', text);
    callback();
}
exports.printToFile = printToFile;
//function takes function as parameter and return value
function arrayMutate(numbers, mutate) {
    return numbers.map(mutate);
}
exports.arrayMutate = arrayMutate;
function newArrayMutate(numbers, mutate) {
    return numbers.map(mutate);
}
exports.newArrayMutate = newArrayMutate;
//returning functions
function createAdder(num) {
    return function (val) { return num + val; };
}
exports.createAdder = createAdder;
