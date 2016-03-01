import * as ActionTypes from '../constants/constants';

const addTick = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT_TICK :
      return Object.assign({}, state, { tick: state.tick + 1 });
    default:
      return state;
  }
};

export default addTick;
