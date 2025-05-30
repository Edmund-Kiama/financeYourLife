import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { callback } from "chart.js/helpers";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = ({finance}) => {
  const data = {
    labels:["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Surplus/Deficit (KSh)",
        data: Object.keys(finance).map(key => finance[key].difference),
        backgroundColor: (context) => {
            const value = context.raw;
            return value < 0 ? "rgba(255, 99, 132, 0.7)" : "rgba(75, 192, 192, 0.7)";
          },
          borderColor: (context) => {
            const value = context.raw;
            return value < 0 ? "rgba(255, 99, 132, 1)" : "rgba(75, 192, 192, 1)";
          },
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom" },
      tooltip: { enabled: true },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { 
            display: true,
            text: "Surplus/Deficit (KSh)",
            color: "#666",
            // font: { size:16 }
        },
        ticks: {
            callback: value => `${value.toLocaleString()}`,
            color: "#333",
            // font: { size:14 }
        }
      },
      x: {
        ticks: {
          color: "#333",
        //   font: { size: 14 }
        },
        title: {
          display: true,
          text: "Month",
          color: "#666",
        //   font: { size: 16 }
        }}
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
