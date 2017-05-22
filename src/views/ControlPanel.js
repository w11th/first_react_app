import React, { Component } from 'react';
import Counter from './Counter';
import Summary from './Summary';

class ControlPanel extends Component {
  render() {
    return (
      <div>
        <Counter caption="First" />
        <Counter caption="Second" />
        <Counter caption="Third" />
        <hr />
        <button onClick={ () => this.forceUpdate() }>Click me to repaint!</button>
        <Summary />
      </div>
    );
  }
}

export default ControlPanel;
