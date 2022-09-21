// cap18 Conditional Types
//// https://youtu.be/jdzLpEnRAqg

//"type": "module" in package.json
//"module": "es6" in tsconfig.json 
//run command npx ts-node-esm cap18_conditional-types.ts

import fetch from "node-fetch"

interface PokemonResults {
  count: number;
  next?: string;
  previous?: string;
  results: {
    name: string;
    url: string;
  }[];
}
  

function fetchPokemon(url: string, cb: (data: PokemonResults) => void): void;
function fetchPokemon(url: string): Promise<PokemonResults>;
function fetchPokemon(
  url: string,
  cb?: (data: PokemonResults) => void
): unknown {
  if (cb) {
    fetch(url)
      .then((resp) => resp.json())
      .then(cb)
      .catch(error => console.log(error));
    return undefined;
  } else {
    return fetch(url).then(resp => resp.json());
  }
}



// fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=10", (data) => {
//   data.results.forEach(({ name }) => console.log(name));
// });

(async function () {
  const data = <PokemonResults>(
    await fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=10")
  );
  data.results.forEach(({ name }) => console.log(name));
})();