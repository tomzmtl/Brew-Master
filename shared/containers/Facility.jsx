import { connect } from 'react-redux';
import Facility from '../components/Facility/Facility';
import { storeBeer, sellBeer } from '../redux/actions/actions';

const mapStateToProps = (state) => {
  return {
    storage: state.facility.storage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEquipmentBtnClick: () => {
      dispatch(storeBeer());
    },
    onSellBtnClick: (qty) => {
      dispatch(sellBeer(qty));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Facility);
