import * as actionTypes from './types';

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