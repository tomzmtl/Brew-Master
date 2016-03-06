import { connect } from 'react-redux';
import Facility from '../components/Facility/Facility';
import { storeBeer } from '../redux/actions/actions';

const mapStateToProps = (state) => {
  return {
    storage: state.facility.storage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEquipmentBtnClick: (beer) => {
      dispatch(storeBeer(beer));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Facility);
