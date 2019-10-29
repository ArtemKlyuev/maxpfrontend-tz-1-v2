import * as actionTypes from './actionTypes';

export const authStart = () => ({ type: actionTypes.AUTH_START });

const authSuccess = () => {
    console.log('auth success triggered');
    localStorage.setItem('isAuth', true);
    return { type: actionTypes.AUTH_SUCCESS };
};

export const authFail = () => ({ type: actionTypes.AUTH_FAIL });

export const auth = (username, password) => {
    console.log('auth triggered');
    return (dispatch) => {
        dispatch(authStart());

        if (username !== 'Admin' || password !== 12345) {
            dispatch(authFail());
        } else {
            dispatch(authSuccess());
        }
    };
};

export const checkAuthState = () => {
    return (dispatch) => {
        const isAuth = JSON.parse(localStorage.getItem('isAuth'));
        if (!isAuth) {
            localStorage.setItem('isAuth', false);
        } else {
            dispatch(authSuccess());
        }
    };
};

export const setAuthRedirectPath = (path) => ({
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path
});

export const logout = () => ({ type: actionTypes.AUTH_LOGOUT });
