import * as actionTypes from './actionTypes';
import { axiosMain } from '../../axios-path-config';

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

export const fetchInitAllNews = () => {
    return dispatch => {
        dispatch(fetchAllNewsStart());
        axiosMain.get('/news')
            .then(res => {
                dispatch(fetchAllNewsSuccess(res.data))
            })
            .catch(error => {
                dispatch(fetchAllNewsFail(error))
            })
    }
}