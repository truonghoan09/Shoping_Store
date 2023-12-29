import { TOGGLE_QUICKSHOP } from "../type";

const initialState = {
    data: {},
    showQuickshop: false,
}

const toggleQuickshopReducer = (state = initialState, action: any) => {
    if (action.type === TOGGLE_QUICKSHOP) {
        switch (action.payload.showQuickshop) {
            case true:
                return {
                    ...state,
                    data: action.payload.data,
                    showQuickshop: true,
                }
            case false: 
                return {
                    ...state,
                    data: action.payload.data,
                    showQuickshop: false,
                } 
            default:
                return state;
        }         
    } else {
        return state;
    }
}

export default toggleQuickshopReducer;