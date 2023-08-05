import * as yup from 'yup';

export const jobFormSchema = yup.object().shape({
  job: yup.string().required('FORM.JOB.ERROR'),
  color: yup.string(),
});