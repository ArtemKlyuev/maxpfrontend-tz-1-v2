import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialstate = {
    isAuth: false,
    error: null,
    loading: false
};

const authStart = (state, action) => updateObject(state, { loading: true });

const authSuccess = (state, action) =>
    updateObject(state, { isAuth: true, error: null, loading: false });

const authFail = (state, action) =>
    updateObject(state, { error: true, loading: false });

const logout = (state, action) => updateObject(state, { isAuth: false });

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return authStart(state, action);
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action);
        case actionTypes.AUTH_FAIL:
            return authFail(state, action);
        case actionTypes.AUTH_LOGOUT:
            return logout(state, action);

        default:
            return state;
    }
};

export default reducer;
