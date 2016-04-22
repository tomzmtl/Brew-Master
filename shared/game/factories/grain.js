import { assign } from 'lodash';

function grain(type, roast, sugar) {
  return assign({}, {
    type,
    roast,
    sugar,
  });
}

export default grain;
