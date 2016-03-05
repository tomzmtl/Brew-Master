import * as ActionTypes from '../constants/actionTypes';
import * as gameConstants from '../constants/gameConstants';

const reducer = (state = {}, action) => {
  const { facility } = state;

  switch (action.type) {

    case ActionTypes.INCREMENT_TICK:
      return Object.assign({}, state, { tick: state.tick + 1 });

    case ActionTypes.STORE_BEER:
      if (facility.storage >= gameConstants.STORAGE_LIMIT) {
        return state;
      }
      return Object.assign({}, state, { facility: { storage: facility.storage + 1 } });

    case ActionTypes.SELL_BEER:
      return Object.assign({}, state, {
        facility: { storage: 0 },
        wallet: state.wallet + (action.quantity * gameConstants.BEER_PRICE),
      });

    default:
      return state;
  }
};

export default reducer;
