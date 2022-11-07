import { Color, ColorProps } from './types';
// import { SketchPicker } from 'react-color';
import styles from './color.module.css';
import { useState } from 'react';

const Color = ({ formRef, label, name }: ColorProps): JSX.Element => {
  const [value, setValue] = useState('#FF8562');
  const [openColorPicker, setOpenColorPicker] = useState(false);

  const handleChangeComplete = (color: Color): void => {
    setValue(color.hex);
  };

  return (
    <div className={styles.colorInputField}>
      <div
        className={styles.colorSquare}
        onClick={() => setOpenColorPicker(!openColorPicker)}
        style={{ backgroundColor: value }}
      ></div>
      <div className={styles.hiddenInput}>
        <label htmlFor={name}>{label}</label>
        <input
          name={name}
          onChange={event => console.log(event.target.value)}
          onClick={() => setOpenColorPicker(!openColorPicker)}
          ref={formRef}
          value={value}
        />
      </div>
      {openColorPicker && (
        <div className={styles.picker}>
          {/* <SketchPicker color={value} onChangeComplete={handleChangeComplete} /> */}
        </div>
      )}
    </div>
  );
};

export default Color;
