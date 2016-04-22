import * as GAME from '../constants/game';
import marketplaceItems from '../game/factories/marketplaceItems';

export default {

  sellBeer(state) {
    return {
      facility: { storage: [] },
      wallet: state.wallet + (state.facility.storage.length * GAME.BEER.PRICE),
    };
  },

  populateMarketplace(state) {
    let fill;
    const isInitial = state.marketplace.items === null;
    if (isInitial) {
      fill = GAME.MARKETPLACE_ITEMS_LIMIT;
    } else {
      fill = GAME.MARKETPLACE_ITEMS_LIMIT - state.marketplace.items.length;
    }
    const items = marketplaceItems(fill);

    if (isInitial) {
      return items;
    }

    return [...state.marketplace.items, ...items];
  },
};
