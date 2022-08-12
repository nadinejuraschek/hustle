import {
  GlobalProviderProps,
  GlobalState,
  Job,
  ReducerActions,
  Transaction,
} from './types';
import { createContext, useEffect, useReducer, useState } from 'react';

import { AppReducer } from 'reducers/AppReducer';

const initialState = {
  addTransaction: (data: {}) => {},
  incomeList: [],
  jobs: [
    { label: 'Babysit', value: 'babysit', income: 0 },
    { label: 'Tutoring', value: 'tutoring', income: 0 },
    { label: 'Clothing Sales', value: 'clothingsales', income: 0 },
    { label: 'Dance Classes', value: 'danceclasses', income: 0 },
  ],
  transactions: [
    {
      job: 'babysit',
      source: 'Mueller Family',
      amount: 30,
      timestamp: 1606999499,
    },
    {
      job: 'babysit',
      source: 'Bauer Family',
      amount: 50,
      timestamp: 1606826699,
    },
    {
      job: 'clothingsales',
      source: 'Vinted',
      amount: 22,
      timestamp: 1606826699,
    },
    { job: 'clothingsales', source: 'eBay', amount: 8, timestamp: 1605876299 },
    {
      job: 'danceclasses',
      source: 'TV Baienfurt',
      amount: 64,
      timestamp: 1606221899,
    },
    {
      job: 'tutoring',
      source: 'Berg Family',
      amount: 10,
      timestamp: 1606481099,
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({
  children,
}: GlobalProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer<
    (arg1: GlobalState, actions: ReducerActions) => GlobalState
  >(AppReducer, initialState);
  const [incomeList, setIncomeList] = useState<number[]>([]);

  const addJob = (job: Job): void => {
    dispatch({
      type: 'ADD_JOB',
      payload: job,
    });
  };

  const addTransaction = (transaction: Transaction): void => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  };

  // DISPLAY TOTAL INCOMES
  useEffect(() => {
    const jobs = (state as GlobalState).jobs;
    const transactions = (state as GlobalState).transactions;

    let graphIncomes = [];
    // loop over jobs
    jobs.map(job => {
      const name = job.value;
      let total = 0;
      // loop over transactions
      // find all matching transactions
      const sortedTransactions = transactions.filter(
        (transaction: Transaction): boolean => transaction.job === name
      );
      // loop over matching transactions to add incomes
      sortedTransactions.map(item => (total = total + item.amount));
      // create array entry
      // push to array
      return graphIncomes.push(total);
    });
    setIncomeList(graphIncomes);
  }, [state]);

  const value = {
    jobs: (state as GlobalState).jobs,
    transactions: (state as GlobalState).transactions.sort((x, y): number => {
      return x.timestamp - y.timestamp;
    }),
    incomeList,
    addTransaction,
    addJob,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
