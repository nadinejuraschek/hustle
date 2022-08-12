import { ButtonProps } from './types';
import styles from './button.module.css';

const Button = ({
  disabled = false,
  label,
  outline = false,
}: ButtonProps): JSX.Element => (
  <button
    className={`${styles.btn} ${outline ? styles.outline : ''} ${
      disabled ? styles.disabled : ''
    }`}
  >
    {label}
  </button>
);

export default Button;
