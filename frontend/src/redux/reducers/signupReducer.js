import {
    MAKE_SIGNUP,
    MAKE_SIGNUP_ERROR,
    RESET_SIGNUP_ERROR
} from '../types'

const initialState = {
    newAccount: '',
    status: '',
    error: ''
}

export const signupReducer = (state = initialState, action) => {

    switch (action.type) {
        case MAKE_SIGNUP:
            return {
                ...state,
                newAccount: action.payload.newAccount,
            }
        case MAKE_SIGNUP_ERROR:
            return {
                ...state,
                newAccount: action.payload.newAccount,
                error: action.payload.error
            }
        case RESET_SIGNUP_ERROR:
            return {
                ...state,
                error: action.payload.error
            }
        default: return state
    }
}