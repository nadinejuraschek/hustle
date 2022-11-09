import { GlobalContext } from 'context/GlobalContext';
import styles from './listItem.module.css';
import { useContext, useMemo } from 'react';

const ListItem = ({ item }) => {
  const { job, source, amount } = item;
  const amountNum = (Math.round(amount * 1 * 100) / 100).toFixed(2);

  const { jobs } = useContext(GlobalContext);

  const jobDetails = useMemo(
    () => jobs.find(item => item.value === job),
    [job, jobs]
  );

  return (
    <div
      className={styles.listItem}
      style={{
        backgroundColor: `${jobDetails.color}08`,
        borderLeft: `6px solid ${jobDetails.color}`,
      }}
    >
      <div className={styles.details}>
        <div className={styles.job}>{jobDetails.label}</div>
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
