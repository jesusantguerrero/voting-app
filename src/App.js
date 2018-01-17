import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './assets/css/App.css';
import AppHeader from './components/header/AppHeader';
import HomeSection from './components/home/HomeSection';
import PollSection from './components/polls/PollSection';
import PollView from './components/polls/PollView';
import PollUser from './components/polls/PollUser';

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
        <Route path="/profile" component={PollUser}/>
      </div>
    );
  }
}

export default App;
