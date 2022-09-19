// cap06 Tuple
//// https://youtu.be/5q0VtzJjvNc

//Tuples are kind of group/nested types. always arrays
type ThreeDCoordinate = [x: number, y: number, z: number];

function add3DCoordinate(
  c1: ThreeDCoordinate,
  c2: ThreeDCoordinate
): ThreeDCoordinate {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}

console.log('add3DCoordinate() >> ', add3DCoordinate([2, 4, 6], [3, 2, 1]));


// a regular tuple is useState
function simpleStringState(initial: string): [() => string, (v: string) => void]{
  let str: string = initial;
  return [
    () => str,
    (v: string) => {
      str = v;
    }
  ]
}

const [str1getter, str1setter] = simpleStringState("hello");
const [str2getter, str2setter] = simpleStringState("felipe");
console.log('str1getter()', str1getter());
console.log('str2getter()', str2getter());
str1setter("goodbye");
console.log('str1getter()', str1getter());
console.log('str2getter()', str2getter());