import React, { Component } from 'react';
import axios from 'axios';
import utils from './../generals/utils';
import MyChart from '../generals/MyChart';

export default class PollView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poll: {},
      option: 'selecciona',
      ran: false,
      chartVotes: null
    };
  }

  componentDidMount() {
    this.getPoll();
  }

  render() {
    return(
      <div className="row justify-content-center flex-direction-colums">
        <div className="col-8">
          <h2 className="section-title"> { this.state.poll.title ? this.state.poll.title : 'loading ...' }</h2>
          <div class="nav flex-row nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a class="nav-link active" id="v-pills-vote-tab" data-toggle="pill" href="#v-pills-vote" role="tab" aria-controls="v-pills-vote" aria-selected="true"> Vote </a>
            <a class="nav-link" id="v-pills-chart-tab" data-toggle="pill" href="#v-pills-chart" role="tab" aria-controls="v-pills-chart" aria-selected="false"> Chart </a>
            <a class="nav-link" id="v-pills-author-tab" data-toggle="pill" href="#v-pills-author" role="tab" aria-controls="v-pills-author" aria-selected="false"> Author </a>
          </div>

          
          <div class="tab-content" id="v-pills-tabContent">
            <div class="tab-pane fade show active" id="v-pills-vote" role="tabpanel" aria-labelledby="v-pills-vote-tab">
              <div className="form-group">
              <label> Option </label>
              <select className="form-control" value={this.state.option} onChange={this.handleChange.bind(this)} name="option">
                <OptionList options={this.state.poll.options}/>
              </select>
            </div>

            <button className="btn btn-primary" onClick={this.vote.bind(this)}> Vote </button>
            </div>
            <div className="tab-pane fade" id="v-pills-chart" role="tabpanel" aria-labelledby="v-pills-chart-tab">
              <div className="chart-container" height="600px"> 
                <canvas id="chart-votes"></canvas>
              </div>
            </div>
            <div class="tab-pane fade" id="v-pills-author" role="tabpanel" aria-labelledby="v-pills-author-tab">...</div>
          </div>  

        </div>

      </div>
    )
  }

  vote(e) {
    e.preventDefault();
    const { title, options } = this.state.poll;
    const data = utils.setAxiosData({ option: this.state.option})

    if (title && options) {
      axios.post(`/api/vote/${this.state.poll._id}`, data)
        .then((res) => {
          alert('saved');
          this.getPoll();
        })
        .catch((res) => {
          alert('not saved');
        });
    }
  }

  getPoll(){
    const { id } = this.props.match.params; 
    axios.get(`/api/poll/${id}`)
      .then((res) => {
        this.setState({ poll: res.data });
        this.setState({ option: res.data.options[0] });
        this.results();
      })
  }

  handleChange(e) {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  }

  results() {
    const { poll } = this.state;
    const votes = {};
    const labels = [];
    const values = [];

    // counting the votes
    poll.votes.forEach((item) => {
      if (votes[item.option]) {
        votes[item.option] += 1;
      } else {
        votes[item.option] = 1;
        labels.push(item.option);
      }
    });

    
    // populatig the data
    labels.forEach((option) => {
      values.push(votes[option])
    });

    // setting the 0 votes options
    poll.options.forEach((option) => {
      if (!labels.includes(option)) {
        values.push(0)
        labels.push(option)
      }
    })
    
    if (!this.state.ran) {
      const chartVotes = new MyChart(document.querySelector('#chart-votes'), labels, values, { type: 'bar' });
      this.setState({ ran: true , chartVotes: chartVotes });
    } else {
      this.state.chartVotes.update(labels, values);
    }

  }
}

function OptionList(props) {
  const { options } = props;
  if (options) {
    const list = options.map((item) => <option value={item} key={item}> { item } </option>)
    return list;
  }
  return (<option> none </option>)
}