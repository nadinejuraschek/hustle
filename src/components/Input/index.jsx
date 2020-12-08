// STYLES
import styles from './input.module.css';

const Input = ({ currency, error, formRef, handleChange, label, name, options, placeholder, selecter, type }) => {
  return (
    <div className={styles.field}>
      <label htmlFor={name}>{label}</label>
      {
        selecter ?
        <select name={name} ref={formRef}>
          {
            options && options.map((option, index) => <option key={index} value={option.value}>{option.label}</option>)
          }
        </select>
        :
        currency ?
        <div className={styles.currencyInput}>
        <input onChange={handleChange} max="10000.00" min="0.00" name={name} placeholder={placeholder} step="0.01" type={type} ref={formRef} />
        <span className={styles.currency}>€</span>
        </div>
        :
        <>
        <input onChange={handleChange} name={name} placeholder={placeholder} type={type} ref={formRef} />
        </>
      }
      { error && <div className={styles.error}>{error.message}</div> }
    </div>
  );
};

export default Input;