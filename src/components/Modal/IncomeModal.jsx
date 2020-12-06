// COMPONENTS
import Form from 'components/Form';

// STYLES
import styles from './modal.module.css';

const IncomeModal = ( handleClose ) => {
  return (
    <div className={styles.overlay} onClick={() => handleClose(false)}>
      <div className={styles.modal}>
        <h2>Add Income</h2>
        <Form />
      </div>
    </div>
  );
};

export default IncomeModal;