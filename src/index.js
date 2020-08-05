import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import {createStore} from 'redux';
import { Provider } from 'react-redux'
import {reducer} from './reduces'
import Router from './router'
import RouterNav from './components/RouterNav'

let store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <RouterNav/>
    <Router/>
  </Provider>
  ,document.getElementById('root')
);
