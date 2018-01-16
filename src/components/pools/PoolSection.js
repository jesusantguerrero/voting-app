import React, { Component } from 'react';
import axios from 'axios';

export default class PoolSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      options: ''
    }
  }

  render() {
    return(
      <div className="row justify-content-center">
      <form className="col-md-9">
          <h2 className="text-center"> Create a new Poll </h2>
          <div className="form-group">
            <label htmlFor="title"> Title </label>
            <input name="title" className="form-control" onChange={this.handleInput.bind(this)} value={this.state.title}/>
          </div>
          <div className="form-group">
            <label htmlFor="options"> Options (comma separated) </label>
            <textarea name="options" className="form-control" rows="5" cols="5" onChange={this.handleInput.bind(this)} value={this.state.options}></textarea>
          </div>
          <button className="btn btn-dark" onClick={this.save.bind(this)}> Save</button>
        </form>
      </div>
    )
  }

  save(e) {
    e.preventDefault();
    const { title, options } = this.state;
    if (title && options) {
      axios.post('/api/poll/create', this.state)
        .then((res) => {
          alert('saved');
        })
        .catch((res) => {
          alert('not saved');
        });
    }
  }

  handleInput(e) {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  }
}