import React, { PureComponent } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";

  render() {
    if (this.props.data.status === "red") {
      this.props.data.todayNumber = -this.props.data.todayNumber;
    }
    const data = [
      {
        pv: this.props.data.todayNumber - 8,
        amt: 2400,
      },
      {
        name: "4",
        pv: this.props.data.todayNumber - 9,
        amt: 2210,
      },
      {
        name: "5",
        pv: this.props.data.todayNumber - 10,
        amt: 2290,
      },
      {
        name: "6",
        pv: this.props.data.todayNumber - 6,
        amt: 2000,
      },
      {
        name: "7",
        pv: this.props.data.todayNumber - 4,
        amt: 2181,
      },
      {
        name: "8",
        pv: this.props.data.todayNumber - 3,
        amt: 2500,
      },
      {
        name: "9",
        pv: this.props.data.todayNumber - 2,
        amt: 2100,
      },
      {
        name: "10",
        pv: this.props.data.todayNumber - 3,
        amt: 2100,
      },
      {
        name: "11",
        pv: this.props.data.todayNumber - 2,
        amt: 2500,
      },
      {
        name: "12",
        pv: this.props.data.todayNumber,
        amt: 2100,
      },
      {
        name: "13",
        pv: this.props.data.todayNumber,
        amt: 2100,
      },
    ];
    return (
      <LineChart
        width={900}
        height={250}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey='pv'
          stroke='#8884d8'
          activeDot={{ r: 8 }}
        />
      </LineChart>
    );
  }
}
