import { InputProps } from './types';
import { LegacyRef } from 'react';
import styles from './input.module.css';

const Input = ({
  className = '',
  currency = false,
  error,
  formRef,
  handleChange,
  label,
  name,
  options,
  placeholder,
  selecter = false,
  type = 'text',
}: InputProps): JSX.Element => {
  const selectField = (
    <select
      className={className}
      name={name}
      ref={formRef as LegacyRef<HTMLSelectElement>}
    >
      {options &&
        options.map(
          (option, index): JSX.Element => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          )
        )}
    </select>
  );

  const currencyField = (
    <div className={styles.currencyInput}>
      <input
        className={className}
        max='10000.00'
        min='0.00'
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        ref={formRef as LegacyRef<HTMLInputElement>}
        step='0.01'
        type={type}
      />
      <span className={styles.currency}>€</span>
    </div>
  );

  const inputField = (
    <input
      className={className}
      name={name}
      onChange={handleChange}
      placeholder={placeholder}
      ref={formRef as LegacyRef<HTMLInputElement>}
      type={type}
    />
  );

  return (
    <div className={styles.field}>
      <label htmlFor={name}>{label}</label>
      {selecter ? selectField : currency ? currencyField : inputField}
      {error && <div className={styles.error}>{error.message}</div>}
    </div>
  );
};

export default Input;
