// REACT
import { useState } from 'react';

// COMPONENTS
import Modal from 'components/Modal';
import { Plus } from 'components/Icon';
import Form from 'components/Form';

// STYLES
import styles from './list.module.css';

const ListItem = ({ item }) => {
  const { job, source, amount } = item;

  return (
    <div className={styles.listItem}>
      <div className={styles.details}>
        <div className={styles.job}>{job}</div>
        <div className={styles.source}>{source}</div>
      </div>
      <div className={`${styles.amount} ${amount >= 0 ? styles.positive : styles.negative}`}>
        {amount >= 0 ? '+ ' : '- '} { amount } €
      </div>
    </div>
  );
};

const List = ({ list }) => {
  const [ incomeForm, setIncomeForm ] = useState(false);

  return (
    <div className={styles.list}>
      {
        list && list.map((item, index) => <ListItem item={item} key={index} />)
      }
      {
        incomeForm && <Modal title="Add Income"><Form handleCancel={() => setIncomeForm(false)} /></Modal>
      }
      {/* IF NO JOBS, ADD JOB */}
      <div className={styles.addItem} onClick={() => setIncomeForm(true)}>
        <Plus className={styles.icon} />
        <span>Add Income</span>
      </div>
    </div>
  );
};

export default List;
