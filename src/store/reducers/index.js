import { combineReducers } from 'redux';

import compare from './compare';
import news from './news';
import forum from './forum'

const appReducers = combineReducers({
    compare,
    news,
    forum
})

export default appReducers;