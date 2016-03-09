import React from 'react';

function _buildRows(items) {
  return items.map((item, i) => (
    <tr key={i}>
      <td>{item.name}</td>
      <td>{item.price}</td>
    </tr>
  ));
}

const Marketplace = (props) => {
  const rows = _buildRows(props.items);

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
