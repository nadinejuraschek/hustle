import * as yup from 'yup';

export const incomeFormSchema = yup.object().shape({
  job: yup.string().required('FORM.JOB.ERROR'),
  source: yup.string().required('FORM.SOURCE.ERROR'),
  amount: yup
    .number()
    .required('FORM.AMOUNT.ERROR')
    .min(1, 'FORM.AMOUNT.ERROR'),
});