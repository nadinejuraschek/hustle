// REACT
import { useState } from 'react';

// DEPENDENCIES
import { ColorPicker } from 'material-ui-color';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// TRANSLATION
import { useTranslation } from 'react-i18next';

// COMPONENTS
import Input from 'components/Input';
import Button from 'components/Button';

// STYLES
import styles from './form.module.css';

const Form = () => {
  const { t } = useTranslation();
  const [ formData, setFormData ] = useState({
    job: '',
    source: '',
    amount: '',
  });

  // SCHEMA VALIDATION
  const schema = yup.object().shape({
    job: yup
      .string()
      .required(t('FORM.JOB.ERROR'))
      .oneOf(['general', 'software', 'call'], t('FORM.TOPIC.ERROR')),
    source: yup
      .string()
      .lowercase()
      .required(t('FORM.SOURCE.ERROR')),
    amount: yup
      .number()
      .required(t('FORM.AMOUNT.ERROR')),
  });

  const { register, handleSubmit, errors, watch, formState } = useForm({
    defaultValues: {
      job: formData.job,
      source: formData.source,
      amount: formData.amount,
    },
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const formSubmit = () => {
    console.log(formData);
  };

  console.log(formState);

  return (
    <form
      className={styles.form}
      autoComplete="off"
      onSubmit={() => handleSubmit(formSubmit)}
    >
      <Input
        error={errors.job}
        label={t('FORM.JOB.LABEL')}
        name="job"
        selecter
        formRef={register}
      />
      <Input
        error={errors.source}
        label={t('FORM.SOURCE.LABEL')}
        name="source"
        formRef={register}
      />
      <div className={styles.twoFields}>
        <Input
          currency
          error={errors.amount}
          label={t('FORM.AMOUNT.LABEL')}
          name="amount"
          formRef={register}
        />
        <div className={styles.color}>
          <ColorPicker
            defaultValue="#FF8562"
            hideTextfield
            formRef={register}
          />
        </div>
      </div>
        <Button
          label={t('FORM.SUBMIT')}
          type="submit"
          disabled={!formState}
        />
    </form>
  );
};

export default Form;