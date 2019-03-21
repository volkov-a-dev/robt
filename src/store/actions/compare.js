import * as actionTypes from '../../constants/actionTypes';

export const getCompare = (items) => {
    return {
        type: actionTypes.GET_COMPARE_ITEM,
        compare: items,
        removeAll: true
    }
};

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

export const addCompare = (id, addedItems) => {
    return dispatch => {
        let newArray = addedItems;
        newArray.push(id);
        localStorage.setItem('compare', newArray.join(','));
        dispatch(setCompare(newArray))
    }
}


export const remomeByIdCompare = (id, addedItems) => {
    return dispatch => {
        let newArray = addedItems;
        let indexIdInArray = newArray.indexOf(id)
    
        newArray.splice(indexIdInArray, 1);
    
        localStorage.setItem('compare', newArray.join(','));

        dispatch(removeCompare(newArray))
    }
}

export const removeAllIdsCompare = () => {
    return dispatch => {
        console.log('removre compare js action')
        localStorage.removeItem('compare');
        dispatch(removeAllCompare())
    }
};