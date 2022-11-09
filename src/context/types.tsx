export type Job = {
  color: string;
  income: number;
  label: string;
  value: string;
};

export type Transaction = {
  amount: number;
  job: string;
  source: string;
  timestamp: number;
};

export type ReducerActions = {
  payload: Job | Transaction;
  type: string;
};

export interface GlobalState {
  jobs: Job[];
  transactions: Transaction[];
}

export interface GlobalContextProps extends GlobalState {
  addTransaction: (data: any) => void;
  incomeList: number[];
}

export interface GlobalProviderProps {
  children: JSX.Element;
}
