import styles from './addIncomeForm.module.css';
import { useTranslation } from 'react-i18next';
import { incomeFormSchema } from './schema';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import { useContext, useMemo } from 'react';
import { GlobalContext } from 'context/GlobalContext';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from 'components/Input';
import Button from 'components/Button';
import { AddIncomeFormProps, IncomeFormDataProps } from './types';

const AddIncomeForm = ({ hideTitle }: AddIncomeFormProps): JSX.Element => {
  const { t } = useTranslation();

  const defaultValues = { job: '', source: '', amount: 0 };

  const { addTransaction, jobs } = useContext(GlobalContext);

  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues,
    resolver: yupResolver(incomeFormSchema),
    mode: 'onChange',
  });

  const { errors, isValid } = formState;

  const formSubmit = (formData: IncomeFormDataProps): void => {
    addTransaction({...formData, id: uuidv4(), timestamp: new Date() });
    reset();
  };

  const renderTitle = useMemo(() => {
    if (hideTitle) return null;

    return <h2 className={styles.title}>{t('FORM.JOB.ADD') as string}</h2>;
  }, [hideTitle, t]);

  return (
    <div className={styles.addIncome}>
      {renderTitle}
      <form
        autoComplete='off'
        className={styles.form}
        onSubmit={handleSubmit(formSubmit)}
      >
        <Input
          error={errors.job}
          label={t('FORM.JOB.LABEL')}
          name='job'
          options={jobs}
          register={register}
          selecter
        />
        <Input
          error={errors.source}
          label={t('FORM.SOURCE.LABEL')}
          name='source'
          register={register}
          type='text'
        />
        <Input
          currency
          error={errors.amount}
          label={t('FORM.AMOUNT.LABEL')}
          name='amount'
          register={register}
          type='number'
        />
        <Button
          label={t('FORM.SUBMIT')}
          disabled={!isValid}
          type='submit'
        />
      </form>
    </div>
  );
};

export default AddIncomeForm;