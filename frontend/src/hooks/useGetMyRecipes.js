import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getMyRecipes } from '../redux/actions/recipesActions'


export function useGetMyRecipes() {

  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token)
  const data = useSelector((state) => state.recipes.data)
  const error = useSelector((state) => state.recipes.error)
  const statusRequest = useSelector((state) => state.recipes.statusRequest)

  useEffect(() => {
    if (error === 'Unauthorized') {
      localStorage.clear()
      navigate('/auth')
    }
  }, [error, navigate])

  useEffect(() => {
    if (token) getMyRecipes(token)
  }, [token])

  // return the import data for the caller of the hook to use
  return { data, error, statusRequest }
}