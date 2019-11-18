import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';

export function* fetchUserData(action) {
    yield put(actions.fetchUserDataStart());

    try {
        const res = yield fetch('https://jsonplaceholder.typicode.com/users/1');

        if (!res.ok) {
            throw new Error(res.statusText);
        }

        const data = yield res.json();

        yield put(actions.fetchUserDataSuccess(data));
    } catch (err) {
        yield put(actions.fetchUserDataFail(err));
    }
}
