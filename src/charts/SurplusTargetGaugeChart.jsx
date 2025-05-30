import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";

Chart.register(ArcElement, Tooltip);

const GaugeChart = ({ finance }) => {
    const targetIncome = JSON.parse(localStorage.getItem("targetIncome"))
    const targetExpense = JSON.parse(localStorage.getItem("targetExpense"))
    let goal = (targetIncome - targetExpense)

    let currentList = Object.keys(finance).map(key => finance[key].difference)
    let current = currentList.reduce((sum, val) => sum + val, 0)

    
    const percentage = Math.min(current / goal, 1);
    const data = {
    labels: ["Current Surplus", "Target Surplus"],
    datasets: [
        {
        data: [percentage, 1 - percentage],
        backgroundColor: ["rgba(75, 192, 192, 0.7)", "rgba(255, 99, 132, 0.7)"],
        borderWidth: 0,
        circumference: 180,
        rotation: -90,
        cutout: "70%",
        },
    ],
    };

    const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        tooltip: {
        callbacks: {
            label: function (context) {
            if (context.label === "Progress") {
                return `Progress: ${(percentage * 100).toFixed(1)}%`;
            }
            return null;
            },
        },
        },
    },
    };

    return (
    <div style={{ width: "300px", height: "150px", margin: "auto" }}>
        <Doughnut data={data} options={options} />
        <div style={{
            textAlign: "center",
            fontSize: "1.5rem",
            fontWeight: "bold",
            transform: "translateY(-50%)",
        }}>
        {(percentage * 100).toFixed(1)}%
        </div>
    </div>
    );
};

export default GaugeChart;
