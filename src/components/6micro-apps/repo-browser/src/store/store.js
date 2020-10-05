import { createStore } from 'redux';
import reducers from '../reducers/rootReducer.js'

const configureStore = () => {
  const store = createStore(
    reducers
  );
  
  return store;
};

export default configureStore;
