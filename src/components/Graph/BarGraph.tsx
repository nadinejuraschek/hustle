import { Bar } from 'react-chartjs-2';
import { GraphTypeProps } from './types';

const BarGraph = ({ data }: GraphTypeProps): JSX.Element => {
  data.datasets[0] = {
    ...data.datasets[0],
    borderWidth: 2,
    hoverBorderWidth: 2,
  };

  return (
    <Bar
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { display: true },
          },
          y: {
            ticks: { display: true },
          },
        },
      }}
    />
  );
};

export default BarGraph;
