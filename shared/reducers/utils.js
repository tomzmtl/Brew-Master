import * as GAME from '../constants/gameConstants';

export default {

  sellBeer(state) {
    return {
      facility: { storage: [] },
      wallet: state.wallet + (state.facility.storage.length * GAME.BEER_PRICE),
    };
  },
};
