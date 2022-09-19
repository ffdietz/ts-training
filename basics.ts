// https://youtu.be/LKVHFHJsiO0
// Typescript Setup & Everyday Types

let userName: string  = "Felipe";
let loggedIn: boolean = true;

// Type error adding string to boolean
  // loggedIn += " Fierro";
  // console.log('loggedIn:', loggedIn);
  // // error TS2322: Type 'string' is not assignable to type 'boolean'.

let myNumber: number = 10;
let myRegex: RegExp = /foo/;

// Array types
const names: string[] = userName.split(" ");
let myValues: Array<number> = [1, 2, 3]
// add string in a number array gives error
// myValues = [1, 2, 3, "error"]

// Objects
const myPerson: {
  first: string;
  last: string;
} = {
  first: 'Felipe',
  last: 'Fierro'
  // add a not declare type variable gives error
  // cool: true
}

//Interface
interface Person {
  first: string,
  last: string
}

const myInterfacedPerson: Person = {
  first: 'Felipe',
  last : 'Fierro'
}

// Maps
// Record lets work with key types and value types
const ids: Record<number, string> = {
  10: 'a',
  20: 'b',
};
ids[30] = 'c';
if (ids[30] === 'D') { }

for (let i: number = 0; i < 10; i++){
  console.log('i: ', i);
}

[1, 2, 3].forEach((v) => console.log('v: ', v));
// defining a number array doesn't allow add string elements
const out: number[] = [4, 5, 6].map((v) => v * 10);
// const out: number = [4, 5, 6].map((v) => `${v * 10}`);
