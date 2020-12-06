// STYLED COMPONENTS
import styles from './spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.spinnerDots} />
      <div className={styles.spinnerDots} />
      <div className={styles.spinnerDots} />
      <div className={styles.spinnerDots} />
      <div className={styles.spinnerDots} />
      <div className={styles.spinnerDots} />
    </div>
  );
};

export default Spinner;
