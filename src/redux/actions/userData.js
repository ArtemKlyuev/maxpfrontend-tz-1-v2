import * as actionTypes from './actionTypes';

export const fetchUserDataStart = () => ({
    type: actionTypes.FETCH_USER_DATA_START
});

export const fetchUserDataSuccess = (data) => ({
    type: actionTypes.FETCH_USER_DATA_SUCCESS,
    data
});

export const fetchUserDataFail = (error) => ({
    type: actionTypes.FETCH_USER_DATA_FAIL,
    error
});

export const fetchUserData = () => ({type:actionTypes.FETCH_USER_DATA})