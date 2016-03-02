import * as ActionTypes from '../constants/constants';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT_TICK :
      return Object.assign({}, state, { tick: state.tick + 1 });
    default:
      return state;
  }
};

export default reducer;
