import React, { Component } from 'react'
import PropTypes from 'prop-types';
import * as Actions from '../Actions';

const buttonStyle = {
  margin: '10px'
};

class Counter extends Component {
  render() {
    const {caption, onIncrement, onDecrement, value} = this.props;
    return (
      <div>
        <button style={buttonStyle} onClick={onIncrement}>+</button>
        <button style={buttonStyle} onClick={onDecrement}>-</button>
        <span>{caption} count: {value}</span>
      </div>
    );
  }
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

class CounterContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);

    this.onChange = this.onChange.bind(this);
    this.getOwnState = this.getOwnState.bind(this);
    this.state = this.getOwnState();
    console.log('enter Counter constructor: ' + this.props.caption);
  }

  componentWillMount() {
    console.log('component Counter will mount: ' + this.props.caption);
  }

  componentDidMount() {
    this.context.store.subscribe(this.onChange);
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
    this.context.store.unsubscribe(this.onchange);
    console.log('compoent Counter will unmount: ' + this.props.caption);
  }

  render() {
    return <Counter caption={this.props.caption}
    onIncrement={this.onIncrement}
    onDecrement={this.onDecrement}
    value={this.state.value} />
  }

  onIncrement() {
    this.context.store.dispatch(Actions.increment(this.props.caption));
  }

  onDecrement() {
    this.context.store.dispatch(Actions.decrement(this.props.caption));
  }

  onChange() {
    this.setState(this.getOwnState());
  }

  getOwnState() {
    return {
      value: this.context.store.getState()[this.props.caption]
    };
  }
}

CounterContainer.propTypes = {
  caption: PropTypes.string.isRequired
};

CounterContainer.contextTypes = {
  store: PropTypes.object
};

export default CounterContainer;
