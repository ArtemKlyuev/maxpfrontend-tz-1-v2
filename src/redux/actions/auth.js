import * as actionTypes from './actionTypes';

export const authStart = () => ({ type: actionTypes.AUTH_START });

export const authSuccess = () => ({ type: actionTypes.AUTH_SUCCESS });

export const authFail = () => ({ type: actionTypes.AUTH_FAIL });

export const logout = () => ({ type: actionTypes.AUTH_LOGOUT });
