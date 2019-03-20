import * as actionTypes from '../../constants/actionTypes';

export const getCompare = () => {
    return {
        type: actionTypes.GET_COMPARE_ITEM,
    }
};

export const setCompare = (items) => {
    return {
        type: actionTypes.SET_COMPARE_ITEM,
        compare: items
    }
};

export const removeCompare = (items) => {
    return {
        type: actionTypes.REMOVE_COMPARE_ITEM,
        compare: items
    }
};


export const removeAllCompare = (items) => {
    return {
        type: actionTypes.REMOVE_COMPARE_ITEM,
        compare: items
    }
};

export const addCompare = (id, addedItems) => {
    console.log('123123123123')
    return dispatch => {
        dispatch(getCompare());

        let newArray = addedItems;

        newArray.push(id);
        
        localStorage.setItem('compare', newArray.join(','));

        dispatch(setCompare(newArray))
        console.log(newArray, 'action compare.js', );
    }
}