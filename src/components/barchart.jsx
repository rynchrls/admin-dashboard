import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "../css/transport.css";

function Barchart({ chartData, option }) {
  return (
    <div className="cursor">
      <Bar data={chartData} options={option} />
    </div>
  );
}

export default Barchart;
