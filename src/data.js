export const calStab = (found, attackQM, baseDamage) => {
  if (found === attackQM) {
    return baseDamage * 1.2;
  }
  return baseDamage * 1.0;
};

export const caldps = (baseDamage, stabQM, timeMove) => {
  const dps = ((baseDamage * stabQM) / timeMove).toFixed();
  return dps * 1.0;
};

export const caleps = (energy, timeMove) => {
  const eps = (energy / timeMove).toFixed();
  return eps * 1.0;
};

export const sortByType = (array, type) => {
  const pokeByType = array.filter(item => item.type.includes(type));
  return pokeByType;
};

export const sortMaxCp = ((array, condition) => {
  let result;
  if (condition === 'From high to low') {
    result = array.sort((a, b) => (b.stats['max-cp'] - a.stats['max-cp']));
  } else {
    result = array.sort((a, b) => (a.stats['max-cp'] - b.stats['max-cp']));
  }
  return result;
});

/* export const caleps = (attackType) => {
  const eps = attackType.map(item => item.energy / item['move-duration-seg']);
  return eps;
}; */
