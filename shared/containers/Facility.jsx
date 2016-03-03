import { connect } from 'react-redux';
import Facility from '../components/facility/Facility';

const mapStateToProps = (state) => {
  return {
    storage: state.facility.storage,
  };
};

export default connect(mapStateToProps)(Facility);
