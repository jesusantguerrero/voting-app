import React, { Component } from 'react';

export default class LoginBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      passwordConfirm: ''
    }
  }

  render() {
    return(
      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="loginDropdown">
        <form className="px-4 py-3">
          <div className="form-group">
            <label htmlFor="input-email">Email address</label>
            <input type="email" className="form-control" id="input-email" data-state="email" placeholder="email@example.com" onChange={this.handleInput.bind(this)}/>
          </div>
          <div className="form-group">
            <label htmlFor="input-password">Password</label>
            <input type="password" className="form-control" id="input-password" data-state="password" placeholder="Password" onChange={this.handleInput.bind(this)}/>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.login.bind(this)}>Sign in</button>
        </form>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="/auth/twitter">Sign in with Twitter</a>
        <a className="dropdown-item" href="#">New around here? Sign up</a>
        <a className="dropdown-item" href="#">Forgot password?</a>
      </div>
    )
  }

  login(e) {
    e.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);
  }

  handleInput(e) {
    const state = {}
    state[e.target.dataset.state] = e.target.value;
    this.setState(state);
  }

}