// STYLES
import styles from './button.module.css';

const Button = ({ disabled, label, outline }) => {
  return (
    <button className={`${styles.btn} ${outline ? styles.outline : ''} ${disabled ? styles.disabled : ''}`}>
      {label}
    </button>
  );
};

export default Button;