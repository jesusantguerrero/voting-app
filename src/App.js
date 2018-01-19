import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './components/generals/PrivateRoute';
import axios from 'axios';

import './assets/css/App.css';
import AppHeader from './components/header/AppHeader';
import HomeSection from './components/home/HomeSection';
import PollSection from './components/polls/PollSection';
import PollView from './components/polls/PollView';
import PollUser from './components/polls/PollUser';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount(){
    this.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <AppHeader user={this.state.user}/>
        <header className="App-header">
          <h1 className="App-title"> Make your Vote count </h1>
        </header>
        <div className="container-fluid">

          <Route exact path="/" component={HomeSection}/>
          <Route path="/poll/:id" component={PollView}/>
          <PrivateRoute path="/polls" component={PollSection} user={this.state.user}/>
          <PrivateRoute path="/profile" component={PollUser} user={this.state.user}/>
        </div>
      </div>
    );
  }

  
  getCurrentUser() {
    axios.get('/current')
      .then((res) => {
        if (res.data.user) {
          this.setState({ user: res.data.user }); 
          window.User = res.data.user;
        }
      })
  }
}

export default App;
