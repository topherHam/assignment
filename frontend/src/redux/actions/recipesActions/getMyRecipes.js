import axios from 'axios'
import { API_URL } from '../../../config/constants'
import store from '../../store'
import {
    GET_MY_RECIPES,
    GET_MY_RECIPES_ERROR
} from '../../types'

const getMyRecipes = async (token, page) => {
    try {
        const response = await axios.get(`${API_URL}/user/recipes?page=${page}`, {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            }

        })
        store.dispatch({
            type: GET_MY_RECIPES,
            payload: {
                recipes: response.data,
                error: '',
                statusRequest: 'finished'
            }
        })
    } catch (e) {
        store.dispatch({
            type: GET_MY_RECIPES_ERROR,
            payload: {
                recipes: '',
                error: e.response.data.message,
                statusRequest: 'finished'
            }
        })
    }
}
export default getMyRecipes
