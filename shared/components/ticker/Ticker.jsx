import React, { PropTypes } from 'react';

const Ticker = ({ tick, onBtnClick }) => (
  <div className="ticker">
    <span>Tick {tick}</span>
    <button onClick={onBtnClick}>Next tick</button>
  </div>
);

Ticker.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
  tick: PropTypes.number.isRequired,
};

export default Ticker;
