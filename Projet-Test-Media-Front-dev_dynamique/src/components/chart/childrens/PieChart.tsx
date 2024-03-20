import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement
)
interface PieChartProps {
  chartData: any; // Remplacez le type "any" par le type approprié de vos données de graphique
}

const PieChart: React.FC<PieChartProps> = ({ chartData }) => {
  return (
 
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Nombre de panneaux</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Total pannaux: 36",
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;
