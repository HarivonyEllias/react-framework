import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

interface ApexChartProps {}

const ApexChart: React.FC<ApexChartProps> = () => {
    const [dataValue, setDataValue] = useState<number>(50); // Utilisez les données fournies par votre API ici
  const maxValue = 100; // Valeur maximale pour le donut
  const blueValue = dataValue;
  const greyValue = maxValue - blueValue;

  const options: ApexCharts.ApexOptions = {
    chart: {
      width: 380,
      type: 'donut',
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70%', // Taille du donut
        }
      }
    },
    dataLabels: {
      enabled: false,
      formatter: function (val) {
        return Math.round(val as number) + '%'; // Formate la valeur en pourcentage
      },
      style: {
        fontSize: '20px', // Taille de la police pour le pourcentage
      },
      offsetY: -10, // Décalage vertical pour centrer le pourcentage
    },
    colors: ['#007AB3', '#CCCCCC'], // Couleurs bleue et grise
    legend: {
      show: false
    }
  };

  const series = [blueValue, greyValue];

  return (
    <div>
      <div>
        <div className="chart-wrap">
          <div id="chart">
            <ReactApexChart options={options} series={series} type="donut" width={200} />
          </div>
        </div>
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
