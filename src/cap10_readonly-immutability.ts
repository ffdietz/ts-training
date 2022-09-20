// cap10 READONLY
////  https://youtu.be/b_p3yP57A9w

interface Cat {
  name: string;
  breed: string;
}

function makeCat(name: string, breed: string): Readonly<Cat> {
  return {
    name,
    breed
  }  
}

const usul = makeCat("Usul", "Tabby");
// usul.name = "Piter"; // not allow because Readonly<Type>

function makeCoordinate(
  x: number,
  y: number,
  z: number,
): readonly [number, number, number,]{
  return [x, y, z]
}

const c1 = makeCoordinate(10, 20, 30);
// c1[0] = 50;  // not allow because 'readonly'

const oneConst = [1, 2, 3];
oneConst[0] = 50;

const realConst = [1, 2, 3] as const;
// realConst[0] = 50; // not allow because 'as const'

