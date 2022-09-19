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

