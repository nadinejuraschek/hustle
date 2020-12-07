// REACT
import { useState } from 'react';

// DEPENDENCIES
import { SketchPicker } from 'react-color';

// STYLES
import styles from './color.module.css';

const Color = ({ formRef, label, name }) => {
  const [ value, setValue ] = useState('#FF8562');
  const [ openColorPicker, setOpenColorPicker ] = useState(false);

  const handleChangeComplete = (color) => {
    setValue(color.hex);
  };

  return (
    <div className={styles.colorInputField}>
      <div className={styles.colorSquare} style={{ backgroundColor: value }}onClick={() => setOpenColorPicker(!openColorPicker)}></div>
      <div className={styles.hiddenInput}>
        <label htmlFor={name}>{label}</label>
        <input name={name} ref={formRef} value={value} onChange={(event) => console.log(event.target.value)} onClick={() => setOpenColorPicker(!openColorPicker)} />
      </div>
      {
        openColorPicker &&
        <div className={styles.picker}>
          <SketchPicker
            color={value}
            onChangeComplete={(color) => handleChangeComplete(color)}
          />
        </div>
      }
    </div>
  );
};

export default Color;