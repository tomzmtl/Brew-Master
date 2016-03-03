import store from '../../redux/store/initialState';

const mockStore = (override = {}) => {
  return Object.assign({}, store, override);
};

export default mockStore;
