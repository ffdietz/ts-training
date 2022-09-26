// cap04 FUNCTION OVERLOADING
//// https://youtu.be/XnyZXNnWAOA

interface Coordinate {
  x: number,
  y: number,
};

//overloading function
function parseCoordinate(obj: string): Coordinate;
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {   //unknown works as a 'secure' type 
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };

  if (typeof arg1 === 'string') {
    (arg1 as string).split(',').forEach((str) => {
      const [key, value] = str.split(':');
      coord[key as 'x' | 'y'] = parseInt(value, 10);
    });
  } else if (typeof arg1 === 'object') {
    coord = { ...(arg1 as Coordinate) };
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coord
}

console.log('parseCoordinate(10, 20) >> ', parseCoordinate(10, 20));
console.log('parseCoordinate({ x: 12, y: 38}) >> ', parseCoordinate({ x: 12, y: 38 }));
console.log('parseCoordinate("x:45,y:79") >> ', parseCoordinate("x:45,y:79"));