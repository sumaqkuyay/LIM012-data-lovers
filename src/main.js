// import data from './data/atletas/atletas.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
import {
  calStab, caldps, caleps, sortByType, sortMaxCp,
} from './data.js';

const pokemonListing = data.pokemon;
const listType = document.querySelectorAll('#typePoke > ul > .menutype');
const listMaxCp = document.querySelectorAll('#maxcp > ul > .orderbtn');

const toShow = ((pokeList) => {
  let output = '';
  pokeList.forEach((pokemon) => {
    let type = '';
    pokemon.type.forEach((tipo) => {
      type += `<div class="${tipo}">${tipo}</div>`;
    });

    let dataQMove = '';
    pokemon['quick-move'].forEach((ataque) => {
      const found = pokemon.type.find(element => element === ataque.type);

      const stabQM = calStab(found, ataque.type, ataque['base-damage']);
      const dpsQM = caldps(ataque['base-damage'], stabQM, ataque['move-duration-seg']);
      const epsQM = caleps(ataque.energy, ataque['move-duration-seg']);
      // const epsQM = caleps(pokemon['quick-move']);
      dataQMove += `</br>"Nombre ataque:"${ataque.name} </br>"STAB:"${stabQM} </br> "DPS:"${dpsQM}</br> "EPS:" ${epsQM} `;
    });

    let dataEAttack = '';
    pokemon['special-attack'].forEach((ataque) => {
      const found = pokemon.type.find(element => element === ataque.type);

      const stabEA = calStab(found, ataque.type, ataque['base-damage']);
      const dpsEA = caldps(ataque['base-damage'], stabEA, ataque['move-duration-seg']);
      // console.log(typeof (dspsEA));
      const epsEA = caleps(ataque.energy, ataque['move-duration-seg']);
      // const epsEA = caleps(pokemon['special-attack']);
      dataEAttack += `</br>"Nombre ataque:"${ataque.name} </br>"STAB:"${stabEA} </br> "DPS:"${dpsEA}</br> "EPS:" ${epsEA} `;
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
          <div class="backSide" hidden >
         ${dataEAttack}
         ${dataQMove}
          </div>
      </div>
    </div>
    `;
    output += dataPoke;
  });
  document.getElementById('dataGHTML').innerHTML = output;
});

listType.forEach((item) => {
  item.addEventListener('click', () => {
    toShow(sortByType(pokemonListing, item.innerHTML));
  });
});


listMaxCp.forEach((item) => {
  item.addEventListener('click', () => {
    toShow(sortMaxCp(pokemonListing, item.innerHTML));
  });
});

const crearModalTexto = (msj) => {
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
  cerrar.className = 'cerrar';
  cerrar.addEventListener('click', () => {
    f.style.visibility = 'hidden';
  });
  m.appendChild(cerrar);
  document.body.appendChild(f);
  return f;
};

const mostrarModal = (obj) => {
  // eslint-disable-next-line no-param-reassign
  obj.style.visibility = 'visibility';
};

const btnModal = document.getElementById('btn');
btnModal.addEventListener('click', () => {
  const mimodal = crearModalTexto('Mi modal de ejemplo y mi texto');
  mostrarModal(mimodal);
});

toShow(pokemonListing);
