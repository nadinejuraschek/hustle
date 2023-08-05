import { Item, ListProps } from './types';
import ListItem from './ListItem';
import Modal from 'components/Modal';
import { Plus } from 'components/Icon';
import styles from './list.module.css';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AddIncomeForm from 'components/AddBar/AddIncomeForm';

const List = ({ list }: ListProps): JSX.Element => {
  const { t } = useTranslation();
  const [incomeForm, setIncomeForm] = useState(false);

  const renderList = useMemo(() => {
    if (!list) return null;

    return list.map(
      (item: Item, index: number): JSX.Element => (
        <ListItem item={item} key={index} />
      )
    );
  }, [list]);

  const renderModalIncomeForm = useMemo(() => {
    if (!incomeForm) return null;

    return (
      <Modal
        handleCancel={() => setIncomeForm(false)}
        title={t('FORM.SOURCE.ADD')}
      >
        <AddIncomeForm hideTitle />
      </Modal>
    );
  }, [incomeForm, t]);

  return (
    <>
      <div className={styles.list}>
        {renderList}
        {/* IF NO JOBS, ADD JOB */}
        <div className={styles.addItem} onClick={() => setIncomeForm(true)}>
          <Plus className={styles.icon} />
          <span>{t('FORM.SOURCE.ADD') as string}</span>
        </div>
      </div>
      {renderModalIncomeForm}
    </>
  );
};

export default List;
