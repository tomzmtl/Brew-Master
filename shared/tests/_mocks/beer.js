import beer from '../../game/factories/beer';
import { random } from 'lodash';

const types = [
  ['Pale Ale', 'yellow', 5, 30],
  ['IPA', 'orange', 5, 70],
  ['Stout', 'black', 5, 35],
  ['Amber Ale', 'red', 5, 45],
  ['White Beer', 'white', 5, 15],
];

const mockBeer = () => {
  return Object.assign({}, beer(...types[0]));
};

const randomBeer = () => {
  const args = types[random(types.length - 1)];
  return Object.assign({}, beer(...args));
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
  randomBeer,
  mockBeerSet,
};
