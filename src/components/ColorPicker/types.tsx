import { Control, FieldError, Path } from "react-hook-form";

export interface ColorProps<TFormValues> {
  control: Control<TFormValues>;
  error?: FieldError;
  label?: string;
  name: Path<TFormValues>;
}

export type Color = {
  hex: string;
};
