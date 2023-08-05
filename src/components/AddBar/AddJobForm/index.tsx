import { useContext } from 'react';
import Button from 'components/Button';
import ColorPicker from 'components/ColorPicker';
import { GlobalContext } from 'context/GlobalContext';
import Input from 'components/Input';
import styles from './addJobForm.module.css';
import { useTranslation } from 'react-i18next';
import { Job } from 'context/types';
import { jobFormSchema } from './schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { JobFormDataProps } from './types';

const AddJobForm = (): JSX.Element => {
  const { t } = useTranslation();

  const { addJob, jobs } = useContext(GlobalContext);

  const defaultValues = { job: '', color: '#FFF678' };

  const { control, register, handleSubmit, formState, reset } = useForm({
    defaultValues,
    resolver: yupResolver(jobFormSchema),
    mode: 'onChange',
  });

  const { errors, isValid } = formState;

  const formSubmit = (formData: JobFormDataProps): void => {
    const jobAlreadyAdded = jobs.find(
      (job: Job): boolean => job.label === formData.job
    );

    if (!jobAlreadyAdded) {
      const data = {
        color: formData.color,
        label: formData.job,
        value: formData.job.toLowerCase().replace(/\s/g, ''),
      };

      addJob(data);
      reset();
    }
  };

  return (
    <div className={styles.addJob}>
      <h2 className={styles.title}>{t('FORM.SOURCE.ADD') as string}</h2>
      <form
        autoComplete='off'
        className={styles.form}
        onSubmit={handleSubmit(formSubmit)}
      >
        <Input
          error={errors.job}
          label={t('FORM.JOB.LABEL')}
          name="job"
          placeholder={t('FORM.JOB.NEW')}
          register={register}
          type='text'
        />
        <ColorPicker
          control={control}
          error={errors.job}
          label={t('FORM.COLOR.LABEL')}
          name="color"
        />
        <Button
          className={styles.submitBtn}
          label={t('FORM.SUBMIT')}
          disabled={!isValid}
          type='submit'
        />
      </form>
    </div>
  );
};

export default AddJobForm;
