import React, { Component } from 'react';
import axios from 'axios';
import utils from './../generals/utils';

export default class PollSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      options: '',
      created: false
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
        { this.state.created && <PollCreatedView poll={this.state.poll}/>}
      </div>
    )
  }

  save(e) {
    e.preventDefault();
    const { title, options } = this.state;
    const data = utils.setAxiosData({ title, options});

    if (title && options) {
      axios.post('/api/poll/create', data )
        .then((res) => {
          alert('saved');
          this.setState({ created: true })
          this.setState({ poll: res.data})
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

function PollCreatedView(props) {
  const theLink = `${window.location.origin}/poll/${props.poll._id}`;
  return(
    <div>
      <h2>Congratulations, your poll is live</h2>
      <a href={theLink}>{theLink}</a>
    </div>
  )
}