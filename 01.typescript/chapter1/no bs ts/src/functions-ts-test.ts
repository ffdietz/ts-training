import { arrayMutate, createAdder, newArrayMutate } from "./cap03_ funcs-and-funcs";
import addNumbers, { getName } from "./cap02_ functions";

/* to run
 npx ts-node functions-ts-test.ts
*/

console.log('addNumbers(1, 2) >> ', addNumbers(1, 2)); // addNumbers(1, 2) >> 3
// console.log('addNumbers(1, "jack")>>', addNumbers(1, 'jack'));
// error TS7006: Parameter 'b' implicitly has an 'any' type.


console.log('getName({first , last}) >> ', getName({ first: 'Felipe', last: 'Fierro' }));
//getName({ first, last })>> Felipe Fierro