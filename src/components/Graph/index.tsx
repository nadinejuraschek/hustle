import { GraphData, GraphProps } from './types';
import { useContext, useEffect, useState } from 'react';

import BarGraph from './BarGraph';
import DonutGraph from './DonutGraph';
import { GlobalContext } from 'context/GlobalContext';
import { Job } from '../../context/types';
import { Tab } from '../Tabs/types';
import Tabs from 'components/Tabs';
import styles from './graph.module.css';
import { useTranslation } from 'react-i18next';

const Graph = ({ list }: GraphProps): JSX.Element => {
  const { t } = useTranslation();
  const [chartType, setChartType] = useState<Tab>({
    label: 'Donut',
    value: 'ring',
  });
  const { jobs, incomeList } = useContext(GlobalContext);

  const labels = jobs.map((job: Job): string => job.label);

  // // DISPLAY TOTAL INCOME
  // useEffect(() => {
  //   // loop over jobs
  //   jobs.map(job => {
  //     const name = job.value;
  //     let total = 0;
  //     // loop over transactions
  //     // find all matching transactions
  //     const sortedTransactions = list.filter(transaction => transaction.job === name);
  //     // loop over matching transactions to add incomes
  //     sortedTransactions.map(item => {
  //       total = total + item.amount
  //     });
  //     // create array entry
  //     // push to array
  //     return graphIncomes.push(total);
  //   });
  // }, [jobs, list]);

  const data: GraphData = {
    labels: labels,
    datasets: [
      {
        label: 'Income',
        data: incomeList,
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

  // SET BALANCE
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    let total = 0;
    list.map(transaction => {
      return (total = total + transaction.amount);
    });
    setBalance(parseFloat((Math.round(total * 1 * 100) / 100).toFixed(2)));
  }, [list]);

  return (
    <div className={styles.container}>
      <Tabs
        tabs={[
          { label: 'Donut', value: 'ring' },
          { label: 'Bar', value: 'bar' },
        ]}
        handleClick={setChartType}
      />
      <div className={styles.graph}>
        {chartType.value === 'bar' ? (
          <BarGraph data={data} />
        ) : (
          <DonutGraph data={data} />
        )}
      </div>
      <div className={styles.total}>
        <span className={styles.label}>{t('BOARD.TOTAL') as string}:</span>
        <span>{balance} €</span>
      </div>
    </div>
  );
};

export default Graph;
