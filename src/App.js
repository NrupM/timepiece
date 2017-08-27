import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="flexcontainer">
        <div className="item">
          <h2>12</h2>
        </div>
        <div className="item">:</div>
        <div className="item">
          <h2>30</h2>
        </div>
        <p className="item">:</p>
        <div className="item seconds">
          <p>60</p>
        </div>
      </div>
    );
  }
}

export default App;
