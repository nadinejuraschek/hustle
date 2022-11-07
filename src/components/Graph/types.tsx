import { Transaction } from '../../context/types';

export interface GraphProps {
  list: Transaction[];
}

export interface GraphTypeProps {
  data: any;
}

export type GraphData = {
  labels: string[];
  datasets: GraphDataset[];
};

export type GraphDataset = {
  backgroundColor?: string[];
  borderColor?: string[];
  borderWidth?: number;
  data: string[];
  hoverBackgroundColor?: string[];
  hoverBorderWidth?: number;
  label: 'Income';
};
