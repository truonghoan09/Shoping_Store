
import { SET_THEME, TOGGLE_QUICKSHOP } from "./type.js"
import axios from "axios"
import {ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_ERROR, SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_ERROR, SEND_REQUEST_CHECK_TOKEN, RESPONSE_CHECK_TOKEN, ERROR_CHECK_TOKEN, UPLOAD_FILE_SUCCESS, UPLOAD_FILE_REQUEST, UPLOAD_FILE_FAILURE} from "./type.js"


export const setTheme = (theme_name) => {
    return ({
        type: SET_THEME,
        payload: theme_name,
    })
}

export const addUser = (data) => {
	return async (dispatch) => {
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
        } catch (error) {
            dispatch({type: ADD_USER_ERROR, error: error.message})
        }
    }
};

export const signIn = (data) => {
	return async (dispatch) => {
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
        } catch (error) {
            dispatch({type: SIGN_IN_ERROR, error: error.message})
        }
    }
};

export const checkIsSignIn = (token) => {
    return async (dispatch) => {
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
        } catch (error) {
            dispatch({type: ERROR_CHECK_TOKEN, error: error.message})
        }
    }
}


export const toggleQuickshop = (data) => {
    return ({
        type: TOGGLE_QUICKSHOP,
        payload: data,
    })
}
