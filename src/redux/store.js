import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import auth from './reducers/auth';
import userData from './reducers/userData';

const composeEnhancers =
    process.env.NODE_ENV === 'development'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : null || compose;

const rootReducer = combineReducers({ auth, userData });

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
