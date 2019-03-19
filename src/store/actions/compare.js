import * as actionTypes from './actionTypes';

export const startCompare = () => {
    return {
        type: actionTypes.GET_COMPARE_ITEMS,
    }
};

export const getCompare = () => {
    return {
        type: actionTypes.GET_COMPARE_ITEMS,
    }
};

export const setCompare = (items) => {
    return {
        type: actionTypes.SET_COMPARE_ITEMS,
        compare: items
    }
};

export const removeCompare = (items) => {
    return {
        type: actionTypes.REMOVE_COMPARE_ITEMS,
        compare: items
    }
};