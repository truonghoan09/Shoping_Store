import {ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_ERROR} from '../type.js'


const initalState = {
    loading: false,
    data: null,
    error: null
};

const addUserReducer = (state = initalState, action: any) => {
    switch (action.type) {
        case ADD_USER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ADD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case ADD_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default addUserReducer;
