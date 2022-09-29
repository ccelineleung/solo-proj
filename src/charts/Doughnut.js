import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import React from 'react';
import ChartDataLabels from 'chartjs-plugin-datalabels';
// import TotalMonthlyFee from '../component/TotalFee';
Chart.register(ArcElement);

//http request

function DoughnutChart({
  monthlyPayment,
  propertyTax,
  homeInsur,
  PMIFee,
  HOAFee,
  finalMonsPayment,
}) {
  const data = {
    labels: ['P & I', 'Prop. tax', 'HOI', 'PMI', 'HOA'],
    datasets: [
      {
        data: [monthlyPayment, propertyTax, homeInsur, PMIFee, HOAFee],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(75, 192, 192)',
        ], // match with the labels
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(75, 192, 192)',
        ],
        borderWidth: 5,
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
            if (val !== 0) {
              return `${label}${formattedVal}`;
            }
          },
          color: 'black',
        },
      },
    },
  };

  return (
    <>
      <div width='590' height='700' className='chartjs-render-monitor'>
        <h1>Monthly payment breakdown</h1>
        <Doughnut
          data={data}
          plugins={[ChartDataLabels]}
          options={data.options}
        />
      </div>
    </>
  );
}

export default DoughnutChart;
