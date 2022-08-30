import axios from 'axios'
import store from '../../store'
import {
    MAKE_LOGIN,
    MAKE_LOGIN_ERROR
} from '../../types'

const makeLogin = async (userCredentials) => {
    try {
        const response = await axios.post(`http://127.0.0.1:3000/login`, userCredentials)
        store.dispatch({
            type: MAKE_LOGIN,
            payload: {
                token: response.data.accessToken,
                error: ''
            }
        });
    } catch (e) {
        store.dispatch({
            type: MAKE_LOGIN_ERROR,
            payload: {
                token: '',
                error: e.response.data.message
            }
        });
    }
}
export default makeLogin
