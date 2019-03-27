import { combineReducers } from 'redux';

import compare from '../../modules/compare/reducer';
import news from '../../modules/news/reducer';
import forum from '../../modules/forum/reducer'

const appReducers = combineReducers({
    compare,
    news,
    forum
})

export default appReducers;