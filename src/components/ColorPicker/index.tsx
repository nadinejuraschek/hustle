import { Color, ColorProps } from './types';
import { ColorPicker as MUIPicker } from 'material-ui-color';
import styles from './color.module.css';
import { useTranslation } from 'react-i18next';
import { Path, PathValue } from 'react-hook-form';
import { useCallback, useState } from 'react';

const ColorPicker = <TFormValues extends Record<string, unknown>>({
  defaultValue,
  error,
  label = 'Color',
  name,
  setValue,
}: ColorProps<TFormValues>): JSX.Element => {
  const { t } = useTranslation();

  const [selectedColor, setSelectedColor] = useState(defaultValue);

  const handleChangeComplete = useCallback((color: Color) => {
    setSelectedColor(`#${color.hex}`);
    setValue(name, `#${color.hex}` as PathValue<TFormValues, Path<TFormValues>>);
  }, [name, setValue]);

  return (
    <div className={styles.colorInputField}>
      <div className={styles.pickerWrapper}>
        <label className={styles.label}>{label}</label>
        <MUIPicker
          onChange={handleChangeComplete}
          value={selectedColor}
        />
        {error && <div className={styles.error}>{t(error.message)}</div>}
      </div>
    </div>
  );
};

export default ColorPicker;
