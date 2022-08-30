import {
    MAKE_LOGIN,
    MAKE_LOGOUT,
    SET_TOKEN,
    MAKE_LOGIN_ERROR,
    MAKE_LOGOUT_ERROR,
    RESET_AUTH_ERROR
} from '../types'

const initialState = {
    token: '',
    status: '',
    error: ''
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload.token,
            }
        case MAKE_LOGIN:
            return {
                ...state,
                token: action.payload.token,
                error: action.payload.error
            }
        case MAKE_LOGIN_ERROR:
            return {
                ...state,
                error: action.payload.error
            }
        case MAKE_LOGOUT:
            return {
                ...state,
                token: action.payload.token,
                error: action.payload.error
            }
        case MAKE_LOGOUT_ERROR:
            return {
                ...state,
                token: action.payload.token,
                error: action.payload.error
            }
        case RESET_AUTH_ERROR:
            return {
                ...state,
                error: action.payload.error
            }
        default: return state
    }
}