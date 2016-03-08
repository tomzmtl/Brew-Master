import * as GAME from '../../constants/gameConstants';

const sellBeer = (state) => {
  return {
    facility: { storage: [] },
    wallet: state.wallet + (state.facility.storage.length * GAME.BEER_PRICE),
  };
};

export default sellBeer;
