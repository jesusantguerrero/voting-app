import React, { Component } from 'react';

export default class PoolList extends Component {
  render() {
    return(
      <section className="poolList col-md-8">
      <h2>Recent Pools </h2>
       {this.renderList()}
      </section>
    )
  }
  
  renderItem(item) {
    return <div className="card w-90 text-white bg-dark" key={item}>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary"> Vote </a>
        </div>
      </div>
  }

  renderList(props) {
    const list = this.props.pools.map(item => this.renderItem(item));

    return (<div>{list}</div>);
  }
}