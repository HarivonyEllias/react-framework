import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from '../../axios/index';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  plugins: {
    title: {
      display: true,
      text: '',
    },
    legend: {
      position: "bottom",
    }
  },
  responsive: true,
  interaction: {
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};
export default function Localisation() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    axios.get('/panel-formats/Stats-by-localisation')
      .then((res) => {
        const payload = res.data.payload;
        const labels = payload.label;
        setData({ labels, datasets: payload.datasets });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setData([]); // Set an empty array in case of an error or no data
      });
  }, []);

  return (
    <div className='shadow-xl py-8 px-32 rounded-lg'>
      <h2 style={{ textAlign: "center" }}>Par localisation</h2>
      {data ? (
        <Bar options={options} data={data} />
      ) : (
        <p>No data available for localisation statistics.</p>
      )}
    </div>
  );
}
