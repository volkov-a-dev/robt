import * as actionTypes from '../../constants/actionTypes';
import { updateObject } from '../../shared/utility';


const initialState = {
    news: [],
    loading: false,
};

const fetchInit = (state, action) =>  updateObject(state, {loading: true});
const fetchSuccess = (state, action) => {
    const newsList = updateObject(state.news, action.posts);

    return updateObject(state, {
        news: newsList,
        loading: false
    });
}
const fetchFail = (state, action) =>  updateObject(state, {loading: false});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALL_NEWS_START: return fetchInit(state, action);
        case actionTypes.FETCH_ALL_NEWS_SUCCESS: return fetchSuccess(state, action);
        case actionTypes.FETCH_ALL_NEWS_FAIL: return fetchFail(state, action)
        default: return state;
    }
}

export default reducer;