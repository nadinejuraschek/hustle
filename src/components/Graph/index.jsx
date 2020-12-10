// REACT
import { useContext, useEffect, useState } from 'react';

// TRANSLATION
import { useTranslation } from 'react-i18next';

// COMPONENTS
import { Bar, Doughnut } from 'react-chartjs-2';
import Tabs from 'components/Tabs';

// CONTEXT
import { GlobalContext } from 'context/GlobalContext';

// STYLES
import styles from './graph.module.css';

const Graph = ({ list }) => {
  const { t } = useTranslation();
  const [ chartType, setChartType ] = useState('ring');
  const { jobs } = useContext(GlobalContext);

  const labels = jobs.map(job => job.label);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Income',
        data: [
          20,
          140,
          8,
          210,
        ],
        backgroundColor: [
          '#FD9579',
          '#219ad3',
          '#86cc6a',
          '#59286e',
          '#fcf15c',
        ],
      },
    ],
  };

  // DISPLAY TOTAL INCOMES


  // SET BALANCE
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    let total = 0;
    list.map(transaction => {
      return (total = total + parseInt(transaction.amount));
    });
    setBalance((Math.round((total * 1) * 100) / 100).toFixed(2));
  }, [list]);

  return (
    <div className={styles.container}>
      <Tabs tabs={[ { label: 'Donut', value: 'donut' }, { label: 'Bar', value: 'bar' } ]} handleClick={setChartType} />
      <div className={styles.graph}>
      {
        chartType.value === 'bar' ?
        <Bar
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: false,
            },
            scales: {
              xAxes: [{
                ticks: { display: true },
                gridLines: {
                    display: false,
                    drawBorder: false
                }
              }],
              yAxes: [{
                  ticks: { display: true },
                  gridLines: {
                      display: true,
                      drawBorder: true
                  }
              }]
          }
          }}
        />
        :
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
              xAxes: [{
                ticks: { display: false },
                gridLines: {
                    display: false,
                    drawBorder: false
                }
              }],
              yAxes: [{
                  ticks: { display: false },
                  gridLines: {
                      display: false,
                      drawBorder: true
                  }
              }]
          }
          }}
        />
      }
      </div>
      <div className={styles.total}>
        <span className={styles.label}>{t('BOARD.TOTAL')}:</span>
        <span>{balance} €</span>
      </div>
    </div>
  );
};

export default Graph;
