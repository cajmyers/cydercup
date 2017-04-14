import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import createStore from './model/createStore';
import './index.css';

const store = createStore()

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
);
