import axios from 'axios'
import { API_URL } from '../../../config/constants'
import store from '../../store'
import {
    MAKE_LOGOUT,
    MAKE_LOGOUT_ERROR,
} from '../../types'

const makeLogout = async (token) => {
    try {
        await axios.put(`${API_URL}/logout`, {}, { headers: { 'x-access-token': token } })
        store.dispatch({
            type: MAKE_LOGOUT,
            payload: {
                token: '',
                error: ''
            }
        });
        localStorage.clear()
    } catch (e) {
        localStorage.clear()
        store.dispatch({
            type: MAKE_LOGOUT_ERROR,
            payload: {
                token: '',
                error: e.response.data.message
            }
        })
    }   
}
export default makeLogout
