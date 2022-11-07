import { ChangeEvent, MouseEvent, useState } from 'react';

import Button from 'components/Button';
import Input from 'components/Input';
import styles from './addJobForm.module.css';
import { useTranslation } from 'react-i18next';

const AddJobForm = (): JSX.Element => {
  const { t } = useTranslation();

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: ChangeEvent): void => {
    const value = (event.target as HTMLInputElement).value;
    setInputValue(value);
  };

  const handleJobSave = (event: MouseEvent): void => {
    event.preventDefault();
    const data = { label: inputValue, value: inputValue.toLowerCase() };
    console.log('job data ', data);
    // addJob(data);
  };

  return (
    <div className={styles.addJob}>
      <h2 className={styles.title}>{t('FORM.JOB.ADD') as string}</h2>
      <Input
        className={styles.input}
        handleChange={handleInputChange}
        label={t('FORM.JOB.LABEL')}
        placeholder={t('FORM.JOB.NEW')}
        type='text'
        value={inputValue}
      />
      <Button label={t('FORM.SUBMIT')} onClick={handleJobSave} />
    </div>
  );
};

export default AddJobForm;
