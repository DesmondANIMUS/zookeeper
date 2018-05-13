import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducers/rootReducer';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import registerServiceWorker from './registerServiceWorker';

const store = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={store(reducers)}>
        <App />
    </Provider>, document.getElementById('root'));

registerServiceWorker();
