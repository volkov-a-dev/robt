import * as actionTypes from './types';
// import { updateObject } from '../../shared/utility';


const initialState = {
    topics: [],
    loading: false,
};

const fetchInit = (state, action) => {
    return {
        ...state,
        loading: true
    }
};
const fetchSuccess = (state, action) => {
    return {
        ...state,
        topics: action.posts,
        loading: false
    }
}
const fetchFail = (state, action) => {
    return {
        ...state,
        loading: false
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALL_FORUM_TOPICS_START: return fetchInit(state, action);
        case actionTypes.FETCH_ALL_FORUM_TOPICS_SUCCESS: return fetchSuccess(state, action);
        case actionTypes.FETCH_ALL_FORUM_TOPICS_FAIL: return fetchFail(state, action)
        default: return state;
    }
}

export default reducer;