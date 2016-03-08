import { connect } from 'react-redux';
import StatusBar from '../components/StatusBar/StatusBar';
import { incrementTick, openModal } from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    tick: state.tick,
    wallet: state.wallet,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBtnClick: () => {
      dispatch(incrementTick());
    },
    onOpenMarketplaceClick: () => {
      dispatch(openModal('Marketplace'));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusBar);
