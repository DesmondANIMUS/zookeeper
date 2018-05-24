import App from './App';
import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import reducers from './reducers/rootReducer';
import {createStore, applyMiddleware} from 'redux';
import registerServiceWorker from './registerServiceWorker';

const createdStore = applyMiddleware(thunk)(createStore);
const store = createdStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

registerServiceWorker();
