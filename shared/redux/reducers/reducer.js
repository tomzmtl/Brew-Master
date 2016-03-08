import * as ACTIONS from '../constants/actionTypes';
import * as GAME from '../constants/gameConstants';
import sellBeer from './helpers/sellBeer';

const reducer = (state = {}, action) => {
  const { facility, inventory } = state;

  switch (action.type) {

    case ACTIONS.INCREMENT_TICK:
      let update = { tick: state.tick + 1 };

      if (update.tick % GAME.SALE_INTERVAL === 0) {
        update = Object.assign(update, sellBeer(state));
      }

      return Object.assign({}, state, update);

    case ACTIONS.STORE_BEER:
      if (facility.storage.length >= GAME.STORAGE_LIMIT) {
        return state;
      }
      return Object.assign({}, state, {
        facility: {
          storage: [...facility.storage, action.beer],
        },
      });

    case ACTIONS.SELL_BEER:
      return Object.assign({}, state, sellBeer(state));

    case ACTIONS.ADD_INVENTORY_ITEM:
      if (inventory.items.length >= GAME.INVENTORY_LIMIT) {
        return state;
      }
      return Object.assign({}, state, {
        inventory: {
          items: [...inventory.items, action.item],
        },
      });

    default:
      return state;
  }
};

export default reducer;
