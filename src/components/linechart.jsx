import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "../css/transport.css";

function Linechart({ chartData, option }) {
  return (
    <div className="cursor">
      <Line data={chartData} options={option} />
    </div>
  );
}

export default Linechart;
