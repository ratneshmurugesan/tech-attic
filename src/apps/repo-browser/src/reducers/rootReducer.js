import repoReducer from '../reducers/repoReducer.js'
import loaderReducer from '../reducers/loaderReducer.js'
import userReducer from '../reducers/userReducer.js'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    repos: repoReducer,
    user: userReducer,
    loader: loaderReducer,
})

export default rootReducer;
