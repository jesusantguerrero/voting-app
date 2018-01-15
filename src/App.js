import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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
