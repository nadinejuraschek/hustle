import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Dashboard from 'pages/Dashboard';
import Layout from 'components/Layout';
import Spinner from 'components/Spinner';

const App = () => (
  <Suspense fallback={<Spinner fullScreen />}>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Layout>
            <Dashboard />
          </Layout>
        </Route>
      </Switch>
    </Router>
  </Suspense>
);

export default App;
