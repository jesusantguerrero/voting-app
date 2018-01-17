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
   this.getUserPolls();
  }

  render() {
    return(
      <div className="row justify-content-center">
      <PollList polls={this.state.polls} owner={true} afterDelete={this.getUserPolls.bind(this)}/>
    </div>
    )
  }

  getUserPolls() {
    axios.get(`/api/poll/user/${window.User.id}`)
    .then((res) => {
      this.setState({ polls: res.data })
    })
  }
}