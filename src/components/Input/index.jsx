// STYLES
import styles from './input.module.css';

const Input = ({ currency, error, formRef, label, name, options, placeholder, selecter, type }) => {
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
        <>
        <input name={name} placeholder={placeholder} type={type} ref={formRef} />
        { currency && <span className={styles.currency}>€</span>}
        </>
      }
      { error && <div className={styles.error}>{error}</div> }
    </div>
  );
};

export default Input;