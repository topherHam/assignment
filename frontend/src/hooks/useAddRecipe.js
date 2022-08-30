import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addRecipe } from '../redux/actions/recipesActions'
import updateRecipesList from '../redux/actions/recipesActions/updateRecipesList';

const useAddRecipe = () => {
    const navigate = useNavigate();
    const token = useSelector((state) => state.auth.token)
    const newRecipe = useSelector((state) => state.recipes.newRecipe)
    const error = useSelector((state) => state.recipes.error)
    const statusRequest = useSelector((state) => state.recipes.statusRequest)

    useEffect(() => {
        if (error === 'Unauthorized') {
            localStorage.clear()
            navigate('/auth')
        }
    }, [error, navigate])
    useEffect(() => {
        if (newRecipe) {
            updateRecipesList(newRecipe)
        }
    }, [newRecipe])

    const add = (recipe) => addRecipe(recipe, token)

    return { newRecipe, error, statusRequest, add }
}

export default useAddRecipe