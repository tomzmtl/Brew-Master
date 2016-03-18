import React from 'react';

function _buildRows(items, onItemClick, wallet) {
  return items.map((item, i) => {
    const b = () => onItemClick(i);
    const disabled = wallet < item.price;
    return (
      <tr key={i}>
        <td>{item.name}</td>
        <td>{item.price}$</td>
        <td>
          <button onClick={b} disabled={disabled}>Purchase</button>
        </td>
      </tr>
    );
  });
}

const Marketplace = (props) => {
  const rows = _buildRows(props.items, props.marketplace.onItemClick, props.wallet);

  return (
    <div className="modal">
      <h1>
        Marketplace
        <button onClick={props.onCloseClick}>CLOSE</button>
      </h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Marketplace;
