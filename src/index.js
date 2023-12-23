import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Dashboard from './Components/Dashboard.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
);
