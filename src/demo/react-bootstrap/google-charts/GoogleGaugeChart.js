import React, { Component } from 'react';
import Chart from 'react-google-charts';
export default class GoogleGaugeChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memory: 80,
      cpu: 55,
      network: 68,
      intervalID: "1",
    };
    this.refresh = this.refresh.bind(this);
    this.refresh();
  }

  refresh(){
    setInterval(() => {
      this.setState({
        memory: Math.random() * 100,
        cpu: Math.random() * 100,
        network: Math.random() * 100,
      })
    }, 1000)
  }
  render () {

    const {memory, cpu, network } = this.state;
    return (
      <Chart
        width="400"
        height="120"
        chartType="Gauge"
        loader={<div>Loading Chart</div>}
        data={[
          ['Label', 'Value'],
          ['Memory', memory],
          ['CPU', cpu],
          ['Network', network],
        ]}
        options={{
          redFrom: 90,
          redTo: 100,
          yellowFrom: 75,
          yellowTo: 90,
          minorTicks: 5,
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    );
  }
}
