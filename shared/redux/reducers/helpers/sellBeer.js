import * as GAME from '../../constants/gameConstants';

const sellBeer = (state) => {
  return {
    facility: { storage: 0 },
    wallet: state.wallet + (state.facility.storage * GAME.BEER_PRICE),
  };
};

export default sellBeer;
