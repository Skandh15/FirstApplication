import React, { Component } from 'react';
import './App.css';
import Person from './Company/Company';
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
