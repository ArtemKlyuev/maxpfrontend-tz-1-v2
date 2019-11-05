import * as actionTypes from './actionTypes';

const fetchUserDataStart = () => ({
    type: actionTypes.FETCH_USER_DATA_START
});

const fetchUserDataSuccess = (data) => ({
    type: actionTypes.FETCH_USER_DATA_SUCCESS,
    data
});

const fetchUserDataFail = (error) => ({
    type: actionTypes.FETCH_USER_DATA_START,
    error
});

export const fetchUserData = () => {
    return (dispatch) => {
        dispatch(fetchUserDataStart());
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                dispatch(fetchUserDataSuccess(data));
            })
            .catch((err) => {
                console.log('user data error', err);
                dispatch(fetchUserDataFail(err));
            });
    };
};
