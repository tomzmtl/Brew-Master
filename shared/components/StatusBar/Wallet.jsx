import React, { PropTypes } from 'react';

const Wallet = ({ amount }) => (
  <div className="wallet">
    <span>Money: ${amount}</span>
  </div>
);

Wallet.propTypes = {
  amount: PropTypes.number.isRequired,
};

export default Wallet;
