import { FieldError, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';

export interface InputProps<TFormValues> {
  className?: string;
  currency?: boolean;
  error?: FieldError;
  label: string;
  name: Path<TFormValues>;
  options?: Option[];
  placeholder?: string;
  register?: UseFormRegister<TFormValues>;
  rules?: RegisterOptions;
  selecter?: boolean;
  type?: string;
  value?: string;
}

export type Option = {
  label: string;
  value: string;
};
