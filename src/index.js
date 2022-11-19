import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
//import Mainwithnav from './Mainwithnav';
import {legacy_createStore,combineReducers} from 'redux'
//import {createStore} from '@reduxjs/toolkit'
import allReducers from './reducers/index.js'
import { Provider } from 'react-redux';

const store = legacy_createStore(
  allReducers
  ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <Provider store={store}>
          <App />
       </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
