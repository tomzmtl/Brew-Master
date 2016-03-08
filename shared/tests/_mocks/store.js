import store from '../../store/initialState';

const mockStore = (override = {}) => {
  return Object.assign({}, store, override);
};

export default mockStore;
