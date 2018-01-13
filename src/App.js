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
        <div className="row justify-content-center">
        <section className="poolList col-md-8">
          <h2>Recent Pools </h2>
          
          <div className="card w-90 text-white bg-dark">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

        <div className="card w-90 text-white bg-dark">
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        </section>
        </div>
      </div>
    );
  }
}

export default App;
