import { createStore } from 'redux';
import auth from './reducers/auth';

const composeEnhancers =
    process.env.NODE_ENV === 'development'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : null;

const store = createStore(auth, composeEnhancers());

export default store;
