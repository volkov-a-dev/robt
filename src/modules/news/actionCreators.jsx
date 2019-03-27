import * as actionTypes from './types';

export const fetchAllNewsStart = () => {
    return {
        type: actionTypes.FETCH_ALL_NEWS_START
    }
};

export const fetchAllNewsSuccess = news => {
    return {
        type: actionTypes.FETCH_ALL_NEWS_SUCCESS,
        posts: news
    }
};

export const fetchAllNewsFail = error => {
    return {
        type: actionTypes.FETCH_ALL_NEWS_FAIL,
        error: error
    }
};
