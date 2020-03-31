// estas funciones son de ejemplo

export const example = () => 'example';

export const anotherExample = () => 'OMG';


export const calStab = (found, attackQM, baseDamage) => {
  if (found === attackQM) {
    return baseDamage * 1.2;
  }
  return baseDamage;
};

export const caldps = (baseDamage, stabQM, timeMove) => {

  const dps = (baseDamage * stabQM) / timeMove;
  return dps;
};

export const caleps = (energy, timeMove) => {
  const eps = energy / timeMove;
  return eps;
};
