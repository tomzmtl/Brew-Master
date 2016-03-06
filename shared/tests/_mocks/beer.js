import beer from '../../../game/models/beer';

const mockBeer = () => {
  return Object.assign({}, beer('Pale Ale', 'CCFF00', 5, 40));
};

const mockBeerSet = (count) => {
  const set = [];
  for (let i = 0; i < count; i++) {
    set.push(mockBeer());
  }
  return set;
};

export {
  mockBeer,
  mockBeerSet,
};
