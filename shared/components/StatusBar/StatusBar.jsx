import React, { PropTypes } from 'react';

import Ticker from './Ticker';
import Wallet from './Wallet';

const StatusBar = (props) => (
  <div className="status-bar">
    <Ticker tick={props.tick} onBtnClick={props.onBtnClick} />
    <Wallet amount={props.wallet} />
  </div>
);

StatusBar.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
  tick: PropTypes.number.isRequired,
  wallet: PropTypes.number.isRequired,
};

export default StatusBar;
