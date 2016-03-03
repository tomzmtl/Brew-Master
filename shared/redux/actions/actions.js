import * as ActionTypes from '../constants/constants';
// import fetch from 'isomorphic-fetch';

// const baseURL = typeof window === 'undefined' ? process.env.BASE_URL || (`http://localhost:${(process.env.PORT || 8000)}`) : '';

const incrementTick = () => {
  return {
    type: ActionTypes.INCREMENT_TICK,
  };
};

const produceBeer = () => {
  return {
    type: ActionTypes.PRODUCE_BEER,
  };
};

export {
  incrementTick,
  produceBeer,
};
