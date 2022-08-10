import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Dashboard from 'pages/Dashboard';
import Layout from 'components/Layout';
import Spinner from 'components/Spinner';

const App = () => (
  <Suspense fallback={<Spinner fullScreen />}>
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
      </Routes>
    </Router>
  </Suspense>
);

export default App;
