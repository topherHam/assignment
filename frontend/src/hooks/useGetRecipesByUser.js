import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getMyRecipes, selectData, selectStatus } from '../redux/recipes'
import { useAppDispatch } from '../redux/store'


export function useGetMyRecipes(token) {
    
  const dispatch = useAppDispatch()
  // select the current status from the store state for the provided name
  const status = useSelector((state) => selectStatus(state))
  // select the current data from the store state for the provided name
  const data = useSelector((state) => selectData(state))
  useEffect(() => {
    // upon mount or name change, if status is uninitialized, send a request
    // for the pokemon name
    if (status === undefined) {
      dispatch(getMyRecipes(token))
    }
  }, [status,token, dispatch])

  // derive status booleans for ease of use
  const isUninitialized = status === undefined
  const isLoading = status === 'pending' || status === undefined
  const isError = status === 'rejected'
  const isSuccess = status === 'fulfilled'

  // return the import data for the caller of the hook to use
  return { data, isUninitialized, isLoading, isError, isSuccess }
}