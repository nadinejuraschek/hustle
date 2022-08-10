import './index.css';
import './i18n';

import App from './App';
import { GlobalContextProvider } from 'context/GlobalContext';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

createRoot(container);
root.render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>
);
