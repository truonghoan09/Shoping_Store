import { TOGGLE_THEME_MENU, TOGGLE_AVATAR_MENU, TOGGLE_MENU } from "../type";


interface initStateType {
    menu: number,
}

const initialState : initStateType = {
    menu: 0,
}

const actionMenuReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case TOGGLE_MENU:
            return({
                ...state,
                menu : action.payload,
            })
        default:
            return state;
    }
}

export default actionMenuReducer;