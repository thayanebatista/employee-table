import './index.css';
import App from './App';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Router>
    <App />
  </Router>,
);
