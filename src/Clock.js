import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.clockID = setInterval(() => this.tickTock(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.clockID);
  }
  tickTock() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div className="flexcontainer">
        <div className="item">
          <h2>
            {this.state.date.toLocaleTimeString()}
          </h2>
        </div>
      </div>
    );
  }
}

export default Clock;
