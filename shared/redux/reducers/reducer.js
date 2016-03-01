import * as ActionTypes from '../constants/constants';

const initialState = {};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ACTION_TYPE :
      return {};
    default:
      return state;
  }
};

export default myReducer;
