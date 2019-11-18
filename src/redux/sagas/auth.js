import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';

export function* authSuccess(action) {
    yield localStorage.setItem('isAuth', true);
}

export function* auth(action) {
    const { username, password } = action;

    yield put(actions.authStart());

    if (username !== 'Admin' || password !== 12345) {
        yield put(actions.authFail());
    } else {
        yield put(actions.authSuccess());
    }
}

export function* checkAuthState(action) {
    const isAuth = JSON.parse(localStorage.getItem('isAuth'));

    if (!isAuth) {
        yield localStorage.setItem('isAuth', false);
    } else {
        yield put(actions.authSuccess());
    }
}
