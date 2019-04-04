import { combineReducers } from 'redux';

import {reducer as compare } from '../../modules/compare';
import {reducer as news } from '../../modules/news';
import {reducer as forum } from '../../modules/forum'

const appReducers = combineReducers({
    compare,
    news,
    forum
})

export default appReducers;