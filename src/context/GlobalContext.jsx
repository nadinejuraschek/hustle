// REACT
import { createContext, useReducer } from 'react';

// REDUCERS
import { AppReducer } from 'reducers/AppReducer';

const initialState = {
  jobs: [
    { label: "Babysitten", value: 'babysitten' },
    { label: "Nachhilfe", value: 'nachhilfe' },
    { label: "Kleiderverkauf", value: 'kleiderverkauf' },
    { label: "Tanzstunden", value: 'tanzstunden' },
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

  return (
    <GlobalContext.Provider value={{
      jobs: state.jobs,
      transactions: state.transactions.sort((x, y) => {
        return x.timestamp - y.timestamp;
      }),
      addTransaction,
      addJob,
    }}>
      { children }
    </GlobalContext.Provider>
  );
};