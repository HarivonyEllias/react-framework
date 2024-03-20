import { useEffect, useState } from 'react';
import { Chart, ChartData, PieController, CategoryScale, ArcElement } from 'chart.js';
import axios from 'axios';
import PieChart from './childrens/PieChart';

Chart.register(PieController, CategoryScale, ArcElement);

interface DataItem {
  advertiser: string;
  amount: number;
}

export default function Panel() {
  const [chartData, setChartData] = useState<ChartData<"pie">>({
    labels: [],
    datasets: [
      {
        label: "Nombre de panneaux",
        data: [],
        backgroundColor: [],
      },
    ],
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8080/outdoor-registers/v1/count-panels-by-advertiser');
        const data: { payload: [string | null, number][] } = response.data;
        const newData: DataItem[] = data.payload.map(([advertiser, amount]) => ({
          advertiser: advertiser || 'Unknown',
          amount: amount,
        }));

        setChartData({
          labels: newData.map(item => item.advertiser),
          datasets: [{
            label: "Nombre de panneaux",
            data: newData.map(item => item.amount),
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(75, 192, 192)",
              "rgb(53, 162, 235)",
            ],
          }],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="App shadow-xl py-8 rounded-sm">
      <PieChart chartData={chartData} />
    </div>
  );
}
