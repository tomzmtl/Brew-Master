import * as ACTIONS from '../constants/actionTypes';
import * as GAME from '../constants/gameConstants';
import * as MODALS from '../constants/modals';
import sellBeer from './helpers/sellBeer';
import marketplaceItems from './helpers/marketplaceItems';
import { pullAt, assign } from 'lodash';

const reducer = (state = {}, action) => {
  const { facility, inventory } = state;

  switch (action.type) {

    case ACTIONS.INCREMENT_TICK:
      let update = { tick: state.tick + 1 };

      if (update.tick % GAME.SALE_INTERVAL === 0) {
        update = assign(update, sellBeer(state));
      }

      return assign({}, state, update);

    case ACTIONS.STORE_BEER:
      if (facility.storage.length >= GAME.STORAGE_LIMIT) {
        return state;
      }
      return assign({}, state, {
        facility: {
          storage: [...facility.storage, action.beer],
        },
      });

    case ACTIONS.SELL_BEER:
      return assign({}, state, sellBeer(state));

    case ACTIONS.ADD_INVENTORY_ITEM:
      if (inventory.items.length >= GAME.INVENTORY_LIMIT) {
        return state;
      }
      return assign({}, state, {
        inventory: {
          items: [...inventory.items, action.item],
        },
      });

    case ACTIONS.OPEN_MARKETPLACE_MODAL:
      const newState = { modal: MODALS.MARKETPLACE };

      if (state.marketplace.items === null) {
        newState.marketplace = {
          items: marketplaceItems(GAME.MARKETPLACE_ITEMS_LIMIT),
        };
      }
      return assign({}, state, newState);

    case ACTIONS.BUY_MARKETPLACE_ITEM:
      const items = state.marketplace.items.slice();
      const item = pullAt(items, action.item)[0];
      return assign({}, state, {
        wallet: state.wallet - item.price,
        inventory: {
          items: [...state.inventory.items, item],
        },
        marketplace: {
          items,
        },
      });

    case ACTIONS.CLOSE_MODAL:
      return assign({}, state, { modal: null });

    default:
      return state;
  }
};

export default reducer;
