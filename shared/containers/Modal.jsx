import { connect } from 'react-redux';
import Modal from '../components/Modal/Modal';
import { closeModal } from '../actions/actions';

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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
