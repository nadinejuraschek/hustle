// STYLES
import styles from './modal.module.css';

const Modal = ({ children, title }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>{title}</h2>
        { children }
      </div>
    </div>
  );
};

export default Modal;