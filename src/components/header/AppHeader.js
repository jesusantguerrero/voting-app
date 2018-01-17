import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderLoginBox from './components/HeaderLoginBox';
import axios from 'axios';

export default class AppHeader extends Component {
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
                {this.state.user && <Menu/>}
              </nav>
            </div>
              {this.state.user ? '' : (<Login/>)}
          </nav>
        </div>
      </div>
    )
  }

  getCurrentUser() {
    axios.get('/current')
      .then((res) => {
        if (res.data.user) {
          this.setState({ user: res.data.user }); 
        }
      })
  }

  
}

function Menu(props) {
  return[
    <Link className="nav-item nav-link" to="/polls">Pools</Link>,
    <Link className="nav-item nav-link" to="/profile">Profile</Link>
  ]
}

function Login(props) {
  return(
    <div className="navbar-nav mr mr-md-3">
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="loginDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Login
      </a>
      <HeaderLoginBox/>
    </li>
    </div>
  )
}