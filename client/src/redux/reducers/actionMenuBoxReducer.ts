import { TOGGLE_MENU_BOX } from "../type";


interface initStateType {
    onMenu: string,
}

const initialState : initStateType = {
    onMenu: '',
}

const actionMenuBoxReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case TOGGLE_MENU_BOX :
            return({
                ...state,
                onMenu : action.payload,
            })
        default:
            return state;
    }
}

export default actionMenuBoxReducer;