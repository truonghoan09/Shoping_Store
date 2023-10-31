import {SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_ERROR} from '../type.js'

const initalState = {
    loading: false,
    data: null,
    error: null
};

const signInReducer = (state = initalState, action) => {
    switch (action.type) {
        case SIGN_IN_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case SIGN_IN_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default signInReducer;
