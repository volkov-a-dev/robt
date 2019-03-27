import { setCompare, removeCompare, removeAllCompare } from './actionCreators';

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
        localStorage.removeItem('compare');
        dispatch(removeAllCompare())
    }
};