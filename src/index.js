// import React from 'react';
// import ReactDom from 'react-dom';
// import App from './App';
// import './App.scss';

// const el = document.getElementById('app');

// ReactDom.render(<App />, el);

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
