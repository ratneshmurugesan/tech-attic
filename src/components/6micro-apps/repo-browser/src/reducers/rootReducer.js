import repoReducer from './repoReducer.js'
import loaderReducer from './loaderReducer.js'
import userReducer from './userReducer.js'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    repos: repoReducer,
    user: userReducer,
    loader: loaderReducer,
})

export default rootReducer;
