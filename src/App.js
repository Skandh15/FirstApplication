import React, { Component } from 'react';
import './App.css';
import Person from './Company/Comapny.js';
import Manager from './Managers/Manager';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Application</h1>
        <Person />
        <Manager />
      </div>
    );
  }
}

export default App;
