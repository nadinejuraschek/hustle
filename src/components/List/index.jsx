import Form from 'components/Form';
// COMPONENTS
import Modal from 'components/Modal';
import { Plus } from 'components/Icon';
// HELPERS
import { capitalize } from 'helpers';
// STYLES
import styles from './list.module.css';
// REACT
import { useState } from 'react';
// TRANSLATION
import { useTranslation } from 'react-i18next';

// CONTEXT
// import { GlobalContext } from 'context/GlobalContext';

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

const List = ({ list }) => {
  const { t } = useTranslation();
  const [incomeForm, setIncomeForm] = useState(false);
  // const { jobs } = useContext(GlobalContext);

  return (
    <>
      <div className={styles.list}>
        {list &&
          list.map((item, index) => <ListItem item={item} key={index} />)}
        {/* IF NO JOBS, ADD JOB */}
        <div className={styles.addItem} onClick={() => setIncomeForm(true)}>
          <Plus className={styles.icon} />
          <span>{t('FORM.SOURCE.ADD')}</span>
        </div>
      </div>
      {incomeForm && (
        <Modal
          title={t('FORM.SOURCE.ADD')}
          handleCancel={() => setIncomeForm(false)}
        >
          <Form />
        </Modal>
      )}
    </>
  );
};

export default List;
