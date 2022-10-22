import { GlobalContext } from 'context/GlobalContext';
import styles from './listItem.module.css';
import { useContext } from 'react';

const ListItem = ({ item }) => {
  const { job, source, amount } = item;
  const amountNum = (Math.round(amount * 1 * 100) / 100).toFixed(2);

  const { jobs } = useContext(GlobalContext);

  const getJobLabel = () => {
    return jobs.find(item => item.value === job).label;
  };

  return (
    <div className={styles.listItem}>
      <div className={styles.details}>
        <div className={styles.job}>{getJobLabel()}</div>
        <div className={styles.source}>{source}</div>
      </div>
      <div
        className={`${styles.amount} ${
          amountNum >= 0 ? styles.positive : styles.negative
        }`}
      >
        {amountNum >= 0 ? '+ ' : '- '} {amountNum} €
      </div>
    </div>
  );
};

export default ListItem;
