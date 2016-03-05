import React, { Component } from 'react';
import { connect } from 'react-redux';

import StatusBar from '../containers/StatusBar';
import FacilityContainer from '../containers/Facility';

class App extends Component {
  render() {
    return (
      <div className="app">
        <StatusBar />
        <FacilityContainer />
      </div>
    );
  }
}

export default connect()(App);
