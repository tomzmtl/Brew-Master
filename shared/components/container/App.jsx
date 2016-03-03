import React, { Component } from 'react';
import { connect } from 'react-redux';

import StatusBar from '../../containers/StatusBar';
import FacilityContainer from '../../containers/Facility';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <div className="status-bar">
          <StatusBar />
        </div>
        <FacilityContainer />
      </div>
    );
  }
}

export default connect()(App);
