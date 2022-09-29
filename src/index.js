import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';


const el = document.getElementById('app');

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  el
);

