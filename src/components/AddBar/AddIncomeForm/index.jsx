import Form from 'components/Form';
import styles from './addIncomeForm.module.css';
import { useTranslation } from 'react-i18next';

const AddIncomeForm = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.addIncome}>
      <h2 className={styles.title}>{t('FORM.JOB.ADD')}</h2>
      <Form />
    </div>
  );
};

export default AddIncomeForm;
