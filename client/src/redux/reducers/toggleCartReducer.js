import { TOGGLE_CART } from "../type";

const initialState = {
    showCart: false,
}

const toggleCartReducer = (state = initialState, action) => {
    if (action.type === TOGGLE_CART) {
        return {
            ...state,
            showCart: action.payload,
        }   
    } else {
        return state;
    }
}

export default toggleCartReducer;