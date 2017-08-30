import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';

const loggerMiddleware = createLogger();

const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);


    render(<Provider store={store}>
        <App store={store}/>
    </Provider>, document.getElementById('root'));

