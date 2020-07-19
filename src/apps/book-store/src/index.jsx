import React from 'react';
// import ReactDOM from 'react-dom';
import App from './components/app.js'
import { store } from './store/store.js'
import { Provider } from 'react-redux'

import './styles/index.css'

function BookStore() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

export default (BookStore);
