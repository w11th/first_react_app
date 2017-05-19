import React, { Component } from 'react';
import SummaryStore from './stores/SummaryStore';

class Summary extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      summary: SummaryStore.getSummary()
    }
  }

  componentDidMount() {
    SummaryStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    SummaryStore.removeChangeListener(this.onChange);
  }

  render() {
    return (
      <div>Total Count: { this.state.summary }</div>
    );
  }
  onChange() {
    const newSummary = SummaryStore.getSummary();
    this.setState({summary: newSummary});
  }
}

export default Summary;
