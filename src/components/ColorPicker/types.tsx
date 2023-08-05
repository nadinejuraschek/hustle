import { FieldError, Path, RegisterOptions, UseFormRegister, UseFormSetValue } from "react-hook-form";

export interface ColorProps<TFormValues> {
  defaultValue: string;
  error?: FieldError;
  label?: string;
  name: Path<TFormValues>;
  register?: UseFormRegister<TFormValues>;
  rules?: RegisterOptions;
  setValue: UseFormSetValue<TFormValues>;
}

export type Color = {
  hex: string;
};
