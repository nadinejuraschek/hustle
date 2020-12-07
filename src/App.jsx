// REACT
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// COMPONENTS
import Layout from 'components/Layout';
import Spinner from 'components/Spinner';

// PAGES
import Create from 'pages/Create';
import Dashboard from 'pages/Dashboard';
import Playground from 'pages/Playground';

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
          <Route exact path='/playground'>
            <Playground />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
