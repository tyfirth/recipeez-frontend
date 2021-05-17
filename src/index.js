import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import recipeReducer from './reducers/recipeReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = compose();

let store = createStore(recipeReducer, composeEnhancers(applyMiddleware(thunk)));


ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  document.getElementById('root')
);
