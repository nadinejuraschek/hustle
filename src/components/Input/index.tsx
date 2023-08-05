import { InputProps } from './types';
import styles from './input.module.css';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

const Input = <TFormValues extends Record<string, unknown>>({
  className = '',
  currency = false,
  error,
  label,
  name,
  options,
  placeholder = '',
  register,
  rules,
  selecter = false,
  type = 'text',
}: InputProps<TFormValues>): JSX.Element => {
  const { t } = useTranslation();

  const selectField = useMemo(() => (
    <select
      className={className}
      name={name}
      {...(register && register(name, rules))}
    >
      {options &&
        options.map(
          (option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          )
        )}
    </select>
  ), [className, name, options, register, rules]);

  const currencyField = useMemo(() => (
    <div className={styles.currencyInput}>
      <input
        className={className}
        max='10000.00'
        min='0.00'
        placeholder={placeholder}
        {...(register && register(name, rules))}
        step='0.01'
        type={type}
      />
      <span className={styles.currency}>€</span>
    </div>
  ), [className, name, placeholder, register, rules, type]);

  const inputField = useMemo(() => (
    <input
      className={className}
      placeholder={placeholder}
      {...(register && register(name, rules))}
      type={type}
    />
  ), [className, name, placeholder, register, rules, type]);

  const renderField = useMemo(() => {
    if (selecter) return selectField;
    if (currency) return currencyField;
    return inputField;
  }, [currency, currencyField, inputField, selectField, selecter]);

  const renderError = useMemo(() => {
    if (!error?.message) return null;
    return <div className={styles.error}>{t(error.message)}</div>;
  }, [error, t]);

  return (
    <div className={styles.field}>
      <label htmlFor={name}>{label}</label>
      {renderField}
      {renderError}
    </div>
  );
};

export default Input;
