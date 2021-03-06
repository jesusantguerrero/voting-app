import React from 'react';
import PollList from './../generals/PollList';
import axios from 'axios';

export default class HomeSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      polls: []
    }
  }

  componentDidMount(){
   this.getPolls();
  }

  render() {
    return(
      <div className="row justify-content-center">
      <PollList polls={this.state.polls} owner={false} afterDelete={this.getPolls.bind(this)}/>
    </div>
    )
  }

  getPolls() {
    axios.get('/api/poll/')
    .then((res) => {
      this.setState({ polls: res.data })
    })
  }
}