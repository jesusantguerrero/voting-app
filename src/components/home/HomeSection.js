import React from 'react';
import PoolList from './../generals/PoolList';

export default class HomeSection extends React.Component {
  render() {
    return(
      <div className="row justify-content-center">
      <PoolList pools={[1, 2, 3]}/>
    </div>
    )
  }
}