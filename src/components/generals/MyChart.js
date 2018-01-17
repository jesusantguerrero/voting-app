import Chart from 'chart.js';

export default class MyChart {
  constructor($canvas, labels, values, config) {

    const data = {
      labels: labels,
      datasets: [{
        label: 'Votes',
        data: values,
        backgroundColor: '#06f'
      }]
    };

    const options ={
      responsive: true,
      scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
      }
    };

    this.chart = new Chart($canvas, {
      data: data,
      options: options,
      type: config.type
    })
  }

  update(labels, data) {
    this.chart.data.labels = labels;
    this.chart.data.datasets[0].data = data;
    this.chart.update();
  }
}