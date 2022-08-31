import store from '../../store'
import { UPDATE_RECIPES_LIST } from '../../types/recipeTypes'

const updateRecipesList = (newRecipe) => {
    store.dispatch({
        type: UPDATE_RECIPES_LIST,
        payload: newRecipe
    })
}

export default updateRecipesList