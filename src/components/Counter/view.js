import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actions from './actions.js';

const buttonStyle = {
  margin: '10px'
};

export const stateKey = 'counter';

class Counter extends Component {
  render() {
    const {onIncrement, onDecrement, value} = this.props;
    return (
      <div>
        <button style={buttonStyle} onClick={onIncrement}>+</button>
        <button style={buttonStyle} onClick={onDecrement}>-</button>
        <span>count: {value}</span>
      </div>
    );
  }
}

Counter.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return {
    value: state[stateKey] || 0
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onIncrement: actions.increment,
  onDecrement: actions.decrement
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
