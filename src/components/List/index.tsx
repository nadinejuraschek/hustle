import { Item, ListProps } from './types';

import Form from 'components/Form';
import ListItem from './ListItem';
import Modal from 'components/Modal';
import { Plus } from 'components/Icon';
import styles from './list.module.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const List = ({ list }: ListProps): JSX.Element => {
  const { t } = useTranslation();
  const [incomeForm, setIncomeForm] = useState(false);

  const renderList = (): JSX.Element[] => {
    return list.map(
      (item: Item, index: number): JSX.Element => (
        <ListItem item={item} key={index} />
      )
    );
  };

  return (
    <>
      <div className={styles.list}>
        {list && renderList()}
        {/* IF NO JOBS, ADD JOB */}
        <div className={styles.addItem} onClick={() => setIncomeForm(true)}>
          <Plus className={styles.icon} />
          <span>{t('FORM.SOURCE.ADD') as string}</span>
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
