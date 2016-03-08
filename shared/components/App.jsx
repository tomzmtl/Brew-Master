import React, { Component } from 'react';
import { connect } from 'react-redux';

import StatusBar from '../containers/StatusBar';
import Facility from '../containers/Facility';
import Inventory from '../containers/Inventory';

class App extends Component {
  render() {
    return (
      <div className="app">
        <StatusBar />
        <Facility />
        <Inventory />
      </div>
    );
  }
}

export default connect()(App);
