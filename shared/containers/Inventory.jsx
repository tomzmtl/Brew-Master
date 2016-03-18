import { connect } from 'react-redux';
import Inventory from '../components/Inventory/Inventory';
// import { addInventoryItem } from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    items: state.inventory.items,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Inventory);
