// REACT
import { useContext, useState } from 'react';

// DEPENDENCIES
import { ColorPicker } from 'material-ui-color';
import * as yup from 'yup';

// TRANSLATION
import { useTranslation } from 'react-i18next';

// CONTEXT
import { JobContext } from 'context/JobContext';

// COMPONENTS
import Input from 'components/Input';
import Button from 'components/Button';

// STYLES
import styles from './form.module.css';

const Form = () => {
  const { t } = useTranslation();
  const { jobs, setJobs } = useContext(JobContext);
  

  // SCHEMA VALIDATION
  const schema = yup.object().shape({
    job: yup
      .string()
      .required(t('FORM.JOB.ERROR'))
      .oneOf(jobs, t('FORM.TOPIC.ERROR')),
    source: yup
      .string()
      .lowercase()
      .required(t('FORM.SOURCE.ERROR')),
    amount: yup
      .number()
      .required(t('FORM.AMOUNT.ERROR')),
  });

  return (
    <form
      className={styles.form}
      autoComplete="off"
      // onSubmit={() => handleSubmit(formSubmit)}
    >
      <Input
        // error={errors.job}
        label={t('FORM.JOB.LABEL')}
        name="job"
        selecter
      />
      <Input
        // error={errors.source}
        label={t('FORM.SOURCE.LABEL')}
        name="source"
      />
      <div className={styles.twoFields}>
        <Input
          currency
          // error={errors.amount}
          label={t('FORM.AMOUNT.LABEL')}
          name="amount"
        />
        <div className={styles.color}>
          <ColorPicker
            defaultValue="#FF8562"
            hideTextfield
          />
        </div>
      </div>
        <Button
          label={t('FORM.SUBMIT')}
          type="submit"
          // disabled={}
        />
    </form>
  );
};

export default Form;