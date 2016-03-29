const prototype = {
  type: null,
  color: null,
  strength: null,
  ibu: null,
};

const brew = (type, color, strength, ibu) => {
  return Object.assign({}, prototype, {
    type,
    color,
    strength,
    ibu,
  });
};

const brewRandom = () => {

};

export default brew;
// export default { brew, brewRandom };
