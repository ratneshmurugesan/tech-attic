import bookReducer from './bookReducer.js'
import searchReducer from './searchReducer.js'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    books: bookReducer,
    searchText: searchReducer
})

export default rootReducer;