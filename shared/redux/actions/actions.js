import * as ActionTypes from '../constants/actionTypes';
// import fetch from 'isomorphic-fetch';

// const baseURL = typeof window === 'undefined' ? process.env.BASE_URL || (`http://localhost:${(process.env.PORT || 8000)}`) : '';

const incrementTick = () => {
  return {
    type: ActionTypes.INCREMENT_TICK,
  };
};

const storeBeer = (beer) => {
  return {
    type: ActionTypes.STORE_BEER,
    beer,
  };
};

const sellBeer = (quantity) => {
  return {
    type: ActionTypes.SELL_BEER,
    quantity,
  };
};

export {
  incrementTick,
  storeBeer,
  sellBeer,
};
