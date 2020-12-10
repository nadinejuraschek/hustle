// REACT
import { createContext, useEffect, useReducer, useState } from 'react';

// REDUCERS
import { AppReducer } from 'reducers/AppReducer';

const initialState = {
  jobs: [
    { label: "Babysitten", value: 'babysitten', income: 0 },
    { label: "Nachhilfe", value: 'nachhilfe', income: 0  },
    { label: "Kleiderverkauf", value: 'kleiderverkauf', income: 0 },
    { label: "Tanzstunden", value: 'tanzstunden', income: 0 },
    // { label: "Minijob", value: 'minijob' },
  ],
  transactions: [
    { job: 'babysitten', source: 'Familie Müller', amount: 30, timestamp: 1606999499 },
    { job: 'babysitten', source: 'Familie Bauer', amount: 50, timestamp: 1606826699 },
    { job: 'kleiderverkauf', source: 'Vinted', amount: 22, timestamp: 1606826699 },
    { job: 'kleiderverkauf', source: 'eBay', amount: 8, timestamp: 1605876299 },
    { job: 'tanzstunden', source: 'TV Baienfurt', amount: 64, timestamp: 1606221899 },
    // { job: 'minijob', source: 'GEW', amount: 120, timestamp: 1606394699 },
    { job: 'nachhilfe', source: 'Familie Berg', amount: 10, timestamp: 1606481099 },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [incomeList, setIncomeList] = useState([]);

  const addJob = job => {
    dispatch({
      type: "ADD_JOB",
      payload: job
    });
  };

  const addTransaction = transaction => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
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
      const sortedTransactions = transactions.filter(transaction => transaction.job === name);
      // loop over matching transactions to add incomes
      sortedTransactions.map(item => {
        total = total + item.amount
      });
      // create array entry
      // push to array
      return graphIncomes.push(total);
    });
    setIncomeList(graphIncomes);
  }, [state]);

  return (
    <GlobalContext.Provider value={{
      jobs: state.jobs,
      transactions: state.transactions.sort((x, y) => {
        return x.timestamp - y.timestamp;
      }),
      incomeList,
      addTransaction,
      addJob,
    }}>
      { children }
    </GlobalContext.Provider>
  );
};