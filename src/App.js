import React, { Component } from 'react';
import './App.css';
import { DB_CONFIG } from './Config/config'
import firebase from 'firebase/app'
import SingleListing from './components/SingleListing'

class App extends Component {
  constructor(props){
    super(props)

    this.app = firebase.initializeApp(DB_CONFIG)
    this.db = this.app.database().ref().child('listings')

    this.state = {
      listings: []
    }
  }
  render() {
    return (
      <div>
        <h1>Welcome to Nomad Housing!</h1>
        <SingleListing />
      </div>
    );
  }
}

export default App;
