import { ButtonProps } from './types';
import styles from './button.module.css';

const Button = ({
  disabled = false,
  label,
  onClick,
  outline = false,
  type = 'button',
}: ButtonProps): JSX.Element => (
  <button
    className={`${styles.btn} ${outline ? styles.outline : ''} ${
      disabled ? styles.disabled : ''
    }`}
    onClick={onClick}
    type={type}
  >
    {label}
  </button>
);

export default Button;
