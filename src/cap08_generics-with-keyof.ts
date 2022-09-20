// cap08 Generics with keyof
//// https://youtu.be/4XTj6sIGTdc

// takes the object keys as a type
function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][]{
  return items.map((item) => item[key])
}

const cats = [
  { name: 'Tapioca', age: 2 },
  { name: 'Roñita', age: 1 },
];

console.log('pluck(cats, "age")', pluck(cats, "age"));
console.log('pluck(cats, "name")', pluck(cats, "name"));



interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productID: string },
  checkout: BaseEvent
}

function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void {
  console.log('[name, data]', [name, data])
}

sendEvent("addToCart", {
  productID: "foo",
  user: "bar",
  quantity: 1,
  time: 10,
});

sendEvent("checkout", { time: 20, user: "bob" });