import { MouseEvent } from 'react';

export interface ButtonProps {
  disabled?: boolean;
  label?: string;
  onClick?: (event: MouseEvent) => void;
  outline?: boolean;
  type?: 'button' | 'submit';
}
