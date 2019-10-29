import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    userData: null
};

const fetchUserDataStart = (state, action) => state;

const fetchUserDataSuccesss = (state, action) =>
    updateObject(state, { userData: action.data });

const fetchUserDataFail = (state, action) => state;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USER_DATA_START:
            return fetchUserDataStart(state, action);
        case actionTypes.FETCH_USER_DATA_SUCCESS:
            return fetchUserDataSuccesss(state, action);
        case actionTypes.FETCH_USER_DATA_FAIL:
            return fetchUserDataFail(state, action);
        default:
            return state;
    }
};

export default reducer;
