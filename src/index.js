import React from 'react';
import { createRoot } from 'react-dom/client'
import  App  from './App';
import { Provider } from 'react-redux';
import { compose, applyMiddleware, legacy_createStore as createStore } from 'redux';
import { logger } from './middlewares';
import thunk from 'redux-thunk';
import  rootReducer  from './reducers/rootReducer';


//con thunk podemos agregar logica asincrona a los actions creator

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk, logger));

const store = createStore(
  rootReducer,
  composedEnhancers
);

// import * as serviceWorker from './serviceWorker';

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

