import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends Component {
  componentDidMount() {
    axios.get("http://api.openweathermap.org/data/2.5/forecast?id=3646738&APPID=d9db55cd3cf00ab5c19d86aeb4d484c9")
      .then(response => {
        console.log(response);
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
