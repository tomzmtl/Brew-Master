import { connect } from 'react-redux';
import StatusBar from '../components/StatusBar/StatusBar';
import { incrementTick } from '../redux/actions/actions';

const mapStateToProps = (state) => {
  return {
    tick: state.tick,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBtnClick: () => {
      dispatch(incrementTick());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusBar);
