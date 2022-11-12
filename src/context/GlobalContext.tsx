import {
  GlobalProviderProps,
  GlobalState,
  Job,
  ReducerActions,
  Transaction,
} from './types';
import { createContext, useEffect, useReducer, useState } from 'react';
import { jobs, transactions } from 'data';

import { AppReducer } from 'reducers/AppReducer';

const initialState = {
  addJob: (data: {}) => {},
  addTransaction: (data: {}) => {},
  incomeList: [],
  jobs,
  transactions,
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
      sortedTransactions.map(item => {
        if (typeof item.amount === 'string') {
          return (total = total + Number(item.amount));
        }
        return (total = total + item.amount);
      });
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
