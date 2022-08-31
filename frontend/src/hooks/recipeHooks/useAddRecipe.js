import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addRecipe, updateRecipesList } from '../../redux/actions/recipesActions';
import useAuth from '../authHooks/useAuth';

const useAddRecipe = () => {
    const navigate = useNavigate();
    const {handleAuth} = useAuth()
    const token = useSelector((state) => state.auth.token)
    const newRecipe = useSelector((state) => state.recipes.newRecipe)
    const error = useSelector((state) => state.recipes.error)
    const statusRequest = useSelector((state) => state.recipes.statusRequest)

    useEffect(() => {
        if (error === 'Unauthorized') {
            handleAuth()
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