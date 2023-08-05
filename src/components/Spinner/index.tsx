import { SpinnerProps } from './types';
import styles from './spinner.module.css';

const Spinner = ({ fullScreen }: SpinnerProps): JSX.Element => {
  if (fullScreen) {
    return (
      <div className={styles.full}>
        <div className={styles.spinner}>
          <div className={styles.spinnerDots} />
          <div className={styles.spinnerDots} />
          <div className={styles.spinnerDots} />
          <div className={styles.spinnerDots} />
          <div className={styles.spinnerDots} />
          <div className={styles.spinnerDots} />
        </div>
      </div>
    );
  }

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
