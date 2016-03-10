import * as ACTIONS from '../constants/actionTypes';
import * as MODALS from '../constants/modals';
import * as GAME from '../constants/gameConstants';
import marketplaceItems from './helpers/marketplaceItems';

const reducer = (state = {}, action) => {
  switch (action.type) {

    case ACTIONS.OPEN_MARKETPLACE_MODAL:
      const newState = { modal: MODALS.MARKETPLACE };

      if (state.marketplace.items === null) {
        newState.marketplace = {
          items: marketplaceItems(GAME.MARKETPLACE_ITEMS_LIMIT),
        };
      }
      return Object.assign({}, state, newState);

    default:
      return state;
  }
};

export default reducer;
