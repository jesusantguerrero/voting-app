import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import utils from './utils';
import axios from 'axios';

export default class PollList extends Component {
  render() {
    return(
      <section className="pollList col-md-8">
      <h2 className="section-title">Recent polls </h2>
       {this.props.polls ? this.renderList() : (<div> Loading ...</div>)}
      </section>
    )
  }
  
  renderItem(item) {
    return <div className="card w-90 text-white bg-dark" key={item._id}>
        <div className="card-body">
          <h5 className="card-title">{ item.title }</h5>
          <p className="card-text">{ item.options.join(',') }</p>
          <Link  className="btn btn-primary" to={`/poll/${item._id}`}> Vote </Link>
          {this.props.owner && (
            <button className="btn btn-danger" onClick={this.delete.bind(this)} name={item._id}> delete </button>
          )}
        </div>
      </div>
  }

  renderList(props) {
    const list = this.props.polls.map(item => this.renderItem(item));
    return (<div>{list}</div>);
  }

  delete(e) {
    axios.delete(`/api/poll/delete/${e.target.name}`)
      .then(() => {
        this.props.afterDelete.call();
      })
  }

}