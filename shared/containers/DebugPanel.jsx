import { connect } from 'react-redux';
import DebugPanel from '../components/DebugPanel/DebugPanel';
import * as DebugActions from '../actions/debug';

const mapStateToProps = (state) => {
  return {
    actions: [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: [
      {
        label: 'Add $100',
        do: () => { dispatch(DebugActions.addMoney(100)); },
      },
      {
        label: 'Fill Marketplace',
        do: () => { dispatch(DebugActions.fillMarketplace()); },
      },
    ],
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DebugPanel);
