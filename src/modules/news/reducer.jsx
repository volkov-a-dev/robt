import * as actionTypes from './types';

const initialState = {
    news: [],
    loading: false,
};

const fetchInit = (state, action) => {
    return {
        ...state,
        loading: true
    }
};

const fetchSuccess = (state, action) => {
    const newsList = [...state.news, action.posts];
    return {
        ...state,
        news: newsList,
        loading: false
    }
};

const fetchFail = (state, action) =>  {
    return {
        ...state,
        loading: false
    }    
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALL_NEWS_START: return fetchInit(state, action);
        case actionTypes.FETCH_ALL_NEWS_SUCCESS: return fetchSuccess(state, action);
        case actionTypes.FETCH_ALL_NEWS_FAIL: return fetchFail(state, action)
        default: return state;
    }
}

export default reducer;