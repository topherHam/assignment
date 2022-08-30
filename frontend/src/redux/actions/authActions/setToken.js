
import store from '../../store'
import { 
    SET_TOKEN } from '../../types'

const setToken = (token) => {
    store.dispatch({
        type: SET_TOKEN,
        payload: {
            token:token,
            error:''
        }
    });
}

export default setToken