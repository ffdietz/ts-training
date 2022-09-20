// cap17 Mixins
////https://youtu.be/Kn8TKLcd6d4

function myLogFunction() {
  return (str: string) => {
    console.log(str)
  }
}

const logger = myLogFunction();
logger("test");

function createLoggerClass() {
  return class MyLogger{
    private completeLog: string = "";
    log(str: string) {
      console.log(str);
      this.completeLog += str + "\n";
    }
    dumpLog() {
      return this.completeLog
    }
  }
}

const MyLogger = createLoggerClass();
const logger2 = new MyLogger();
logger2.log("Foo");
console.log(logger2.dumpLog());

function CreateSimpleMemoryDatabase<T>() {
  return class CreateSimpleMemoryDatabase{
    private db: Record<string, T> = {};
    set(id: string, value: T) {
      this.db[id] = value;
    }
    get(id: string): T {
      return this.db[id]
    }
    getObject(): object {
      return this.db
    }
  }
}

const StringDatabase = CreateSimpleMemoryDatabase<string>();
const sbd1 = new StringDatabase();
sbd1.set("a", "hello");

//the argument could be anything but return the object that created
type Constructor<T> = new (...args: any[]) => T;

function Dumpable<
  //Type T extends to Constructor
  T extends Constructor<{
  // Constructor creates an object and must get object
  getObject(): object;
  }>
  //function Dumplable receive Base:T as a parameter
>(Base: T) {
  return class Dumpable extends Base {
    dump() {
      console.log(this.getObject());
    }
  };
}

const DumplabletringDatabase = Dumpable(StringDatabase);
const sbd2 = new DumplabletringDatabase();
sbd2.set("kuko", "hola kukito");
sbd2.dump();