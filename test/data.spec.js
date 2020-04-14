
import {
  sortMaxCp, sortByType, calStab, caldps, caleps,
} from '../src/data.js';

const testDataEjm = [
  {
    num: 1,
    name: 'bulbasaur',
    stats: { 'base-stamina': 128, 'max-cp': 1115, 'max-hp': 113 },
    type: ['grass', 'poison'],
    generation: { name: 'kanto', num: 'generation i' },
  },
  {
    num: 5,
    name: 'charmeleon',
    stats: { 'base-stamina': 151, 'max-cp': 1653, 'max-hp': 131 },
    type: ['fire'],
    generation: { name: 'kanto', num: 'generation i' },
  },
  {
    num: 10,
    name: 'caterpie',
    stats: { 'base-stamina': 128, 'max-cp': 437, 'max-hp': 113 },
    type: ['bug'],
    generation: { name: 'kanto', num: 'generation i' },
  },
];

const tesToBeFromLtoH = [
  {
    num: 10,
    name: 'caterpie',
    stats: { 'base-stamina': 128, 'max-cp': 437, 'max-hp': 113 },
    type: ['bug'],
    generation: { name: 'kanto', num: 'generation i' },
  },
  {
    num: 1,
    name: 'bulbasaur',
    stats: { 'base-stamina': 128, 'max-cp': 1115, 'max-hp': 113 },
    type: ['grass', 'poison'],
    generation: { name: 'kanto', num: 'generation i' },
  },
  {
    num: 5,
    name: 'charmeleon',
    stats: { 'base-stamina': 151, 'max-cp': 1653, 'max-hp': 131 },
    type: ['fire'],
    generation: { name: 'kanto', num: 'generation i' },
  },
];

const testToBeFromHtoL = [
  {
    num: 5,
    name: 'charmeleon',
    stats: { 'base-stamina': 151, 'max-cp': 1653, 'max-hp': 131 },
    type: ['fire'],
    generation: { name: 'kanto', num: 'generation i' },
  },
  {
    num: 1,
    name: 'bulbasaur',
    stats: { 'base-stamina': 128, 'max-cp': 1115, 'max-hp': 113 },
    type: ['grass', 'poison'],
    generation: { name: 'kanto', num: 'generation i' },
  },
  {
    num: 10,
    name: 'caterpie',
    stats: { 'base-stamina': 128, 'max-cp': 437, 'max-hp': 113 },
    type: ['bug'],
    generation: { name: 'kanto', num: 'generation i' },
  },
];

const testoBeSortByType = [
  {
    num: 5,
    name: 'charmeleon',
    stats: { 'base-stamina': 151, 'max-cp': 1653, 'max-hp': 131 },
    type: ['fire'],
    generation: { name: 'kanto', num: 'generation i' },
  },
];


describe('sortMaxCp', () => {
  it('is a function', () => {
    expect(typeof sortMaxCp).toBe('function');
  });

  it('Debe retornar los pokemones ordenados de forma descendente por MAX-CP', () => {
    expect(sortMaxCp(testDataEjm, 'From high to low')).toEqual(testToBeFromHtoL);
  });

  it('Debe retornar los pokemones ordenados de forma ascendente por MAX-CP', () => {
    expect(sortMaxCp(testDataEjm, 'From low to hight')).toEqual(tesToBeFromLtoH);
  });
});

describe('sortByType', () => {
  it('is a function', () => {
    expect(typeof sortByType).toBe('function');
  });

  it('Debe retornar los tipo de pokemon fire', () => {
    expect(sortByType(testDataEjm, 'fire')).toEqual(testoBeSortByType);
  });
});

// dato special attack pokemon numero 5

/* const testDataArray = [
  {
    type: 'fire',
    'base-damage': 55,
    energy: -33,
    'move-duration-seg': 2.2,
  },
  {
    type: 'fire',
    'base-damage': 70,
    energy: -50,
    'move-duration-seg': 2.6,
  },
  {
    type: 'fire',
    'base-damage': 70,
    energy: -50,
    'move-duration-seg': 2.2,
  },
];
const typePoke = ['fire']
*/

describe('CalSTAB', () => {
  it('is a function', () => {
    expect(typeof calStab).toBe('function');
  });

  it('Debe retornar 66 de STAB para tipo fire', () => {
    expect(calStab('fire', 'fire', 55)).toEqual(66);
  });

  it('Debe retornar 55 de STAB para tipo fire', () => {
    expect(calStab('fire', 'gras', 55)).toEqual(55);
  });
});
describe('CalDPS', () => {
  it('is a function', () => {
    expect(typeof caldps).toBe('function');
  });
  it('debe retornar 1650 al calcular DPS', () => {
    expect(caldps(55, 66, 2.2)).toEqual(1650);
  });
});
describe('CalEPS', () => {
  it('is a function', () => {
    expect(typeof caleps).toBe('function');
  });
  it('debe retornar -15 al calcular EPS', () => {
    expect(caleps(-33, 2.2)).toEqual(-15);
  });
});
