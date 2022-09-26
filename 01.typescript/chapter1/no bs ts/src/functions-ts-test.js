"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var cap02__functions_1 = __importStar(require("./cap02_ functions"));
/* to run
 npx ts-node functions-ts-test.ts
*/
console.log('addNumbers(1, 2) >> ', (0, cap02__functions_1.default)(1, 2)); // addNumbers(1, 2) >> 3
// console.log('addNumbers(1, "jack")>>', addNumbers(1, 'jack'));
// error TS7006: Parameter 'b' implicitly has an 'any' type.
console.log('getName({first , last}) >> ', (0, cap02__functions_1.getName)({ first: 'Felipe', last: 'Fierro' }));
//getName({ first, last })>> Felipe Fierro
