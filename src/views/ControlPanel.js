import React, { Component } from 'react';
import CounterContainer from './Counter';
import SummaryContainer from './Summary';

class ControlPanel extends Component {
  render() {
    return (
      <div>
        <CounterContainer caption="First" />
        <CounterContainer caption="Second" />
        <CounterContainer caption="Third" />
        <hr />
        <button onClick={ () => this.forceUpdate() }>Click me to repaint!</button>
        <SummaryContainer />
      </div>
    );
  }
}


export default ControlPanel;
