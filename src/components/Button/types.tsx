import { MouseEvent } from 'react';

export interface ButtonProps {
  className?: string;
  disabled?: boolean;
  label?: string;
  onClick?: (event: MouseEvent) => void;
  outline?: boolean;
  type?: 'button' | 'submit';
}
