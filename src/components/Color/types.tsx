import { LegacyRef } from 'react';

export interface ColorProps {
  formRef: LegacyRef<HTMLInputElement>;
  label: string;
  name: string;
}

export type Color = {
  hex: string;
};
