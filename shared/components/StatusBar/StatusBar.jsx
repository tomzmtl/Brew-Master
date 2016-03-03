import React from 'react';

import Ticker from './Ticker';

const StatusBar = (props) => (
  <div className="status-bar">
    <Ticker {...props} />
  </div>
);

export default StatusBar;
