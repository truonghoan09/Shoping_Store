
import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, SET_THEME, TOGGLE_AVATAR_MENU, TOGGLE_CART, TOGGLE_MENU, TOGGLE_MENU_BOX, TOGGLE_QUICKSHOP, TOGGLE_THEME_MENU } from "./type.js"
import axios from "axios"
import {ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_ERROR, SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_ERROR, SEND_REQUEST_CHECK_TOKEN, RESPONSE_CHECK_TOKEN, ERROR_CHECK_TOKEN, UPLOAD_FILE_SUCCESS, UPLOAD_FILE_REQUEST, UPLOAD_FILE_FAILURE} from "./type.js"
import { productsType, typeItem } from "../pages/Product/ProductManage.js"


export const setTheme = (theme_name: string) => {
    return ({
        type: SET_THEME,
        payload: theme_name,
    })
}

export const addUser = (data: object) => {
	return async (dispatch: any) => {
        dispatch({type: ADD_USER_REQUEST})
        try {
            let responseAddStudent = await axios ({
                method: 'post',
                url: 'http://localhost:8008/api/create_new_user',
                data: {
                    data: data,
                }
            })
            dispatch({type: ADD_USER_SUCCESS, payload: responseAddStudent.data})
        } catch (error: any) {
            dispatch({type: ADD_USER_ERROR, error: error.message})
        }
    }
};

export const signIn = (data: object) => {
	return async (dispatch: any) => {
        dispatch({type: SIGN_IN_REQUEST})
        try {
            let responseAddStudent = await axios ({
                method: 'post',
                url: 'http://localhost:8008/api/sign_in',
                data: {
                    data: data,
                }
            })
            dispatch({type: SIGN_IN_SUCCESS, payload: responseAddStudent.data})
        } catch (error: any) {
            dispatch({type: SIGN_IN_ERROR, error: error.message})
        }
    }
};

export const checkIsSignIn = (token: string | null) => {
    return async (dispatch: any) => {
        dispatch({type: SEND_REQUEST_CHECK_TOKEN})
        try {
            let response = await axios({
                method: 'post',
                url: 'http://localhost:8008/api/check_token',
                data: {
                    token: token
                }
            })
            dispatch({type: RESPONSE_CHECK_TOKEN, payload: response.data})
        } catch (error: any) {
            dispatch({type: ERROR_CHECK_TOKEN, error: error.message})
        }
    }
}
 
export const toggleQuickshop = (data: any) => {
    return ({
        type: TOGGLE_QUICKSHOP,
        payload: data,
    })
}

export const toggleCart = (boolean: boolean) => {
    return({
        type: TOGGLE_CART,
        payload: boolean,
    })
}

export const addProductToCart = (product: object) => {
    return({
        type: ADD_PRODUCT_TO_CART,
        payload: product,
    })
}

export const removeProductFromCart = (i: number) => {
    return({
        type: REMOVE_PRODUCT_FROM_CART,
        payload: i,
    })
}

export const toggleMenu = (value : number) => {
    // dispatch 1 con số, số đó đại diện cho menu muốn bật lên:
    // 0 : tắt menu, tắt hết
    // 1 : theme menu
    // 2 : avt menu
    return({
        type: TOGGLE_MENU,
        payload: value,
    })
}

export const toggleMenuBox = (value: string) => {
    //true -> Bật menu ra
    //false -> Tắt menu
    return({
        type: TOGGLE_MENU_BOX,
        payload: value,
    })
}