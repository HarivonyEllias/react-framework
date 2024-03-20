import axios from '../../axios';
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Nombre de panneau par format',
    },
  },
  responsive: true,
  maintainAspectRatio: true,
  aspectRation: 2,
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

export default function Format() {
  const [labels, setLabels] = useState<string[]>([]);
  const [data, setData] = useState<number[]>([]);
  useEffect(() => {
    axios.get('/outdoor-registers/v1/count-panels-by-format').then((res) => {
      const payload = res.data.payload;
      let labels = [];
      let data = [];
      for (let i = 0; i < payload.length; i++) {
        labels.push(payload[i][0]);
        data.push(payload[i][1]);
      }
      setLabels(labels);
      setData(data);
    });
  }, []);

  const datasets = {
    labels,
    datasets: [
      {
        data: data,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(123, 210, 123)',
          'rgb(255, 204, 0)',
          'rgb(165, 42, 42)',
        ],
      },
    ],
  };

  return (
    <div className='shadow-xl p-8 rounded-lg'>
      <h2 style={{ textAlign: 'center' }}>Par format de panneaux</h2>
      <Bar options={options} data={datasets} />
    </div>
  );
}
