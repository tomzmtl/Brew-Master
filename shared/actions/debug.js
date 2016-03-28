import * as ACTIONS from '../constants/debugActionTypes';

const addMoney = (amount) => {
  return {
    type: ACTIONS.ADD_MONEY,
    amount,
  };
};

const fillMarketplace = () => {
  return {
    type: ACTIONS.FILL_MARKETPLACE,
  };
};

export {
  addMoney,
  fillMarketplace,
};
