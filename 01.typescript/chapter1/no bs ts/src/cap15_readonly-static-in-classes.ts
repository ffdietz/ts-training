// cap15 Readonly and Static in Classes
//// https://youtu.be/nkpPOVUHT1k

class Doggy {
  constructor(public readonly name: string, public age: number) { }
}

const charly = new Doggy("Charles3rd", 35);
// charly.name = "3rd";  // not allow by readonly defined in constructor
console.log('charly.name >> ', charly.name);

class DogList {
  private doggies: Doggy[] = [];
  
  static instance: DogList = new DogList();

  private constructor(){}

  static addDog(dog: Doggy) {
    DogList.instance.doggies.push(dog);
  }

  getDogs() {
    return this.doggies;
  }
}

DogList.addDog(charly);
console.log('DogList.instance.getDogs() >> ', DogList.instance.getDogs());