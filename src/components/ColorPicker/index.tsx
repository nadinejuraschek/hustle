import { Color, ColorProps } from './types';

import { ColorPicker as MUIPicker } from 'material-ui-color';
import styles from './color.module.css';

const ColorPicker = ({
  handleChange,
  label = 'Color',
  value = '#fcf15c',
}: ColorProps): JSX.Element => {
  const handleChangeComplete = (color: Color): void => {
    handleChange(`#${color.hex}`);
  };

  return (
    <div className={styles.colorInputField}>
      <div className={styles.pickerWrapper}>
        <label className={styles.label}>{label}</label>
        <MUIPicker
          onChange={(color: Color) => handleChangeComplete(color)}
          value={value}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
