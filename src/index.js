import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import {watchIncrementAsync} from './sagas';
import App from './App';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();

console.info('sagaMiddleware',{sagaMiddleware});

const store = createStore(reducer,applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(watchIncrementAsync);

function render() {
  ReactDOM.render(
    <App {...store} />,
    document.getElementById('root')
  );
}

render();

store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
