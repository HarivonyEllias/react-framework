import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';

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

const labels = ['IV', 'RD', 'PR', 'AD'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Societe Airtel',
      data: [65000000, 40000000, 35000000, 10000000],
      backgroundColor: 'red',
      stack: 'Stack 0',
    },
    {
      label: 'Orange',
      data: [80000000, 30000000, 20000000, 15000000],
      backgroundColor: 'orange',
      stack: 'Stack 1',
    },
    {
      label: 'Telma',
      data: [72000000, 50000000, 15000000, 10000000],
      backgroundColor: 'green',
      stack: 'Stack 2',
    },
    {
        label: 'Bip',
        data: [40000000, 20000000, 17000000, 5000000],
        backgroundColor: 'rgb(255, 99, 132)',
        stack: 'Stack 3',
      },
      {
        label: 'RTA Mobile',
        data: [50000000, 7000000, 2000000, 2000000],
        backgroundColor: 'rgb(75, 192, 192)',
        stack: 'Stack 4',
      },
      {
        label: 'Blueline',
        data: [72000000, 55000000, 20000000, 20000000],
        backgroundColor: 'rgb(53, 162, 235)',
        stack: 'Stack 5',
      },
  ],
};

export default function MediaInvesting() {
  return (
    <div className='p-8 rounded-lg'>
      <Bar options={options} data={data} />
    </div>    
  );
}