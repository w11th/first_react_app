import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
    this.state = {
      count: this.props.initValue
    };
    console.log('enter Counter constructor: ' + this.props.caption);
  }
  componentWillMount() {
    console.log('component Counter will mount: ' + this.props.caption);
  }
  componentDidMount() {
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
    this.updateCount(true);
  }

  onClickDecrementButton() {
    this.updateCount(false);
  }

  updateCount(isIncrement) {
    const previousValue = this.state.count;
    const newValue = isIncrement ? previousValue + 1 : previousValue - 1;
    this.setState({ count: newValue })
    this.props.onUpdate(newValue, previousValue)
  }

}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  initValue: PropTypes.number,
  onUpdate: PropTypes.func
};

Counter.defaultProps = {
  initValue: 0,
  onUpdate: f => f
};

export default Counter;
