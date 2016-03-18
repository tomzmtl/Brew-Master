import { connect } from 'react-redux';
import Modal from '../components/Modal/Modal';
import { closeModal, buyMarketPlaceItem } from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    activeModal: state.modal,
    items: state.marketplace.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCloseClick: () => {
      dispatch(closeModal());
    },
    onMarketPlaceItemClick: (i) => {
      dispatch(buyMarketPlaceItem(i));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
