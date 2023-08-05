import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
} from 'chart.js';
import { GraphData, GraphProps } from './types';
import { useContext, useEffect, useMemo, useState } from 'react';
import BarGraph from './BarGraph';
import DonutGraph from './DonutGraph';
import { GlobalContext } from 'context/GlobalContext';
import { Job } from '../../context/types';
import { Tab } from '../Tabs/types';
import Tabs from 'components/Tabs';
import styles from './graph.module.css';
import { useTranslation } from 'react-i18next';

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale);

const Graph = ({ list }: GraphProps): JSX.Element => {
  const { t } = useTranslation();
  const [chartType, setChartType] = useState<Tab>({
    label: 'Donut',
    value: 'ring',
  });
  const { jobs, incomeList } = useContext(GlobalContext);

  const labels = useMemo(() => jobs.map((job: Job): string => job.label), [jobs]);
  const colors = useMemo(() => jobs.map((job: Job): string => job.color), [jobs]);
  const transparentColors = useMemo(() => jobs.map((job: Job): string => `${job.color}80`), [jobs]);

  const data: GraphData = useMemo(() => ({
    labels: labels,
    datasets: [
      {
        label: 'Income',
        data: incomeList,
        backgroundColor: transparentColors,
        borderColor: colors,
        hoverBackgroundColor: colors,
      },
    ],
  }), [colors, incomeList, labels, transparentColors]);

  // SET BALANCE
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    let total = 0;
    list.map(transaction => {
      return (total = total + transaction.amount);
    });
    setBalance(parseFloat((Math.round(total * 1 * 100) / 100).toFixed(2)));
  }, [list]);

  const renderGraph = useMemo(() => {
    if (chartType.value === 'bar') {
      return <BarGraph data={data} />;
    }

    return <DonutGraph data={data} />;
  }, [chartType, data]);

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
        {renderGraph}
      </div>
      <div className={styles.total}>
        <span className={styles.label}>{t('BOARD.TOTAL') as string}:</span>
        <span>{balance} €</span>
      </div>
    </div>
  );
};

export default Graph;
