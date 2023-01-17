import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'tw-elements';
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
