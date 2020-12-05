// REACT
import { useState } from 'react';

// DEPENDENCIES
import { useForm } from 'react-hook-form';

// TRANSLATION
import { useTranslation } from 'react-i18next';

// COMPONENTS
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

// STYLES
import styles from './form.module.css';

const Form = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, errors } = useForm();

  return (
    <form className={styles.form} autoComplete="off">
      <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
        <Select
          native
          label={t('')}
          inputProps={{
            name: 'age',
            re: register
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
      <TextField fullWidth label="" variant="outlined" />
    </form>
  );
};

export default Form;