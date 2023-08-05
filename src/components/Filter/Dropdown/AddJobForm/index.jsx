import { Plus, Save } from 'components/Icon';
import { useCallback, useContext, useState } from 'react';
import { GlobalContext } from 'context/GlobalContext';
import styles from './addJobForm.module.css';
import { useTranslation } from 'react-i18next';

const AddJobForm = ({ closeDropdown, jobForm, setJobForm }) => {
  const { t } = useTranslation();

  const [inputValue, setInputValue] = useState('');
  const { addJob } = useContext(GlobalContext);

  const handleInputChange = useCallback(event => {
    const value = event.target.value;
    setInputValue(value);
  }, []);

  const handleJobSave = useCallback(event => {
    event.preventDefault();

    if (!inputValue) {
      setJobForm(false);
      return;
    }

    const data = {
      color: '#FFF678',
      label: inputValue,
      value: inputValue.toLowerCase(),
      income: 0,
    };
    addJob(data);
    setJobForm(false);
    closeDropdown();
  }, [addJob, closeDropdown, inputValue, setJobForm]);

  if (!jobForm) {
    return (
      <div className={styles.addItem} onClick={() => setJobForm(true)}>
        <Plus className={styles.icon} />
        <span>{t('FORM.JOB.ADD')}</span>
      </div>
    );
  }

  return (
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
};

export default AddJobForm;
