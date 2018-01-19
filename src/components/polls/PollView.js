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
      chartVotes: null,
      newOption: false
    };
  }

  componentDidMount() {
    this.getPoll();
  }

  render() {
    return(
      <div className="row justify-content-center flex-direction-colums">
        <div className="col-md-12">
          <h2 className="section-title"> {`${this.state.poll.title} -- by ${this.state.poll.userName}` ? this.state.poll.title : 'loading ...' }</h2>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label> Option </label>
            <div className="input-group">
            <select className="form-control" value={this.state.option} onChange={this.handleChange.bind(this)} name="option">
              <OptionList options={this.state.poll.options}/>
            </select>
            <div className="append">
              <button className="btn btn-dark" onClick={this.changeNewOption.bind(this)}> { this.state.newOption ? '-': '+' }</button>
            </div>
          </div>
          </div>
          { this.state.newOption && (<ButtonAddOption newOption={this.state.option} handleChange={this.handleChange.bind(this)} addOption={this.addOption.bind(this)}/>) }
          <button className="btn btn-primary" onClick={this.vote.bind(this)}> Vote </button>
        </div>

        <div className="col-md-4">
          <div className="chart-container" height="600px"> 
            <canvas id="chart-votes"></canvas>
          </div>
        </div>
      </div>
    )
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

  vote(e) {
    e.preventDefault();
    const { title, options } = this.state.poll;
    const data = utils.setAxiosData({ option: this.state.option})

    if (title && options) {
      axios.post(`/api/vote/${this.state.poll._id}`, data)
        .then((res) => {
          this.getPoll();
        })
        .catch((res) => {
          alert('not saved');
        });
    }
  }

  addOption(e) {
    e.preventDefault();
    const { title, options } = this.state.poll;
    const data = utils.setAxiosData({ option: this.state.option})

    if (title && options) {
      axios.post(`/api/option/${this.state.poll._id}`, data)
        .then((res) => {
          this.vote();
          this.changeNewOption();
        })
        .catch((res) => {
          alert('not saved');
        });
    }
  }

  changeNewOption() {
    this.setState({ newOption: !this.state.newOption});
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

function ButtonAddOption(props){
  return (
    <div className="form-group">
      <label> Add a new option</label>
      <div className="input-group">
      <input className="form-control" value={props.newOption} name="option" onChange={props.handleChange}/>
      <div className="append">
        <button className="btn btn-primary" onClick={props.addOption}> vote </button>
      </div>
    </div>
    </div>
  )
}