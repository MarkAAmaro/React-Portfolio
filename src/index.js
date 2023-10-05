import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
console.log('Before ReactDOM.render');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
console.log("React App Loaded");
console.log('After ReactDOM.render');