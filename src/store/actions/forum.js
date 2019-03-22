import * as actionTypes from '../../constants/actionTypes';
import { axiosMain } from '../../axios-path-config';

export const fetchAllMainTopics = () => {
    return {
        type: actionTypes.FETCH_ALL_FORUM_TOPICS_START
    }
};

export const fetchAllMainTopicsSuccess = news => {
    return {
        type: actionTypes.FETCH_ALL_FORUM_TOPICS_SUCCESS,
        posts: news
    }
};

export const fetchAllMainTopicsFail = error => {
    return {
        type: actionTypes.FETCH_ALL_FORUM_TOPICS_FAIL,
        error: error
    }
};

export const fetchInitMainTopics = () => {
    return dispatch => {
        dispatch(fetchAllMainTopics());
        axiosMain.get('/forum-main')
            .then(res => {
                dispatch(fetchAllMainTopicsSuccess(res.data))
            })
            .catch(error => {
                dispatch(fetchAllMainTopicsFail(error))
            })
    }
}