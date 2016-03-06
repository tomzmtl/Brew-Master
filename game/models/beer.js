const prototype = {
  type: null,
  color: null,
  strength: null,
  ibu: null,
};

const factory = (type, color, strength, ibu) => {
  return Object.assign({}, prototype, {
    type,
    color,
    strength,
    ibu,
  });
};

export default factory;
