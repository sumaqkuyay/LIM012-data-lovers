// import data from './data/atletas/atletas.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
import { calStab, caldps, caleps, sortByType, sortMaxCp } from './data.js';

const pokemonListing = data.pokemon;


const toShow = ((pokeList) => {
  let output = '';
  pokeList.forEach((pokemon) => {
    let type = '';
    pokemon.type.forEach((tipo) => {
      type += `<div class="${tipo}">${tipo}</div>`;
    });

    let dataQMove='';
    pokemon['quick-move'].forEach((ataque) => {
      dataQMove += `"${ataque.name}"tipo:"${ataque.type}" base:"${ataque['base-damage']}"  `;
      const found = pokemon.type.find(element => element === ataque.type);

      const stabQM = calStab(found, ataque.type, ataque['base-damage']);
      const dpsQM = caldps(ataque['base-damage'], stabQM, ataque['move-duration-seg']);
      const epsQM = caleps(ataque.energy, ataque['move-duration-seg']);
    });

    let dataEAttack='';
    pokemon['special-attack'].forEach((ataque) => {
      const found = pokemon.type.find(element => element === ataque.type);

      const stabEA = calStab(found, ataque.type, ataque['base-damage']);
      const dpsEA = caldps(ataque['base-damage'], stabEA, ataque['move-duration-seg']);
      const epsEA = caleps(ataque.energy, ataque['move-duration-seg']);
      dataEAttack += `"${ataque.name}"tipo:"${ataque.type}" base:"${ataque['base-damage']}" ${stabEA} ${dpsEA} ${epsEA} `;
  
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
          </div>
          <div class="backSide" hidden>
         ${dataEAttack}
          </div>
      </div>
    </div>
    `;
    output += dataPoke;
  });
  document.getElementById('dataGHTML').innerHTML = output;
});

toShow(pokemonListing);

const listType = document.querySelectorAll('#typePoke > ul > .menutype');

listType.forEach((item) => {
  item.addEventListener('click', () => {
    toShow(sortByType(pokemonListing, item.innerHTML));
  });
});

const listMaxCp = document.querySelectorAll('#maxcp > ul > .orderbtn');
listMaxCp.forEach((item) => {
  item.addEventListener('click', () => {
    toShow(sortMaxCp(pokemonListing, item.innerHTML));
  });
});
