import {render} from 'react-dom';
import React from 'react';
import App from './components/App';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers'
import ReduxPromise from 'redux-promise';

const store = applyMiddleware(ReduxPromise)(createStore)(reducer);

render(<Provider store={store} ><App /></Provider>, document.getElementById('container') );