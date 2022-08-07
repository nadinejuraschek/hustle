import { ReactComponent as Close } from 'assets/icons/close.svg';
import styles from './modal.module.css';

const Modal = ({ children, handleCancel, title }) => (
  <div className={styles.overlay}>
    <div className={styles.modal}>
      <Close className={styles.close} onClick={handleCancel} />
      <h2>{title}</h2>
      {children}
    </div>
  </div>
);

export default Modal;
