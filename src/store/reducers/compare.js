import * as actionTypes from '../actions/actionTypes';

const initialState = {
    compare: []
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_COMPARE_ITEMS: {
            return {...state}
        }
        case actionTypes.SET_COMPARE_ITEMS: {
            return {
                ...state, 
                compare: action.compare
            }
        }
        case actionTypes.REMOVE_COMPARE_ITEMS: {
            return {
                ...state,
                compare: action.compare
            }
        }
        default: return state;
    }
}

export default reducer;