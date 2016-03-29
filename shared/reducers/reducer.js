import * as ACTIONS from '../constants/actionTypes';
import * as GAME from '../constants/game';
import * as MODALS from '../constants/modals';
import { pullAt, assign } from 'lodash';
import Utils from './utils';
import debugReducer from './debug';

const reducer = (state = {}, action) => {

  // shorcuts
  const { facility } = state;

  function createNewState(extend = {}) {
    return assign({}, state, extend);
  }

  function incrementTick() {
    let update = { tick: state.tick + 1 };
    if (update.tick % GAME.SALE_INTERVAL === 0) {
      update = assign(update, Utils.sellBeer(state));
    }
    return createNewState(update);
  }

  function storeBeer() {
    if (facility.storage.length >= GAME.STORAGE_LIMIT) {
      return state;
    }
    return createNewState({
      facility: {
        storage: [...facility.storage, action.beer],
      },
    });
  }

/*
  function addInventoryItem() {
    if (inventory.items.length >= GAME.INVENTORY_LIMIT) {
      return state;
    }
    return createNewState({
      inventory: {
        items: [...inventory.items, action.item],
      },
    });
  }
*/

  function openMarketPlaceModal() {
    const newState = { modal: MODALS.MARKETPLACE };

    if (state.marketplace.items === null) {
      newState.marketplace = { items: Utils.populateMarketplace(state) };
    }
    return createNewState(newState);
  }

  function buyMarketPlaceItem() {
    if (state.inventory.items.length === GAME.INVENTORY_LIMIT) {
      return state;
    }
    const items = state.marketplace.items.slice();
    const item = pullAt(items, action.item)[0];
    if (state.wallet < item.price) {
      return state;
    }
    return createNewState({
      wallet: state.wallet - item.price,
      inventory: {
        items: [...state.inventory.items, item],
      },
      marketplace: {
        items,
      },
    });
  }


  /* Action switcher
  ---------------------------------- */

  switch (action.type) {

    case ACTIONS.INCREMENT_TICK:
      return incrementTick();

    case ACTIONS.STORE_BEER:
      return storeBeer();

    case ACTIONS.SELL_BEER:
      return createNewState(Utils.sellBeer(state));

    // case ACTIONS.ADD_INVENTORY_ITEM:
    //  return addInventoryItem();

    case ACTIONS.OPEN_MARKETPLACE_MODAL:
      return openMarketPlaceModal();

    case ACTIONS.BUY_MARKETPLACE_ITEM:
      return buyMarketPlaceItem();

    case ACTIONS.CLOSE_MODAL:
      return createNewState({ modal: null });

    default: break;
  }

  const newState = debugReducer(state, action);

  if (newState) {
    return newState;
  }

  return state;
};

export default reducer;
