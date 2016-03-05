import React from 'react';

const Ticker = ({ tick, onBtnClick }) => (
  <div className="ticker">
    <span>Tick {tick}</span>
    <button onClick={onBtnClick}>Next tick</button>
  </div>
);

export default Ticker;
