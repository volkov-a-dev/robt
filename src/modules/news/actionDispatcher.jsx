import { fetchAllNewsStart, fetchAllNewsSuccess, fetchAllNewsFail } from './actionCreators';
import { axiosMain } from '../../axios-path-config';

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