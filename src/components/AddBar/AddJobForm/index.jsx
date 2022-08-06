import Button from 'components/Button';
import Input from 'components/Input';
import styles from './addJobForm.module.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const AddJobForm = () => {
  const { t } = useTranslation();

  const [inputValue, setInputValue] = useState('');
  const handleInputChange = event => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleJobSave = event => {
    event.preventDefault();
    const data = { label: inputValue, value: inputValue.toLowerCase() };
    console.log('job data ', data);
    // addJob(data);
  };

  return (
    <div className={styles.addJob}>
      <h2 className={styles.title}>{t('FORM.JOB.ADD')}</h2>
      <Input
        className={styles.input}
        label={t('FORM.JOB.LABEL')}
        onChange={handleInputChange}
        placeholder={t('FORM.JOB.NEW')}
        type='text'
        value={inputValue.label}
      />
      <Button label={t('FORM.SUBMIT')} onClick={() => handleJobSave()} />
    </div>
  );
};

export default AddJobForm;
