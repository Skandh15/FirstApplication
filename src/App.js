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
        <h2>Use of State with event handling</h2>
        <p><strong>The difference between state and props is that state works in the same js while in props we have to pass props to another component.</strong></p>
        <button onClick = {this.CharacterSwitchHandler.bind(this,'It\'s not that common, it\'s not that easy and it doesn\'t happen to every guy.')}>Switch Character</button>
        <h5>Hi, I am { this.state.character[0].name }. <br></br>  { this.state.character[0].tagline } </h5>
        <h5>Hi, I am { this.state.character[1].name } { this.CharacterSwitchHandler }. <br></br>  { this.state.character[1].tagline } </h5>
        <input type = 'text' onChange = {this.CharacterSwitchHandler}></input>
        <h5>Hi, I am { this.state.character[2].name }{ this.CharacterSwitchHandler }. <br></br>  { this.state.character[2].tagline } </h5>
        <h5>Hi, I am { this.state.character[3].name }. <br></br>  { this.state.character[3].tagline } </h5> 
        <h5>Hi, I am { this.state.character[4].name }. <br></br>  { this.state.character[4].tagline } </h5>
        <h5>Hi, I am { this.state.character[5].name }. <br></br>  { this.state.character[5].tagline } </h5>
        <h1>--------------------------------------------------------------------------------</h1>
        <h2>Use of Props </h2>
        <Person name = 'Janice' tagline = 'Oh My God'></Person>
        <Person name = { this.state.character[1].name } changed = {this.NameChangehandler} tagline = { this.state.character[1].tagline }></Person>
      </div>
    );
  }

  CharacterSwitchHandler = (Newevent) =>{
    this.setState({
      character:[
        {name : 'Ross Geller', tagline : "We were on a break."},
        {name : 'Monika' ,tagline: "I'm drunk."},
        {name : 'Joey Tribbiani',tagline : "Joey doesn't share food."},
        {name: Newevent.target.value,tagline : "Can i interest you in sarcastic comment."},
        {name: 'Phoebe Buffay', tagline : "My mother killed herself."},
        {name : 'Rachel Green', tagline : 'newTagline'} 
      ]}
    )
  }
  NameChangehandler = (event) =>{
    this.setState({
      character:[
        {name : 'Ross Geller', tagline : "We were on a break."},
        {name : event.target.value,tagline : "I'm drunk."},
        {name : 'Joey Tribbiani',tagline : "Joey doesn't share food."},
        {name: 'Chandler Bing',tagline : "Can i interest you in sarcastic comment."},
        {name: 'Phoebe Buffay', tagline : "My mother killed herself."},
        {name : 'Rachel Green', tagline : 'this.newTagline'} 
      ]}
    )
  }
}


export default App;
