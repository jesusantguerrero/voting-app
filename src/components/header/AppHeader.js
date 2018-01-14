import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import HeaderLoginBox from './components/HeaderLoginBox';

export default class AppHeader extends Component {

  render() {
    return(
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNavigation" aria-controls="mainNavigation" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="/">Voting App</a>
            
            
            <div className="collapse navbar-collapse" id="mainNavigation">
              <nav className="navbar-nav">
                <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                <Link className="nav-item nav-link" to="/pools">Pools</Link>
                <Link className="nav-item nav-link" to="/profile">Profile</Link>
              </nav>
            </div>

            <div className="navbar-nav mr mr-md-3">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="loginDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Login
              </a>
              <HeaderLoginBox/>
            </li>
            </div>
          </nav>
        </div>
      </div>
    )
  }

  
}