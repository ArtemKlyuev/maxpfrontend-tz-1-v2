import { takeEvery, all } from 'redux-saga/effects';
import { authSuccess, auth, checkAuthState } from './auth';
import { fetchUserData } from './userData';
import { fetchNews } from './news';
import * as actionTypes from '../actions/actionTypes';

export function* watchAuth() {
    yield all([
        takeEvery(actionTypes.AUTH_SUCCESS, authSuccess),
        takeEvery(actionTypes.AUTH_USER, auth),
        takeEvery(actionTypes.AUTH_CHECK_STATE, checkAuthState)
    ]);
}

export function* watchUserData() {
    yield takeEvery(actionTypes.FETCH_USER_DATA, fetchUserData);
}

export function* watchNews() {
    yield takeEvery(actionTypes.FETCH_NEWS, fetchNews);
}
