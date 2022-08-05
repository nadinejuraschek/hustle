import { capitalize } from 'helpers';
import styles from './listItem.module.css';

const ListItem = ({ item }) => {
  const { job, source, amount } = item;
  const amountNum = (Math.round(amount * 1 * 100) / 100).toFixed(2);

  return (
    <div className={styles.listItem}>
      <div className={styles.details}>
        <div className={styles.job}>{capitalize(job)}</div>
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
