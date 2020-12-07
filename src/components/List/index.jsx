// REACT
import {
  // useContext,
  useState
} from 'react';

// COMPONENTS
import Modal from 'components/Modal';
import { Plus } from 'components/Icon';
import Form from 'components/Form';

// CONTEXT
// import { GlobalContext } from 'context/GlobalContext';

// STYLES
import styles from './list.module.css';

// HELPERS
const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const ListItem = ({ item }) => {
  const { job, source, amount } = item;
  const amountNum = amount * 1;

  return (
    <div className={styles.listItem}>
      <div className={styles.details}>
        <div className={styles.job}>{capitalize(job)}</div>
        <div className={styles.source}>{source}</div>
      </div>
      <div className={`${styles.amount} ${amountNum >= 0 ? styles.positive : styles.negative}`}>
        {amountNum >= 0 ? '+ ' : '- '} { amountNum } €
      </div>
    </div>
  );
};

const List = ({ list}) => {
  const [ incomeForm, setIncomeForm ] = useState(false);
  // const { jobs } = useContext(GlobalContext);

  return (
    <>
    <div className={styles.list}>
      {
        list && list.map((item, index) => <ListItem item={item} key={index} />)
      }
      {/* IF NO JOBS, ADD JOB */}
      <div className={styles.addItem} onClick={() => setIncomeForm(true)}>
        <Plus className={styles.icon} />
        <span>Add Income</span>
      </div>
    </div>
    {
      incomeForm && <Modal title="Add Income" handleCancel={() => setIncomeForm(false)}><Form /></Modal>
    }
    </>
  );
};

export default List;
