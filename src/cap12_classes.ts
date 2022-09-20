// cap12 CLASSES
//// https://youtu.be/PbswZshAKF8


// Similar as struct in C++, first declare then implements
interface Database {
  get(id: string): string;
  set(id: string, value: string): void; 
}

// Read and write states from a string
interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

// public by default, declare private or protected if needs
class InMemoryDatabase implements Database {  
  protected db: Record<string, string> = {};

  get(id: string): string{
    return this.db[id]
  }

  set(id: string, value: string): void{
    this.db[id] = value;
  }
}

// declare a new object and then define
const myDB = new InMemoryDatabase();
myDB.set("foo", "bar");
console.log('myDB.get("foo") >> ', myDB.get("foo"));

 // Create a new class extended from InMemoryDatabase but with Persistable features
class PersistMemoryDB extends InMemoryDatabase implements Persistable {
  saveToString(): string{
    return JSON.stringify(this.db);
  }

  restoreFromString(storedState: string): void{
    this.db = JSON.parse(storedState);
  }
}
 
const myPersistDB = new PersistMemoryDB();
// InMemoryDatabase class function called from PersistMemoryDB class object
myPersistDB.set("foo", "bar");
console.log('myPersistDB.get("foo") >> ', myPersistDB.get("foo"));
// Persistable interfaces function called from PersistMemoryDB
const saved = myPersistDB.saveToString();

const myPersistDB2 = new PersistMemoryDB();
myPersistDB2.restoreFromString(saved);
console.log('myPersistDB2.get("foo") >> ', myPersistDB2.get("foo"));