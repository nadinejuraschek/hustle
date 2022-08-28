import { ChangeEvent, MouseEvent, useContext, useState } from 'react';

import Button from 'components/Button';
import ColorPicker from 'components/ColorPicker';
import { GlobalContext } from 'context/GlobalContext';
import Input from 'components/Input';
import styles from './addJobForm.module.css';
import { useTranslation } from 'react-i18next';
import { Job } from 'context/types';

const AddJobForm = (): JSX.Element => {
  const { t } = useTranslation();

  const { addJob, jobs } = useContext(GlobalContext);

  const [jobValue, setJobValue] = useState('');
  const [colorValue, setColorValue] = useState('');

  const handleJobChange = (event: ChangeEvent): void => {
    const value = (event.target as HTMLInputElement).value;
    setJobValue(value);
  };

  const handleJobSave = (event: MouseEvent): void => {
    event.preventDefault();
    const data = {
      color: colorValue,
      label: jobValue,
      value: jobValue.toLowerCase().replace(/\s/g, ''),
    };

    const jobAlreadyAdded = jobs.find(
      (job: Job): boolean => job.label === jobValue
    );

    if (!jobAlreadyAdded) addJob(data);
  };

  return (
    <div className={styles.addJob}>
      <h2 className={styles.title}>{t('FORM.JOB.ADD') as string}</h2>
      <Input
        className={styles.input}
        handleChange={handleJobChange}
        label={t('FORM.JOB.LABEL')}
        placeholder={t('FORM.JOB.NEW')}
        type='text'
        value={jobValue}
      />
      <ColorPicker
        handleChange={setColorValue}
        label={t('FORM.COLOR.LABEL')}
        value={colorValue}
      />
      <Button label={t('FORM.SUBMIT')} onClick={handleJobSave} />
    </div>
  );
};

export default AddJobForm;
