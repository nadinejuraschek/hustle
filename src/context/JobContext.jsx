// REACT
import { createContext, useState } from 'react';

export const JobContext = createContext({
  jobs: {},
  setJobs: (values) => console.log('Jobs are empty.'),
});

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  return (
    <JobContext.Provider value={{ jobs, setJobs }}>
      {children}
    </JobContext.Provider>
  );
};
