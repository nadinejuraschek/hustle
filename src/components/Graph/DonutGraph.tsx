import { Doughnut } from 'react-chartjs-2';
import { GraphTypeProps } from './types';

const DonutGraph = ({ data }: GraphTypeProps): JSX.Element => {
  data.datasets[0] = {
    ...data.datasets[0],
    borderWidth: 0,
    hoverBorderWidth: 0,
  };

  return (
    <Doughnut
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'right',
          },
        },
        scales: {
          x: {
            display: false,
            grid: { display: false },
            ticks: { display: false },
          },
          y: {
            display: false,
            grid: { display: false },
            ticks: { display: false },
          },
        },
      }}
    />
  );
};

export default DonutGraph;
