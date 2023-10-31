import { ERROR_CHECK_TOKEN, RESPONSE_CHECK_TOKEN, } from "../type";
const initalState = {
    status: false,
    error: null,
};

const checkSignInReducer = (state = initalState, action) => {
    switch (action.type) {
        case RESPONSE_CHECK_TOKEN:
            return{
                ...state,
                status: action.payload
            }
        case ERROR_CHECK_TOKEN: 
            return {
                ...state,
                error: action.error,
            }
        default:
            return state;
    }
}

export default checkSignInReducer