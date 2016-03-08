import * as ACTIONS from '../constants/actionTypes';
// import fetch from 'isomorphic-fetch';

// const baseURL = typeof window === 'undefined' ? process.env.BASE_URL || (`http://localhost:${(process.env.PORT || 8000)}`) : '';

const incrementTick = () => {
  return {
    type: ACTIONS.INCREMENT_TICK,
  };
};

const storeBeer = (beer) => {
  return {
    type: ACTIONS.STORE_BEER,
    beer,
  };
};

const sellBeer = (quantity) => {
  return {
    type: ACTIONS.SELL_BEER,
    quantity,
  };
};

const addInventoryItem = (item) => {
  return {
    type: ACTIONS.ADD_INVENTORY_ITEM,
    item,
  };
};

const openModal = (modal) => {
  return {
    type: ACTIONS.OPEN_MODAL,
    modal,
  };
};

const closeModal = () => {
  return {
    type: ACTIONS.CLOSE_MODAL,
  };
};

export {
  incrementTick,
  storeBeer,
  sellBeer,
  addInventoryItem,
  openModal,
  closeModal,
};
