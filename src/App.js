import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './components/header/AppHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to this super voting app</h1>
        </header>
      </div>
    );
  }
}

export default App;
