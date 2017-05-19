import React, { Component } from 'react'
import PropTypes from 'prop-types';

import CounterStore from './stores/CounterStore';
import * as Actions from './Actions'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
    this.state = {
      count: CounterStore.getCounterValues()[props.caption]
    };
    console.log('enter Counter constructor: ' + this.props.caption);
  }

  componentWillMount() {
    console.log('component Counter will mount: ' + this.props.caption);
  }

  componentDidMount() {
    CounterStore.addChangeListener(this.onChange);
    console.log('component Counter did mount: ' + this.props.caption);
  }

  componentWillReceiveProps(nextProps) {
    console.log('component Counter will receive props: ' + this.props.caption);
  }

  shouldComponentUpdate(nextProps, nextState) {
    let should = (nextProps.caption !== this.props.caption) || (nextState.count !== this.state.count);
    console.log('component Counter should update? ' + should + " " + this.props.caption + " " + nextProps.caption);
    return should;
  }

  componentWillUnmount() {
    CounterStore.removeChangeListener(this.onChange);
    console.log('compoent Counter will unmount: ' + this.props.caption);
  }

  render() {
    const { caption } = this.props;
    console.log('component Counter rendered: ' + this.props.caption);
    return (
      <div>
        <button onClick={ this.onClickIncrementButton }>+</button>
        <button onClick={ this.onClickDecrementButton }>-</button>
        <span>{caption} count: { this.state.count }</span>
      </div>
    );
  }

  onClickIncrementButton() {
    Actions.increment(this.props.caption);
  }

  onClickDecrementButton() {
    Actions.decrement(this.props.caption);
  }

  onChange() {
    const newCount = CounterStore.getCounterValues()[this.props.caption];
    this.setState({count: newCount});
  }
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired
};

export default Counter;
