import React, { Component } from 'react';
import store from '../Store';

class Summary extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = this.getOwnState();
  }

  componentDidMount() {
    store.subscribe(this.onChange);
  }

  componentWillUnmount() {
    store.unsubscribe(this.onChange);
  }

  render() {
    return (
      <div>Total Count: { this.state.summary }</div>
    );
  }

  onChange() {
    this.setState(this.getOwnState());
  }

  getOwnState() {
    const state = store.getState();
    let sum = 0;
    for(const key in state) {
      if (state.hasOwnProperty(key)) {
        sum += state[key];
      }
    }
    return { summary: sum };
  }

}

export default Summary;
