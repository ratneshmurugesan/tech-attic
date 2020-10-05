import { createStore } from 'redux';
import reducers from '../reducers/rootReducer.js'

export const store = createStore(
    reducers
)
