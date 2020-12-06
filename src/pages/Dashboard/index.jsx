// CONTEXT
import { JobProvider } from 'context/JobContext';

// COMPONENTS
import Details from 'components/Details';

const Dashboard = () => {
  return (
    <JobProvider>
      <main className='main'>
        <Details />
      </main>
    </JobProvider>
  );
};

export default Dashboard;
