import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
              <nav className="navbar-nav mr mr-md-3">
                <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                {this.state.user && <Menu/>}
                <Login user={this.state.user}/>
              </nav>
            </div>
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
          window.User = res.data.user;
        }
      })
  }

  
}

function Menu(props) {
  return[
    <Link className="nav-item nav-link" to="/polls"> New Poll </Link>,
    <Link className="nav-item nav-link" to="/profile"> My Polls </Link>
  ]
}

function Login(props) {
  return props.user 
        ? [
            <Link className="nav-item nav-link" to="/profile"> { props.user.displayName } </Link>,
            <a className="nav-item nav-link" href="/auth/logout"> logout </a>,
          ] 
        : (<a className="nav-item nav-link" href="/auth/twitter">Sign in with Twitter</a>)
}