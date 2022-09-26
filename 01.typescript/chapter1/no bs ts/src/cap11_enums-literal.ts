//cap11 Enums and Literal Types
//// https://youtu.be/VrfJeXj7TiQ

enum LoadingState{
  beforeLoad = "beforeLoad",
  loading = "loading",
  loaded = "loaded",
}

const isLoading = (state: LoadingState) => state === LoadingState.loading;

console.log('isLoading()', isLoading(LoadingState.beforeLoad));

//Literal types
function rollDice(dice:  1 | 2 | 3): number{
  let pip = 0;
  for (let i = 0; i < dice; i++){
    pip += Math.floor(Math.random() * 5) + 1;
  }
  return pip
}

// console.log('rollDice()', rollDice(4)) // not allow because type just accept to 1 2 or 3
console.log('rollDice()', rollDice(3));


// Overloading a function with literal types
function sendthisEvent(name: "addToCart", data: {productId: number}): void;
function sendthisEvent(name: "checkout", data: {cartCount: number}): void;
function sendthisEvent(name: string, data: unknown): void{
  console.log(`${name}: ${JSON.stringify(data)}`)
}

sendthisEvent("addToCart", { productId: 12345 }); // 'addToCart' parameter type only accept 'productId' type