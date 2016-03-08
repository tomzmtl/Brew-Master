import { connect } from 'react-redux';
import Inventory from '../components/Inventory/Inventory';
import { addInventoryItem } from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    items: state.inventory.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBtnClick: () => {
      dispatch(addInventoryItem(Object.assign({}, { name: 'Generic Inventory Item' })));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inventory);
