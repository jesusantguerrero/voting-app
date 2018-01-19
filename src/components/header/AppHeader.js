import React, { Component } from 'react';
import { router,  Link } from 'react-router-dom';

export default class AppHeader extends Component {
  render() {
    return(
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNavigation" aria-controls="mainNavigation" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/">Voting App</a>
        
        <div className="collapse navbar-collapse" id="mainNavigation">
          <nav className="navbar-nav mr mr-md-3">
            <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
            {this.props.user && <Menu/>}
            <Login user={this.props.user}/>
          </nav>
        </div>
      </nav>
    )
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