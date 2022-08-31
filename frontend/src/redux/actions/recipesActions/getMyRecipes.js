import axios from 'axios'
import store from '../../store'
import {
    GET_MY_RECIPES,
    GET_MY_RECIPES_ERROR
} from '../../types'

const getMyRecipes = async (token, page) => {
    try {
        const response = await axios.get(`http://127.0.0.1:3000/user/recipes?page=${page}`, {
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
