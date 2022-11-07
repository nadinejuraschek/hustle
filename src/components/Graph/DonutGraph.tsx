import { Doughnut } from 'react-chartjs-2';
import { GraphTypeProps } from './types';

const DonutGraph = ({ data }: GraphTypeProps): JSX.Element => (
  <Doughnut
    data={data}
    options={{
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: true,
        position: 'right',
      },
      scales: {
        xAxes: [
          {
            ticks: { display: false },
            gridLines: {
              display: false,
              drawBorder: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: { display: false },
            gridLines: {
              display: false,
              drawBorder: true,
            },
          },
        ],
      },
    }}
  />
);

export default DonutGraph;
