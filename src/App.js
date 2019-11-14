/* eslint-disable */
import React, { Component } from 'react';
import './App.css';
import Person from './Company/Company';
class App extends Component {
  state = {
    character:[
      {name : 'Ross Geller',tagline : "I'm fine."},
      {name : 'Monika Geller',tagline : "I'm drunk."},
      {name : 'Joey Tribbiani',tagline : "Joey doesn't share food."},
      {name: 'Chandler Bing',tagline : "Can i interest you in sarcastic comment."},
      {name: 'Phoebe Buffay', tagline : "My mother killed herself."},
      {name : 'Rachel Green', tagline : "We were not on a break."}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>React Application</h1>
        <h2>Welcome to the Friends</h2>
        <button>Switch Character</button>
        <Person name = { this.state.character[0].name } tagline = { this.state.character[0].tagline } />
        <Person name = { this.state.character[1].name } tagline = { this.state.character[1].tagline } />
        <Person name = { this.state.character[2].name } tagline = { this.state.character[2].tagline } />
        <Person name = { this.state.character[3].name } tagline = { this.state.character[3].tagline } />
        <Person name = { this.state.character[4].name } tagline = { this.state.character[4].tagline } />
        <Person name = { this.state.character[5].name } tagline = { this.state.character[5].tagline } />
      </div>
    );
  }
}

export default App;
