import * as actionTypes from '../../constants/actionTypes';

let compareItems = localStorage.getItem('compare');
let compareArray = [];

if (compareItems) {
    compareArray = compareItems.split(',')
}

const initialState = {
    compare: compareArray
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_COMPARE_ITEM: {
            return {...state}
        }
        case actionTypes.SET_COMPARE_ITEM: {
            return {
                ...state, 
                compare: action.compare
            }
        }
        case actionTypes.REMOVE_COMPARE_ITEM: {
            return {
                ...state,
                compare: action.compare
            }
        }
        case actionTypes.REMOVE_COMPARE_ALL_ITEMS: {
            return {
                ...state,
                compare: action.compare
            }
        }
        default: return state;
    }
}

export default reducer;