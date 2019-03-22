import * as actionTypes from '../../constants/actionTypes';

let compareItems = localStorage.getItem('compare');
let compareArray = [];

if (compareItems) {
    compareArray = compareItems.split(',')
}

const initialState = {
    compare: compareArray,
    removeAll: true
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_COMPARE_ITEM: {
            return {
                ...state, 
                compare: [...action.compare],
                removeAll: action.removeAll
            }
        }
        case actionTypes.REMOVE_COMPARE_ITEM: {
            return {
                ...state,
                compare: [...action.compare],
                removeAll: action.removeAll
            }
        }
        case actionTypes.REMOVE_COMPARE_ALL_ITEMS: {
            return {
                ...state,
                compare: [],
                removeAll: action.removeAll
            }
        }
        default: return state;
    }
}

export default reducer;