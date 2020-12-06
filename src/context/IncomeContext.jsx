// REACT
import { createContext, useState } from 'react';

export const IncomeContext = createContext({
  data: {},
  setData: (values) => console.log('Income Data is empty.'),
});

export const IncomeProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <IncomeContext.Provider value={{ data, setData }}>
      {children}
    </IncomeContext.Provider>
  );
};
