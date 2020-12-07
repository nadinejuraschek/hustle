// REACT
import { useContext, useState } from 'react';

// DEPENDENCIES
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// TRANSLATION
import { useTranslation } from 'react-i18next';

// CONTEXT
import { JobContext } from 'context/JobContext';

// COMPONENTS
import Color from 'components/Color';
import Input from 'components/Input';
import Button from 'components/Button';

// STYLES
import styles from './form.module.css';

// HELPER
export const normalizeNumber = (value) => {
  return value.match('^[0-9][0-9.]*$');
};

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
      .required(t('FORM.SOURCE.ERROR')),
    amount: yup
      .string()
      .required(t('FORM.AMOUNT.ERROR')),
    // color: yup
    //   .string(),
    timestamp: yup
      .date()
      .default(() => (new Date())),
  });

  const { register, handleSubmit, errors, formState } = useForm({
    defaultValues: {
      job: '',
      source: '',
      amount: 0,
      // color: '#FF8562',
      timestamp: new Date(),
    },
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const formSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <form
      className={styles.form}
      autoComplete='off'
      onSubmit={handleSubmit(formSubmit)}
    >
      <Input
        error={errors.job}
        label={t('FORM.JOB.LABEL')}
        name='job'
        selecter
        formRef={register}
      />
      <Input
        error={errors.source}
        label={t('FORM.SOURCE.LABEL')}
        name='source'
        formRef={register}
        type="text"
      />
      <Input
        currency
        error={errors.amount}
        label={t('FORM.AMOUNT.LABEL')}
        name='amount'
        formRef={register}
        handleChange={(event) => {
          const { value } = event.target;
          event.target.value = normalizeNumber(value);
        }}
        type="number"
      />
      {/* <Color
        formRef={register}
        label="Color"
        name="color"
      /> */}
      <Button
        label={t('FORM.SUBMIT')}
        type="submit"
        // disabled={}
      />
    </form>
  );
};

export default Form;