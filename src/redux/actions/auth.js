import * as actionTypes from './actionTypes';

export const authStart = () => ({ type: actionTypes.AUTH_START });

export const authSuccess = () => {
    // localStorage.setItem('isAuth', true);
    return { type: actionTypes.AUTH_SUCCESS };
};

export const authFail = () => ({ type: actionTypes.AUTH_FAIL });

export const auth = (username, password) => ({
    type: actionTypes.AUTH_USER,
    username,
    password
});

export const checkAuthState = () => ({ type: actionTypes.AUTH_CHECK_STATE });

export const setAuthRedirectPath = (path) => ({
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path
});

export const logout = () => ({ type: actionTypes.AUTH_LOGOUT });
