// REACT
import { useState } from 'react';

// TRANSLATION
import { useTranslation } from 'react-i18next';

// COMPONENTS
import Button from 'components/Button';
import Input from 'components/Input';

// STYLES
import styles from './addbar.module.css';

const AddBar = () => {
  const { t } = useTranslation();

  // ADD JOB
  const [ inputValue, setInputValue ] = useState('');
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
    <div className={styles.container}>
      <div className={styles.addJob}>
        <h2>{t('FORM.JOB.ADD')}</h2>
        <Input
          label={t('FORM.JOB.LABEL')}
          onChange={handleInputChange}
          placeholder={t('FORM.JOB.NEW')}
          type="text"
          value={inputValue.label}
        />
        <Button label={t('FORM.SUBMIT')} onClick={() => handleJobSave()} />
      </div>
      <div className={styles.addIncome}>
        <h2>{t('FORM.SOURCE.ADD')}</h2>
        
      </div>
    </div>
  );
};

export default AddBar;