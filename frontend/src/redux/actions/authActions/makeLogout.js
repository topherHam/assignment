
import axios from "axios";
import store from "../../store";
import {
    MAKE_LOGOUT,
    MAKE_LOGOUT_ERROR,
} from "../../types";

const makeLogout = async (token) => {
    try {
        await axios.put(`http://127.0.0.1:3000/logout`, {}, { headers: { 'x-access-token': token } })
        store.dispatch({
            type: MAKE_LOGOUT,
            payload: {
                token: '',
                error: ''
            }
        });
    } catch (e) {
        store.dispatch({
            type: MAKE_LOGOUT_ERROR,
            payload: {
                token: '',
                error: e.response.data.message
            }
        });
    }
    localStorage.clear()
}
export default makeLogout
