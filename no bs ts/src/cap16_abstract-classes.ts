// cap16 Abstract Classes
//// https://youtu.be/iFEOdoHp19U

// 'abstract' class works as a template. each child will have same fields and
// every 'abstract' member will be declare
abstract class StreetFighter {
  constructor() { }
  move() {}
  fight() {
    console.log(`${this.name} attack with ${this.getSpecialAttack()}`)
  }
  
  abstract getSpecialAttack(): string;
  abstract get name(): string;
}

//to call it we need to define class as an 'extends'
class Ryu extends StreetFighter{
  getSpecialAttack(): string {
    return "Hadoken"
  }
  get name(): string {
   return "Ryu" 
  }
}

class ChunLi extends StreetFighter {
  getSpecialAttack(): string {
    return "Lightning Kick"
  }
  get name(): string {
    return "Chun-Li"
  }
}

const ryu = new Ryu();
const chunli = new ChunLi();
ryu.fight();
chunli.fight();

