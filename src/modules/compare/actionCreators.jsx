import * as actionTypes from './types';

export const setCompare = (items) => {
    return {
        type: actionTypes.SET_COMPARE_ITEM,
        compare: items,
        removeAll: true
    }
};

export const removeCompare = (items) => {
    return {
        type: actionTypes.REMOVE_COMPARE_ITEM,
        compare: items,
        removeAll: true
    }
};


export const removeAllCompare = () => {
    return {
        type: actionTypes.REMOVE_COMPARE_ALL_ITEMS,
        compare: [],
        removeAll: false
    }
};
