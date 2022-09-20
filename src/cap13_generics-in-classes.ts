// cap13 GENERICS IN CLASSES
//// https://youtu.be/_ZnNZWlyw7M

// Similar as struct in C++, first declare then implements
interface DatabaseGeneric<T, K> {
  get(id: K): T;
  set(id: K, value: T): void;
}

// Read and write states from a string
interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

type DBKeyType = string | number | symbol;

// public by default, declare private or protected if needs
class InMemoryDatabaseGeneric<T, K extends DBKeyType> implements DatabaseGeneric<T, K> {
  protected db: Record<K, T> = {} as Record<K, T>;

  get(id: K): T {
    return this.db[id]
  }

  set(id: K, value: T): void {
    this.db[id] = value;
  }
}

// declare a new object and then define
const myDBGeneric = new InMemoryDatabaseGeneric<number, string>();
myDBGeneric.set("foo", 5);
console.log('myDB.get("foo") >> ', myDBGeneric.get("foo"));

// Create a new class extended from InMemoryDatabase but with Persistable features
class PersistMemoryDBGeneric<T, K extends DBKeyType> extends InMemoryDatabaseGeneric<T, K> implements Persistable {
  saveToString(): string {
    return JSON.stringify(this.db);
  }

  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

const myPersistDBGeneric = new PersistMemoryDBGeneric<number, string>();
// InMemoryDatabase class function called from PersistMemoryDB class object
myPersistDBGeneric.set("foo", 22);
console.log('myPersistDBGeneric.get("foo") >> ', myPersistDBGeneric.get("foo"));
// Persistable interfaces function called from PersistMemoryDB
const savedGeneric = myPersistDBGeneric.saveToString();

const myPersistDB2Generic = new PersistMemoryDBGeneric<number, string>();
myPersistDB2Generic.restoreFromString(savedGeneric);
console.log('myPersistDB2Generic.get("foo") >> ', myPersistDB2Generic.get("foo"));