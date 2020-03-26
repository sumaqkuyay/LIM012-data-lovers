// import data from './data/atletas/atletas.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';


let output = '';

data.pokemon.forEach((pokemon) => {
  let type = '';
  pokemon.type.forEach((tipo) => {
    type += `<div>${tipo}</div>`;
  });
  const dataPoke = `
  <div class="dataGeneral" >
    <div class="card">
        <div class="frontSide">
            <div id="pokemonCard" class="pokemonCard">
                <div id="number" class="number">${pokemon.num}</div>
                <img src=${pokemon.img} class="imgPokemon">
                <p id="pokeName" class="pokeName">${pokemon.name.slice(0, 1).toUpperCase()}${pokemon.name.slice(1)}</p>
                <div class="maxCp"> Max - cp : ${pokemon.stats['max-cp']} </div>
                <div class="types"> ${type}</div>
            </div>
            <div class="backSide"></div>
        </div>
    </div>
  </div>
  `;
  output += dataPoke;
});

document.getElementById('dataGHTML').innerHTML = output;
