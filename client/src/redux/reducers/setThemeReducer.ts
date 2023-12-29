import { SET_THEME } from "../type";

const initialState = {
    theme: localStorage.getItem('theme_now') || 'light'
}

const setThemeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_THEME:
            return {
                ...state,
                theme: action.payload,
            }
        default:
            return state;
    }
}

export default setThemeReducer;