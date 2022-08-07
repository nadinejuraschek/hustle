import './index.css';
import './i18n';

import App from './App';
import { GlobalContextProvider } from 'context/GlobalContext';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
