import {
    ADD_RECIPE,
    ADD_RECIPE_ERROR,
    GET_MY_RECIPES,
    GET_MY_RECIPES_ERROR,
    UPDATE_PAGE,
    UPDATE_RECIPES_LIST
} from '../types'

const initialState = {
    data: '',
    status: '',
    error: '',
    statusRequest: '',
    newRecipe:'',
    page:1
}

export const recipeReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_MY_RECIPES:
            return {
                ...state,
                data: action.payload.recipes,
                statusRequest: action.payload.statusRequest,
            }
        case GET_MY_RECIPES_ERROR:
            return {
                ...state,
                data: action.payload.recipes,
                error: action.payload.error,
                statusRequest: action.payload.statusRequest
            }
        case ADD_RECIPE:
            return {
                ...state,
                newRecipe: action.payload.newRecipe,
                error: action.payload.error,
                statusRequest: action.payload.statusRequest
            }
        case ADD_RECIPE_ERROR:
            return {
                ...state,
                newRecipe: action.payload.newRecipe,
                error: action.payload.error,
                statusRequest: action.payload.statusRequest
            }
        case UPDATE_RECIPES_LIST:
            return {
                ...state,
                data: {
                    ...state,
                    total: state.data.total + 1,
                    recipes: [...state.data.recipes, action.payload.newRecipe]
                },
                error: '',
                statusRequest: '',
                newRecipe:''
            }
        case UPDATE_PAGE:
            return {
                ...state,
                page: action.payload
            }

        default: return state
    }
}