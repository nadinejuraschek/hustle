// REACT
import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

// PAGES
import Create from 'pages/Create';
import Dashboard from 'pages/Dashboard';
// COMPONENTS
import Layout from 'components/Layout';
import Spinner from 'components/Spinner';

const App = () => {
  return (
    <Suspense fallback={<Spinner fullScreen />}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Layout>
              <Dashboard />
            </Layout>
          </Route>
          <Route exact path='/create'>
            <Layout>
              <Create />
            </Layout>
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
