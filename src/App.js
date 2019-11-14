import React, { Component } from 'react';
import './App.css';
import Person from './Company/Company';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Application</h1>
        <h2>Welcome to the Friends</h2>
        <Person name = 'Ross Geller' tagline = "I'm fine."/>
        <Person name = 'Monika Geller' tagline = "I'm drunk."/>
        <Person name = 'Joey Tribbiani' tagline = "Joey doesn't share food."/>
        <Person name = 'Chandler Bing' tagline = "Can i interest you in sarcastic comment."/>
        <Person name = 'Phoebe Buffay' tagline = "My mother killed herself."/>
        <Person name = 'Rachel Green' tagline = "We were not on a break."/>
      </div>
    );
  }
}

export default App;
