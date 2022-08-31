import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getMyRecipes, updatePage } from '../../redux/actions/recipesActions';

const useGetMyRecipes = () => {

  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token)
  const data = useSelector((state) => state.recipes.data)
  const page = useSelector((state) => state.recipes.page)
  const error = useSelector((state) => state.recipes.error)
  const statusRequest = useSelector((state) => state.recipes.statusRequest)

  useEffect(() => {
    if (error === 'Unauthorized') {
      localStorage.clear()
      navigate('/auth')
    }
  }, [error, navigate])

  useEffect(() => {
    if (token) getMyRecipes(token, page)
  }, [token, page])
  const nextPage = ()=> updatePage(page+1)
  const backPage = ()=> updatePage(page-1)

  return { data, error, statusRequest, nextPage, backPage }
}

export default useGetMyRecipes