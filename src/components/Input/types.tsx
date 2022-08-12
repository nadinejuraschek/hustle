import { ChangeEvent, LegacyRef } from 'react';

import { FieldError } from 'react-hook-form';

export interface InputProps {
  className?: string;
  currency?: boolean;
  error?: FieldError;
  formRef?: LegacyRef<HTMLInputElement | HTMLSelectElement>;
  handleChange?: (event: ChangeEvent) => void;
  label: string;
  name?: string;
  options?: Option[];
  placeholder?: string;
  selecter?: boolean;
  type?: string;
  value?: string;
}

export type Option = {
  label: string;
  value: string;
};
