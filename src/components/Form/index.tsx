import * as yup from 'yup';

import { ChangeEvent, useContext } from 'react';

import Button from 'components/Button';
import { GlobalContext } from 'context/GlobalContext';
import Input from 'components/Input';
import { normalizeNumber } from 'helpers';
import styles from './form.module.css';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import { yupResolver } from '@hookform/resolvers/yup';

const Form = (): JSX.Element => {
  const { t } = useTranslation();
  const { addTransaction, jobs } = useContext(GlobalContext);

  // SCHEMA VALIDATION
  const schema = yup.object().shape({
    id: yup.number(),
    job: yup.string().required(t('FORM.JOB.ERROR')),
    source: yup.string().required(t('FORM.SOURCE.ERROR')),
    amount: yup
      .string()
      .required(t('FORM.AMOUNT.ERROR'))
      .min(1, t('FORM.AMOUNT.ERROR')),
    // color: yup
    //   .string(),
    timestamp: yup.date().default(() => new Date()),
  });

  const { register, handleSubmit, errors, formState } = useForm({
    defaultValues: {
      id: uuidv4(),
      job: '',
      source: '',
      amount: 0,
      // color: '#FF8562',
      timestamp: new Date(),
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const handleCurrency = (event: ChangeEvent): void => {
    const target = event.target as HTMLInputElement;
    target.value = normalizeNumber(target.value);
  };

  const formSubmit = (formData: any): void => {
    addTransaction(formData);
  };

  return (
    <form
      autoComplete='off'
      className={styles.form}
      onSubmit={handleSubmit(formSubmit)}
    >
      <Input
        error={errors.job}
        formRef={register}
        label={t('FORM.JOB.LABEL')}
        name='job'
        options={jobs}
        selecter
      />
      <Input
        error={errors.source}
        label={t('FORM.SOURCE.LABEL')}
        name='source'
        formRef={register}
        type='text'
      />
      <Input
        currency
        error={errors.amount}
        label={t('FORM.AMOUNT.LABEL')}
        name='amount'
        formRef={register}
        handleChange={handleCurrency}
        type='number'
      />
      {/* <Color
        formRef={register}
        label="Color"
        name="color"
      /> */}
      <Button
        label={t('FORM.SUBMIT')}
        disabled={!formState.isValid}
        type='submit'
      />
    </form>
  );
};

export default Form;
