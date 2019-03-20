import { combineReducers } from 'redux';

import compare from './compare';
import news from './news';

const appReducers = combineReducers({
    compare,
    news
})

export default appReducers;