import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import reportWebVitals from './reportWebVitals';

import "./index.scss"

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
