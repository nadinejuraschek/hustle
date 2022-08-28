export interface ColorProps {
  handleChange: (color: string) => void;
  label?: string;
  value?: string;
}

export type Color = {
  hex: string;
};
