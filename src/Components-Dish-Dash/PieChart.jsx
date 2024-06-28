import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Cash', 'Mpesa'],
  datasets: [
    {
      label: 'ORDERS',
      data: [10, 20],
      backgroundColor: [
        'blue',
        ' #4ade80'
      ],
      borderCgolor: [
        'blue',
        'green'
      ],
      borderWidth: 0,
    },
  ],
};
const PieChart = () => {
  return (
    <div>
        <Doughnut data={data} />
    </div>
  )
}

export default PieChart