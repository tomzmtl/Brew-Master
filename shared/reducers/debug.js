import * as ACTIONS from '../constants/debugActionTypes';
import { assign } from 'lodash';
import Utils from './utils';

const reducer = (state = {}, action) => {

  function createNewState(extend = {}) {
    return assign({}, state, extend);
  }

  /* Action switcher
  ---------------------------------- */

  switch (action.type) {

    case ACTIONS.ADD_MONEY:
      return createNewState({
        wallet: state.wallet + action.amount,
      });

    case ACTIONS.FILL_MARKETPLACE:
      return createNewState({
        marketplace: {
          items: Utils.populateMarketplace(state),
        },
      });

    default: break;
  }

  return null;
};

export default reducer;
