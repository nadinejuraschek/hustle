// REACT
import React from 'react';
import ReactDOM from 'react-dom';

// STYLES
import './index.css';

// COMPONENTS
import App from './App';

// TRANSLATION
import './i18n';

// CONTEXT
import { GlobalContextProvider } from 'context/GlobalContext';

ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
