import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Exercice from './Exercice';
import JSXArrays from './jsxarrays.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Exercice />
    <JSXArrays />
  </React.StrictMode>,
  document.getElementById('root'),
);
