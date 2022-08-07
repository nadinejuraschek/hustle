import styles from './spinner.module.css';

const Spinner = ({ fullScreen }) => (
  <>
    {fullScreen ? (
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
    ) : (
      <div className={styles.spinner}>
        <div className={styles.spinnerDots} />
        <div className={styles.spinnerDots} />
        <div className={styles.spinnerDots} />
        <div className={styles.spinnerDots} />
        <div className={styles.spinnerDots} />
        <div className={styles.spinnerDots} />
      </div>
    )}
  </>
);

export default Spinner;
