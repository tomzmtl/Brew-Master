import { assign } from 'lodash';

function hops(quantity, bitterness) {
  return assign({}, {
    quantity,
    bitterness,
  });
}

export default hops;
