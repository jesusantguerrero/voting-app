import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PollViewOptionButton extends Component {
  render() {
    return(
      <section className="poolList col-md-8">
      <h2>Recent Pools </h2>
       {this.renderList()}
      </section>
    )
  }
  
  renderItem(item) {
    return <div className="card w-90 text-white bg-dark" key={item._id}>
        <div className="card-body">
          <h5 className="card-title">{ item.title }</h5>
          <p className="card-text">{ item.options.join(',') }</p>
          <Link  className="btn btn-primary" to={`/poll/${item._id}`}> Vote </Link>
        </div>
      </div>
  }

  renderList(props) {
    const list = this.props.pools.map(item => this.renderItem(item));
    return (<div>{list}</div>);
  }

}