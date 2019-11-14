import React, { Component } from 'react';
import './App.css';
import Person from './Company/Comapny.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Application</h1>
        <Person />
      </div>
    );
  }
}

export default App;
