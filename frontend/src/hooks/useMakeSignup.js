import { useSelector } from 'react-redux'
import { makeSignup, selectData, selectErrorMessage, selectStatus } from '../redux/signup'

import { useAppDispatch } from '../redux/store'

export function useMakeSignup() {
    
  const dispatch = useAppDispatch()

  const status = useSelector((state) => selectStatus(state))
  const data = useSelector((state) => selectData(state))
  const errorMessage = useSelector((state) => selectErrorMessage(state))

  const trigger = (newUser)=>{
    if (newUser !== null) {
      dispatch(makeSignup(newUser))
    }
  }

  // derive status booleans for ease of use
  const isUninitialized = status === undefined
  const isLoading = status === 'pending' || status === undefined
  const isError = status === 'rejected'
  const isSuccess = status === 'fulfilled'

  // return the import data for the caller of the hook to use
  return { data, isUninitialized, isLoading, isError, isSuccess, trigger, errorMessage }
}