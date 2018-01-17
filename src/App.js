import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import AppHeader from './components/header/AppHeader';
import HomeSection from './components/home/HomeSection';
import PollSection from './components/pools/PollSection';
import PollView from './components/pools/PollView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>
        <header className="App-header">
          <h1 className="App-title">Welcome to this super voting app</h1>
        </header>

        <Route exact path="/" component={HomeSection}/>
        <Route path="/polls" component={PollSection}/>
        <Route path="/poll/:id" component={PollView}/>
      </div>
    );
  }
}

export default App;
