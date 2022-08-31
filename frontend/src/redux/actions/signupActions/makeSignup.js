import axios from 'axios'
import { API_URL } from '../../../config/constants'
import store from '../../store'
import {
    MAKE_SIGNUP,
    MAKE_SIGNUP_ERROR
} from '../../types'

const makeSignup = async (newUser) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, newUser)
        store.dispatch({
            type: MAKE_SIGNUP,
            payload: {
                newAccount: response.data,
                error: ''
            }
        })
    } catch (e) {
        store.dispatch({
            type: MAKE_SIGNUP_ERROR,
            payload: {
                newAccount: '',
                error: e.response.data.message
            }
        })
    }
}
export default makeSignup
