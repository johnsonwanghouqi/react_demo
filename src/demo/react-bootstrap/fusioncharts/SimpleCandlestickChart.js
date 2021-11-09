import React from "react";
import FusionCharts from "fusioncharts";
import fusioncharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Apple (AAPL) Stock Price",
    subcaption: "Last 6 Months",
    numberprefix: "$",
    pyaxisname: "Price (USD)",
    theme: "fusion"
  },
  categories: [
    {
      category: [
        {
          label: "Jan",
          x: "1"
        },
        {
          label: "Feb",
          x: "22"
        },
        {
          label: "Mar",
          x: "41"
        },
        {
          label: "Apr",
          x: "62"
        },
        {
          label: "May",
          x: "83"
        }
      ]
    }
  ],
  dataset: [
    {
      data: [
        {
          date: "Jan 02, 2018",
          tooltext:
            "<b>Jan 02, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 170.16,
          high: 172.3,
          low: 169.26,
          close: 170.9,
          volume: "25555900",
          x: 1
        },
        {
          date: "Jan 03, 2018",
          tooltext:
            "<b>Jan 03, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 172.53,
          high: 174.55,
          low: 171.96,
          close: 170.87,
          volume: "29517900",
          x: 2
        },
        {
          date: "Jan 04, 2018",
          tooltext:
            "<b>Jan 04, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 172.54,
          high: 173.47,
          low: 172.08,
          close: 171.67,
          volume: "22434600",
          x: 3
        },
        {
          date: "Jan 05, 2018",
          tooltext:
            "<b>Jan 05, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 173.44,
          high: 175.37,
          low: 173.05,
          close: 173.62,
          volume: "23660000",
          x: 4
        },
        {
          date: "Jan 08, 2018",
          tooltext:
            "<b>Jan 08, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 174.35,
          high: 175.61,
          low: 173.93,
          close: 172.98,
          volume: "20567800",
          x: 5
        },
        {
          date: "Jan 09, 2018",
          tooltext:
            "<b>Jan 09, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 174.55,
          high: 175.06,
          low: 173.41,
          close: 172.96,
          volume: "21584000",
          x: 6
        },
        {
          date: "Jan 10, 2018",
          tooltext:
            "<b>Jan 10, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 173.16,
          high: 174.3,
          low: 173,
          close: 172.92,
          volume: "23959900",
          x: 7
        },
        {
          date: "Jan 11, 2018",
          tooltext:
            "<b>Jan 11, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 174.59,
          high: 175.49,
          low: 174.49,
          close: 173.9,
          volume: "18667700",
          x: 8
        },
        {
          date: "Jan 12, 2018",
          tooltext:
            "<b>Jan 12, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 176.18,
          high: 177.36,
          low: 175.65,
          close: 175.69,
          volume: "25418100",
          x: 9
        },
        {
          date: "Jan 16, 2018",
          tooltext:
            "<b>Jan 16, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 177.9,
          high: 179.39,
          low: 176.14,
          close: 174.8,
          volume: "29565900",
          x: 10
        },
        {
          date: "Jan 17, 2018",
          tooltext:
            "<b>Jan 17, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 176.15,
          high: 179.25,
          low: 175.07,
          close: 177.69,
          volume: "33888500",
          x: 11
        },
        {
          date: "Jan 18, 2018",
          tooltext:
            "<b>Jan 18, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 179.37,
          high: 180.1,
          low: 178.25,
          close: 177.85,
          volume: "31193400",
          x: 12
        },
        {
          date: "Jan 19, 2018",
          tooltext:
            "<b>Jan 19, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 178.61,
          high: 179.58,
          low: 177.41,
          close: 177.05,
          volume: "32425100",
          x: 13
        },
        {
          date: "Jan 22, 2018",
          tooltext:
            "<b>Jan 22, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 177.3,
          high: 177.78,
          low: 176.6,
          close: 175.6,
          volume: "27108600",
          x: 14
        },
        {
          date: "Jan 23, 2018",
          tooltext:
            "<b>Jan 23, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 177.3,
          high: 179.44,
          low: 176.82,
          close: 175.64,
          volume: "32689100",
          x: 15
        },
        {
          date: "Jan 24, 2018",
          tooltext:
            "<b>Jan 24, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 177.25,
          high: 177.3,
          low: 173.2,
          close: 172.85,
          volume: "51105100",
          x: 16
        },
        {
          date: "Jan 25, 2018",
          tooltext:
            "<b>Jan 25, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 174.51,
          high: 174.95,
          low: 170.53,
          close: 169.76,
          volume: "41529000",
          x: 17
        },
        {
          date: "Jan 26, 2018",
          tooltext:
            "<b>Jan 26, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 172,
          high: 172,
          low: 170.06,
          close: 170.16,
          volume: "39143000",
          x: 18
        },
        {
          date: "Jan 29, 2018",
          tooltext:
            "<b>Jan 29, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 170.16,
          high: 170.16,
          low: 167.07,
          close: 166.64,
          volume: "50640400",
          x: 19
        },
        {
          date: "Jan 30, 2018",
          tooltext:
            "<b>Jan 30, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 165.53,
          high: 167.37,
          low: 164.7,
          close: 165.65,
          volume: "46048200",
          x: 20
        },
        {
          date: "Jan 31, 2018",
          tooltext:
            "<b>Jan 31, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 166.87,
          high: 168.44,
          low: 166.5,
          close: 166.11,
          volume: "32478900",
          x: 21
        },
        {
          date: "Feb 1, 2018",
          tooltext:
            "<b>Feb 01, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 167.17,
          high: 168.62,
          low: 166.76,
          close: 166.46,
          volume: "47230800",
          x: 22
        },
        {
          date: "Feb 2, 2018",
          tooltext:
            "<b>Feb 02, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 166,
          high: 166.8,
          low: 160.1,
          close: 159.23,
          volume: "86593800",
          x: 23
        },
        {
          date: "Feb 5, 2018",
          tooltext:
            "<b>Feb 05, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 159.1,
          high: 163.88,
          low: 156,
          close: 155.26,
          volume: "72738500",
          x: 24
        },
        {
          date: "Feb 6, 2018",
          tooltext:
            "<b>Feb 06, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 154.83,
          high: 163.72,
          low: 154,
          close: 161.74,
          volume: "68243800",
          x: 25
        },
        {
          date: "Feb 7, 2018",
          tooltext:
            "<b>Feb 07, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 163.09,
          high: 163.4,
          low: 159.07,
          close: 158.28,
          volume: "51608600",
          x: 26
        },
        {
          date: "Feb 8, 2018",
          tooltext:
            "<b>Feb 08, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 160.29,
          high: 161,
          low: 155.03,
          close: 153.93,
          volume: "54390500",
          x: 27
        },
        {
          date: "Feb 9, 2018",
          tooltext:
            "<b>Feb 09, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 157.07,
          high: 157.89,
          low: 150.24,
          close: 155.81,
          volume: "70672600",
          x: 28
        },
        {
          date: "Feb 12, 2018",
          tooltext:
            "<b>Feb 12, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 158.5,
          high: 163.89,
          low: 157.51,
          close: 162.08,
          volume: "60819500",
          x: 29
        },
        {
          date: "Feb 13, 2018",
          tooltext:
            "<b>Feb 13, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 161.95,
          high: 164.75,
          low: 161.65,
          close: 163.71,
          volume: "32549200",
          x: 30
        },
        {
          date: "Feb 14, 2018",
          tooltext:
            "<b>Feb 14, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 163.04,
          high: 167.54,
          low: 162.88,
          close: 166.73,
          volume: "40644900",
          x: 31
        },
        {
          date: "Feb 15, 2018",
          tooltext:
            "<b>Feb 15, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 169.79,
          high: 173.09,
          low: 169,
          close: 172.33,
          volume: "51147200",
          x: 32
        },
        {
          date: "Feb 16, 2018",
          tooltext:
            "<b>Feb 16, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 172.36,
          high: 174.82,
          low: 171.77,
          close: 171.77,
          volume: "40176100",
          x: 33
        },
        {
          date: "Feb 20, 2018",
          tooltext:
            "<b>Feb 20, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 172.05,
          high: 174.26,
          low: 171.42,
          close: 171.19,
          volume: "33930500",
          x: 34
        },
        {
          date: "Feb 21, 2018",
          tooltext:
            "<b>Feb 21, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 172.83,
          high: 174.12,
          low: 171.01,
          close: 170.41,
          volume: "37471600",
          x: 35
        },
        {
          date: "Feb 22, 2018",
          tooltext:
            "<b>Feb 22, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 171.8,
          high: 173.95,
          low: 171.71,
          close: 171.84,
          volume: "30991900",
          x: 36
        },
        {
          date: "Feb 23, 2018",
          tooltext:
            "<b>Feb 23, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 173.67,
          high: 175.65,
          low: 173.54,
          close: 174.83,
          volume: "33812400",
          x: 37
        },
        {
          date: "Feb 26, 2018",
          tooltext:
            "<b>Feb 26, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 176.35,
          high: 179.39,
          low: 176.21,
          close: 178.28,
          volume: "38162200",
          x: 38
        },
        {
          date: "Feb 27, 2018",
          tooltext:
            "<b>Feb 27, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 179.1,
          high: 180.48,
          low: 178.16,
          close: 177.7,
          volume: "38928100",
          x: 39
        },
        {
          date: "Feb 28, 2018",
          tooltext:
            "<b>Feb 28, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 179.26,
          high: 180.62,
          low: 178.05,
          close: 177.44,
          volume: "37782100",
          x: 40
        },
        {
          date: "Mar 01, 2018",
          tooltext:
            "<b>Mar 01, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 178.54,
          high: 179.78,
          low: 172.66,
          close: 174.33,
          volume: "48802000",
          x: 41
        },
        {
          date: "Mar 02, 2018",
          tooltext:
            "<b>Mar 02, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 172.8,
          high: 176.3,
          low: 172.45,
          close: 175.53,
          volume: "38454000",
          x: 42
        },
        {
          date: "Mar 05, 2018",
          tooltext:
            "<b>Mar 05, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 175.21,
          high: 177.74,
          low: 174.52,
          close: 176.14,
          volume: "28401400",
          x: 43
        },
        {
          date: "Mar 06, 2018",
          tooltext:
            "<b>Mar 06, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 177.91,
          high: 178.25,
          low: 176.13,
          close: 175.99,
          volume: "23788500",
          x: 44
        },
        {
          date: "Mar 7, 2018",
          tooltext:
            "<b>Mar 07, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 174.94,
          high: 175.85,
          low: 174.27,
          close: 174.36,
          volume: "31703500",
          x: 45
        },
        {
          date: "Mar 8, 2018",
          tooltext:
            "<b>Mar 08, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 175.48,
          high: 177.12,
          low: 175.07,
          close: 176.26,
          volume: "23774100",
          x: 46
        },
        {
          date: "Mar 9, 2018",
          tooltext:
            "<b>Mar 09, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 177.96,
          high: 180,
          low: 177.39,
          close: 179.29,
          volume: "32185200",
          x: 47
        },
        {
          date: "Mar 12, 2018",
          tooltext:
            "<b>Mar 12, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 180.29,
          high: 182.39,
          low: 180.21,
          close: 181.02,
          volume: "32207100",
          x: 48
        },
        {
          date: "Mar 13, 2018",
          tooltext:
            "<b>Mar 13, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 182.59,
          high: 183.5,
          low: 179.24,
          close: 179.28,
          volume: "31693500",
          x: 49
        },
        {
          date: "Mar 14, 2018",
          tooltext:
            "<b>Mar 14, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 180.32,
          high: 180.52,
          low: 177.81,
          close: 177.75,
          volume: "29368400",
          x: 50
        },
        {
          date: "Mar 15, 2018",
          tooltext:
            "<b>Mar 15, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 178.5,
          high: 180.24,
          low: 178.07,
          close: 177.96,
          volume: "22743800",
          x: 51
        },
        {
          date: "Mar 16, 2018",
          tooltext:
            "<b>Mar 16, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 178.65,
          high: 179.12,
          low: 177.62,
          close: 177.34,
          volume: "39404700",
          x: 52
        },
        {
          date: "Mar 19, 2018",
          tooltext:
            "<b>Mar 19, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 177.32,
          high: 177.47,
          low: 173.66,
          close: 174.63,
          volume: "33446800",
          x: 53
        },
        {
          date: "Mar 20, 2018",
          tooltext:
            "<b>Mar 20, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 175.24,
          high: 176.8,
          low: 174.94,
          close: 174.57,
          volume: "19649400",
          x: 54
        },
        {
          date: "Mar 21, 2018",
          tooltext:
            "<b>Mar 21, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 175.04,
          high: 175.09,
          low: 171.26,
          close: 170.61,
          volume: "37054900",
          x: 55
        },
        {
          date: "Mar 22, 2018",
          tooltext:
            "<b>Mar 22, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 170,
          high: 172.68,
          low: 168.6,
          close: 168.2,
          volume: "41490800",
          x: 56
        },
        {
          date: "Mar 23, 2018",
          tooltext:
            "<b>Mar 23, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 168.39,
          high: 169.92,
          low: 164.94,
          close: 164.31,
          volume: "41028800",
          x: 57
        },
        {
          date: "Mar 26, 2018",
          tooltext:
            "<b>Mar 26, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 168.07,
          high: 173.1,
          low: 166.44,
          close: 172.11,
          volume: "37541200",
          x: 58
        },
        {
          date: "Mar 27, 2018",
          tooltext:
            "<b>Mar 27, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 173.68,
          high: 175.15,
          low: 166.92,
          close: 167.69,
          volume: "40922600",
          x: 59
        },
        {
          date: "Mar 28, 2018",
          tooltext:
            "<b>Mar 28, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 167.25,
          high: 170.02,
          low: 165.19,
          close: 165.84,
          volume: "41668500",
          x: 60
        },
        {
          date: "Mar 29, 2018",
          tooltext:
            "<b>Mar 29, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 167.81,
          high: 171.75,
          low: 166.9,
          close: 167.14,
          volume: "38398500",
          x: 61
        },
        {
          date: "Apr 2, 2018",
          tooltext:
            "<b>Apr 02, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 166.64,
          high: 168.94,
          low: 164.47,
          close: 166.04,
          volume: "37586800",
          x: 62
        },
        {
          date: "Apr 3, 2018",
          tooltext:
            "<b>Apr 03, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 167.64,
          high: 168.75,
          low: 164.88,
          close: 167.74,
          volume: "30278000",
          x: 63
        },
        {
          date: "Apr 4, 2018",
          tooltext:
            "<b>Apr 04, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 164.88,
          high: 172.01,
          low: 164.77,
          close: 170.95,
          volume: "34605500",
          x: 64
        },
        {
          date: "Apr 5, 2018",
          tooltext:
            "<b>Apr 05, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 172.58,
          high: 174.23,
          low: 172.08,
          close: 172.14,
          volume: "26933200",
          x: 65
        },
        {
          date: "Apr 06, 2018",
          tooltext:
            "<b>Apr 06, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 170.97,
          high: 172.48,
          low: 168.2,
          close: 167.73,
          volume: "35005300",
          x: 66
        },
        {
          date: "Apr 09, 2018",
          tooltext:
            "<b>Apr 09, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 169.88,
          high: 173.09,
          low: 169.85,
          close: 169.4,
          volume: "29017700",
          x: 67
        },
        {
          date: "Apr 10, 2018",
          tooltext:
            "<b>Apr 10, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 173,
          high: 174,
          low: 171.53,
          close: 172.58,
          volume: "28408600",
          x: 68
        },
        {
          date: "Apr 11, 2018",
          tooltext:
            "<b>Apr 11, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 172.23,
          high: 173.92,
          low: 171.7,
          close: 171.78,
          volume: "22431600",
          x: 69
        },
        {
          date: "Apr 12, 2018",
          tooltext:
            "<b>Apr 12, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 173.41,
          high: 175,
          low: 173.04,
          close: 173.47,
          volume: "22889300",
          x: 70
        },
        {
          date: "Apr 13, 2018",
          tooltext:
            "<b>Apr 13, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 174.78,
          high: 175.84,
          low: 173.85,
          close: 174.06,
          volume: "25124300",
          x: 71
        },
        {
          date: "Apr 16, 2018",
          tooltext:
            "<b>Apr 16, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 175.03,
          high: 176.19,
          low: 174.83,
          close: 175.14,
          volume: "21578400",
          x: 72
        },
        {
          date: "Apr 17, 2018",
          tooltext:
            "<b>Apr 17, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 176.49,
          high: 178.94,
          low: 176.41,
          close: 177.56,
          volume: "26605400",
          x: 73
        },
        {
          date: "Apr 18, 2018",
          tooltext:
            "<b>Apr 18, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 177.81,
          high: 178.82,
          low: 176.88,
          close: 177.16,
          volume: "20754500",
          x: 74
        },
        {
          date: "Apr 19, 2018",
          tooltext:
            "<b>Apr 19, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 173.76,
          high: 175.39,
          low: 172.66,
          close: 172.14,
          volume: "34808800",
          x: 75
        },
        {
          date: "Apr 20, 2018",
          tooltext:
            "<b>Apr 20, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 170.6,
          high: 171.22,
          low: 165.43,
          close: 165.08,
          volume: "65491100",
          x: 76
        },
        {
          date: "Apr 23, 2018",
          tooltext:
            "<b>Apr 23, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 166.83,
          high: 166.92,
          low: 164.09,
          close: 164.61,
          volume: "36515500",
          x: 77
        },
        {
          date: "Apr 24, 2018",
          tooltext:
            "<b>Apr 24, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 165.67,
          high: 166.33,
          low: 161.22,
          close: 162.31,
          volume: "33692000",
          x: 78
        },
        {
          date: "Apr 25, 2018",
          tooltext:
            "<b>Apr 25, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 162.62,
          high: 165.42,
          low: 162.41,
          close: 163.02,
          volume: "28382100",
          x: 79
        },
        {
          date: "Apr 26, 2018",
          tooltext:
            "<b>Apr 26, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 164.12,
          high: 165.73,
          low: 163.37,
          close: 163.59,
          volume: "27963000",
          x: 80
        },
        {
          date: "Apr 27, 2018",
          tooltext:
            "<b>Apr 27, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 164,
          high: 164.33,
          low: 160.63,
          close: 161.7,
          volume: "35655800",
          x: 81
        },
        {
          date: "Apr 30, 2018",
          tooltext:
            "<b>Apr 30, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 162.13,
          high: 167.26,
          low: 161.84,
          close: 164.63,
          volume: "42427400",
          x: 82
        },
        {
          date: "May 1, 2018",
          tooltext:
            "<b>May 01, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 166.41,
          high: 169.2,
          low: 165.27,
          close: 168.45,
          volume: "53569400",
          x: 83
        },
        {
          date: "May 2, 2018",
          tooltext:
            "<b>May 02, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 175.23,
          high: 177.75,
          low: 173.8,
          close: 175.89,
          volume: "66539400",
          x: 84
        },
        {
          date: "May 3, 2018",
          tooltext:
            "<b>May 03, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 175.88,
          high: 177.5,
          low: 174.44,
          close: 176.21,
          volume: "34068200",
          x: 85
        },
        {
          date: "May 4, 2018",
          tooltext:
            "<b>May 04, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 178.25,
          high: 184.25,
          low: 178.17,
          close: 183.12,
          volume: "56201300",
          x: 86
        },
        {
          date: "May 7, 2018",
          tooltext:
            "<b>May 07, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 185.18,
          high: 187.67,
          low: 184.75,
          close: 184.45,
          volume: "42451400",
          x: 87
        },
        {
          date: "May 8, 2018",
          tooltext:
            "<b>May 08, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 184.99,
          high: 186.22,
          low: 183.67,
          close: 185.34,
          volume: "28402800",
          x: 88
        },
        {
          date: "May 9, 2018",
          tooltext:
            "<b>May 09, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 186.55,
          high: 187.4,
          low: 185.22,
          close: 186.64,
          volume: "23211200",
          x: 89
        },
        {
          date: "May 10, 2018",
          tooltext:
            "<b>May 10, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 187.74,
          high: 190.37,
          low: 187.65,
          close: 189.31,
          volume: "27989300",
          x: 90
        },
        {
          date: "May 11, 2018",
          tooltext:
            "<b>May 11, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 189.49,
          high: 190.06,
          low: 187.45,
          close: 188.59,
          volume: "26212200",
          x: 91
        },
        {
          date: "May 14, 2018",
          tooltext:
            "<b>May 14, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 189.01,
          high: 189.53,
          low: 187.86,
          close: 188.15,
          volume: "20778800",
          x: 92
        },
        {
          date: "May 15, 2018",
          tooltext:
            "<b>May 15, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 186.78,
          high: 187.07,
          low: 185.1,
          close: 186.44,
          volume: "23695200",
          x: 93
        },
        {
          date: "May 16, 2018",
          tooltext:
            "<b>May 16, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 186.07,
          high: 188.46,
          low: 186,
          close: 188.18,
          volume: "19183100",
          x: 94
        },
        {
          date: "May 17, 2018",
          tooltext:
            "<b>May 17, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 188,
          high: 188.91,
          low: 186.36,
          close: 186.99,
          volume: "17294000",
          x: 95
        },
        {
          date: "May 18, 2018",
          tooltext:
            "<b>May 18, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 187.19,
          high: 187.81,
          low: 186.13,
          close: 186.31,
          volume: "18297700",
          x: 96
        },
        {
          date: "May 21, 2018",
          tooltext:
            "<b>May 21, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 188,
          high: 189.27,
          low: 186.91,
          close: 187.63,
          volume: "18400800",
          x: 97
        },
        {
          date: "May 22, 2018",
          tooltext:
            "<b>May 22, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 188.38,
          high: 188.88,
          low: 186.78,
          close: 187.16,
          volume: "15240700",
          x: 98
        },
        {
          date: "May 23, 2018",
          tooltext:
            "<b>May 23, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 186.35,
          high: 188.5,
          low: 185.76,
          close: 188.36,
          volume: "19467900",
          x: 99
        },
        {
          date: "May 24, 2018",
          tooltext:
            "<b>May 24, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 188.77,
          high: 188.84,
          low: 186.21,
          close: 188.15,
          volume: "20401000",
          x: 100
        },
        {
          date: "May 25, 2018",
          tooltext:
            "<b>May 25, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 188.23,
          high: 189.65,
          low: 187.65,
          close: 188.58,
          volume: "17461000",
          x: 101
        },
        {
          date: "May 29, 2018",
          tooltext:
            "<b>May 29, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 187.6,
          high: 188.75,
          low: 186.87,
          close: 187.9,
          volume: "22369000",
          x: 102
        },
        {
          date: "May 30, 2018",
          tooltext:
            "<b>May 30, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 187.72,
          high: 188,
          low: 186.78,
          close: 187.5,
          volume: "18690500",
          x: 103
        },
        {
          date: "May 31, 2018",
          tooltext:
            "<b>May 31, 2018</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeValue Units</b>",
          open: 187.22,
          high: 188.23,
          low: 186.14,
          close: 186.87,
          volume: "27482800",
          x: 104
        }
      ]
    }
  ],
  vtrendlines: [
    {
      line: [
        {
          startvalue: "28",
          color: "#5D62B5",
          displayvalue: "$0.63<br>Dividend",
          showontop: "0"
        },
        {
          startvalue: "91",
          color: "#5D62B5",
          displayvalue: "$0.73<br>Dividend",
          showontop: "0"
        }
      ]
    }
  ]
};

export default class SimpleCandlestickChart extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="candlestick"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}
