import { Plus, Save } from 'components/Icon';
import { useContext, useState } from 'react';

import { GlobalContext } from 'context/GlobalContext';
import styles from './addJobForm.module.css';
import { useTranslation } from 'react-i18next';

const AddJobForm = ({ jobForm, setJobForm }) => {
  const { t } = useTranslation();

  const [inputValue, setInputValue] = useState('');
  const { addJob } = useContext(GlobalContext);

  const handleInputChange = event => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleJobSave = event => {
    event.preventDefault();
    const data = {
      label: inputValue,
      value: inputValue.toLowerCase(),
      income: 0,
    };
    addJob(data);
    setJobForm(false);
  };

  const addItem = (
    <div className={styles.addItem} onClick={() => setJobForm(true)}>
      <Plus className={styles.icon} />
      <span>{t('FORM.JOB.ADD')}</span>
    </div>
  );

  const form = (
    <div className={styles.formItem}>
      <input
        className={styles.input}
        placeholder={t('FORM.JOB.NEW')}
        onChange={handleInputChange}
        value={inputValue.label}
      />
      <div className={styles.saveBtn} onClick={handleJobSave}>
        <Save className={styles.icon} />
      </div>
    </div>
  );

  return jobForm ? form : addItem;
};

export default AddJobForm;
