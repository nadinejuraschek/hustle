import { Bar } from 'react-chartjs-2';
import { GraphTypeProps } from './types';

const BarGraph = ({ data }: GraphTypeProps): JSX.Element => (
  <Bar
    data={data}
    options={{
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            ticks: { display: true },
            gridLines: {
              display: false,
              drawBorder: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: { display: true },
            gridLines: {
              display: true,
              drawBorder: true,
            },
          },
        ],
      },
    }}
  />
);

export default BarGraph;
