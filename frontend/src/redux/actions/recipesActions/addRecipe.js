import axios from 'axios'
import store from '../../store'
import {
    ADD_RECIPE,
    ADD_RECIPE_ERROR
} from '../../types'

const addRecipe = async (data, token) => {
    try {
        const response = await axios.post(`http://127.0.0.1:3000/recipe`, data, {
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
