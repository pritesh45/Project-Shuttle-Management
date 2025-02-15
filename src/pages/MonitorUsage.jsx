// import React from "react";
// import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";

// ChartJS.register(BarElement, CategoryScale, LinearScale);

// const MonitorUsage = () => {
//   const data = {
//     labels: ["8 AM", "10 AM", "12 PM", "2 PM", "4 PM", "6 PM"],
//     datasets: [
//       {
//         label: "Passengers Per Hour",
//         data: [15, 30, 25, 40, 20, 35],
//         backgroundColor: "rgba(54, 162, 235, 0.6)",
//       },
//     ],
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h2 className="text-2xl font-semibold mb-4">Shuttle Usage & Demand</h2>
//       <div className="bg-white p-4 rounded-lg shadow-md">
//         <Bar data={data} />
//       </div>
//     </div>
//   );
// };

// export default MonitorUsage;


import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const MonitorUsage = () => {
  const data = {
    labels: ["8 AM", "10 AM", "12 PM", "2 PM", "4 PM", "6 PM"],
    datasets: [
      {
        label: "Passengers Per Hour",
        data: [15, 30, 25, 40, 20, 35],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-4">📊 Monitor Shuttle Usage</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Bar data={data} />
      </div>
    </div>
  );
};

export default MonitorUsage;
