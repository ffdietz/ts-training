// cap03 FUNCTIONS WITH FUNCTIONS
//// https://youtu.be/XnyZXNnWAOA

//functions that takes functions as a parameter and return void
export function printToFile(text: string, callback: () => void): void {
  console.log('text', text);
  callback();
}

//function takes function as parameter and return value
export function arrayMutate(
  numbers: number[],
  mutate: (v: number) => number
): number[] {
  return numbers.map(mutate)
}

//to perform the readability, create type function
export type MutationFunction = (v: number) => number;
export function newArrayMutate(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate)
}

//returning functions
export function createAdder(num: number) {
  return (val: number) => num + val
}


console.log(
  'arrayMutate([1, 2, 3]) >> ',
  arrayMutate([1, 2, 3], function (v) { return v * 10; })
);

console.log(
  'newArrayMutate([1, 2, 3]) >> ',
  newArrayMutate([1, 2, 3], (v) => v * 100)
);

const addOne = createAdder(1);
console.log('addOne(55) >> ', addOne(55));