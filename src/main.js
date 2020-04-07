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

const crearModalTexto = (msj)=>{
  const f = document.createElement('div');
  const m = document.createElement('div');
  const t = document.createTextNode(msj);
  f.appendChild(m);
  m.appendChild(t);
  f.className = 'contenedor';
  m.className = 'modal';

  const cerrar = document.createElement('div');
  const x = document.createTextNode('X');
  cerrar.appendChild(x);
  cerrar.className = 'cerrar' ;
  cerrar.addEventListener('click', () => {
    f.style.visibility = 'hidden';
  });
  m.appendChild(cerrar);
  document.body.appendChild(f);
  return f;
};

const mostrarModal = (obj) => {
  obj.style.visibility = 'visibility';
};

const btnModal=document.getElementById('btn');
btnModal.addEventListener('click', () => {
  const mimodal = crearModalTexto('Mi modal de ejemplo y mi texto');
  mostrarModal(mimodal);
});