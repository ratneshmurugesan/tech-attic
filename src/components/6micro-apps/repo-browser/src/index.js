import React from 'react';
// import ReactDOM from 'react-dom';

import App from './components/app.js'

import { Provider } from 'react-redux'
// import BrowserRouter from 'react-router-dom/BrowserRouter'

import configureStore from './store/store.js'
// import '../node_modules/antd/dist/antd.css'
import '../../../../../node_modules/antd/dist/antd.css'


const store = configureStore();

function RepoBrowser() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

export default (RepoBrowser);
