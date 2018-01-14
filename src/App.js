import React, { Component } from 'react';
import { BrowserRouter, Route , Redirect, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import AppHeader from './components/header/AppHeader';
import PoolList from './components/generals/PoolList';
import HomeSection from './components/home/HomeSection';
import PoolSection from './components/pools/PoolSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to this super voting app</h1>
        </header>

        <Route exact path="/" component={HomeSection}/>
        <Route path="/pools" component={PoolSection}/>
        <Route path="/pools:id" component={PoolSection}/>
      </div>
    );
  }
}

export default App;
