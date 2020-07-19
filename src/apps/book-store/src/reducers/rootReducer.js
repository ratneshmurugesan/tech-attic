import bookReducer from '../reducers/bookReducer.js'
import searchReducer from '../reducers/searchReducer.js'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    books: bookReducer,
    searchText: searchReducer
})

export default rootReducer;