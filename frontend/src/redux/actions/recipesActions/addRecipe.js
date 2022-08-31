import axios from 'axios'
import { API_URL } from '../../../config/constants'
import store from '../../store'
import {
    ADD_RECIPE,
    ADD_RECIPE_ERROR
} from '../../types'

const addRecipe = async (data, token) => {
    try {
        const response = await axios.post(`${API_URL}/recipe`, data, {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            }

        })
        store.dispatch({
            type: ADD_RECIPE,
            payload: {
                newRecipe: response.data,
                error: '',
                statusRequest: 'finished'
            }
        })
    } catch (e) {
        store.dispatch({
            type: ADD_RECIPE_ERROR,
            payload: {
                newRecipe: '',
                error: e.response.data.message,
                statusRequest: 'finished'
            }
        })
    }
}
export default addRecipe
