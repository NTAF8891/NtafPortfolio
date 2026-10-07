import React from 'react';
import ReactDOM from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
// Nouveau design en test — remettre `import App from './App';` pour revenir à l'ancien
import App from './NewApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Analytics />
    <App />
  </React.StrictMode>
);
