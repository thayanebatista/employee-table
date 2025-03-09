import './index.css';
import './utils/i18n';
import App from './App';
import ReactDOM from 'react-dom/client';

import { HashRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as unknown as HTMLElement,
);

root.render(
  <Router>
    <App />
  </Router>,
);
