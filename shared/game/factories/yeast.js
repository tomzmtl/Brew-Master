import { assign } from 'lodash';

function yeast(type) {
  return assign({}, {
    type,
  });
}

export default yeast;
