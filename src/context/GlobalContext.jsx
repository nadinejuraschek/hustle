import { createContext, useEffect, useReducer, useState } from 'react';

import { AppReducer } from 'reducers/AppReducer';

const initialState = {
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

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [incomeList, setIncomeList] = useState([]);

  const addJob = job => {
    dispatch({
      type: 'ADD_JOB',
      payload: job,
    });
  };

  const addTransaction = transaction => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  };

  // DISPLAY TOTAL INCOMES
  useEffect(() => {
    const jobs = state.jobs;
    const transactions = state.transactions;

    let graphIncomes = [];
    // loop over jobs
    jobs.map(job => {
      const name = job.value;
      let total = 0;
      // loop over transactions
      // find all matching transactions
      const sortedTransactions = transactions.filter(
        transaction => transaction.job === name
      );
      // loop over matching transactions to add incomes
      sortedTransactions.map(item => (total = total + item.amount));
      // create array entry
      // push to array
      return graphIncomes.push(total);
    });
    setIncomeList(graphIncomes);
  }, [state]);

  return (
    <GlobalContext.Provider
      value={{
        jobs: state.jobs,
        transactions: state.transactions.sort((x, y) => {
          return x.timestamp - y.timestamp;
        }),
        incomeList,
        addTransaction,
        addJob,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
