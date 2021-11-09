import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Widgets from 'fusioncharts/fusioncharts.widgets';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import TestData from './data/data-2.json';

ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

const chartConfigs = {
  type: 'angulargauge',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: TestData,
};

export default class Guage extends Component {
  render () {
    return <ReactFC {...chartConfigs} />;
  }
}
