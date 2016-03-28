import React, { PropTypes, Component } from 'react';

class DebugPanel extends Component {

  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.toggleVisibility);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.toggleVisibility);
  }

  toggleVisibility = (e) => {
    if (e.keyCode !== 68) {
      return;
    }

    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {

    const btns = this.props.actions.map((action, index) => {
      return (
        <button onClick={action.do} key={index}>
          {action.label}
        </button>
      );
    });

    return (
      <div id="debugPanel" className="debug-panel" data-visible={this.state.visible}>
        {btns}
      </div>
    );
  }
}

DebugPanel.propTypes = {
  actions: PropTypes.array.isRequired,
};

export default DebugPanel;
