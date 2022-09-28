import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import React from 'react';
import ChartDataLabels from 'chartjs-plugin-datalabels';
// import TotalMonthlyFee from '../component/TotalFee';
Chart.register(ArcElement);

//http request

const data = {
  labels: [
    'Principal & interest',
    'Property tax',
    "Homeowner's insurance",
    'PMI',
    'HOA fees',
  ],
  datasets: [
    {
      data: [20, 19, 3, 5, 2],
      backgroundColor: [
        'rgba(225,99,132,0.2)',
        'rgba(54,162,235,0.2)',
        'rgba(255,206,86,0.2)',
        'rgba(153,102,255,0.2)',
        'rgba(255,159,64,0.2)',
      ], // match with the labels
      borderColor: [
        'rgba(225,99,132,0.2)',
        'rgba(54,162,235,0.2)',
        'rgba(255,206,86,0.2)',
        'rgba(153,102,255,0.2)',
        'rgba(255,159,64,0.2)',
      ],
      borderWidth: 1,
      hoverOffset: 6,
    },
  ],
  options: {
    legend: {
      display: false,
    },
    plugins: {
      datalabels: {
        display: true,
        formatter: (val, ctx) => {
          // Grab the label for this value
          const label = ctx.chart.data.labels[ctx.dataIndex];

          // Format the number with 2 decimal places
          const formattedVal = Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
          }).format(val);

          // Put them together
          return `${label}: ${formattedVal}`;
        },
        color: '#B0E0E6',
        backgroundColor: '#FFFAF0',
      },
    },
  },
};

function DoughnutChart() {
  return (
    <>
      <div style={{ width: '300px', margin: '60 auto' }}>
        <h1>Monthly payment breakdown</h1>
        <Doughnut
          data={data}
          plugins={[ChartDataLabels]}
          options={data.options}
        />
      </div>
      {/* <TotalMonthlyFee /> */}
    </>
  );
}

export default DoughnutChart;
