import AddIncomeForm from './AddIncomeForm';
import AddJobForm from './AddJobForm';
import styles from './addbar.module.css';

const AddBar = () => {
  return (
    <div className={styles.container}>
      <AddIncomeForm />
      <AddJobForm />
    </div>
  );
};

export default AddBar;
