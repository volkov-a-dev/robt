import { fetchAllMainTopics, fetchAllMainTopicsSuccess, fetchAllMainTopicsFail } from './actionCreators';
import { axiosMain } from '../../axios-path-config';

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