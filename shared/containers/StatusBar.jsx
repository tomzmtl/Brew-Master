import { connect } from 'react-redux';
import Ticker from '../components/ticker/Ticker';
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

const StatusBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Ticker);

export default StatusBar;
