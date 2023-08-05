import { ColorProps } from './types';
import { MuiColorInput as MUIColorInput } from 'mui-color-input';
import styles from './color.module.css';
import { useTranslation } from 'react-i18next';
import { Controller } from 'react-hook-form';

const ColorPicker = <TFormValues extends Record<string, unknown>>({
  control,
  error,
  label = 'Color',
  name,
}: ColorProps<TFormValues>): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className={styles.pickerWrapper}>
      <label className={styles.label}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          /* @ts-ignore-next-line */
          <MUIColorInput
            {...field}
            className={styles.colorInput}
            format="hex"
            helperText={fieldState.invalid ? "Color is invalid" : ""}
            error={fieldState.invalid}
          />
        )}
      />
      {error && <div className={styles.error}>{t(error.message)}</div>}
    </div>
  );
};

export default ColorPicker;
