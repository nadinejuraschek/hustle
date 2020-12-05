// REACT
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// COMPONENTS
import Layout from 'components/Layout';

// PAGES
import Dashboard from 'pages/Dashboard';

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/'>
              <Dashboard />
            </Route>
            <Route exact path='/plans/create'>
              
            </Route>
            <Route exact path='/plans/:id'>
              
            </Route>
          </Switch>
        </Layout>
      </Router>
    </Suspense>
  );
}

export default App;
