import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
} from "chart.js";

// Register necessary components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler
);

const SampleChat = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Price Change",
        data: [78, 69, 80, 69, 80, 25],
        fill: true,
        // backgroundColor: , // Light orange background fill
        borderColor: "#FF5722", // Orange line color
        borderWidth: 2,
        tension: 0.4, // Smooth curve
        pointRadius: 0, // No points
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false, // Hide X axis labels
      },
      y: {
        display: false, // Hide Y axis labels
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
    },
    elements: {
      line: {
        tension: 0.3, // Smooth curve (can adjust this to your preference)
      },
    },
  };

  return (
    <div className="relative h-24 w-48  p-2 rounded-lg">
      <Line data={data} options={options} />
    </div>
  );
};

export default SampleChat;
