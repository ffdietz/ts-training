import { arrayMutate, createAdder, newArrayMutate } from "./funcs-and-funcs";
import addNumbers, { getName } from "./functions";

/* to run
 npx ts-node functions-ts-test.ts
*/

console.log('addNumbers(1, 2) >> ', addNumbers(1, 2)); // addNumbers(1, 2) >> 3
// console.log('addNumbers(1, "jack")>>', addNumbers(1, 'jack'));
// error TS7006: Parameter 'b' implicitly has an 'any' type.


console.log('getName({first , last}) >> ', getName({ first: 'Felipe', last: 'Fierro' }));
//getName({ first, last })>> Felipe Fierro


console.log('arrayMutate([1, 2, 3]) >> ', arrayMutate([1, 2, 3], function (v) { return v * 10; }));

console.log('newArrayMutate([1, 2, 3]) >> ', newArrayMutate([1, 2, 3], (v) => v * 100));

const addOne = createAdder(1);
console.log('addOne(55) >> ', addOne(55));