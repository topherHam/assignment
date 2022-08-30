import { useSelector } from 'react-redux'
import { makeLogin, makeLogout, selectData, selectErrorMessage, selectStatus, setToken } from '../redux/auth'
import { useAppDispatch } from '../redux/store'

export function useMakeLogin() {
    
  const dispatch = useAppDispatch()

  const status = useSelector((state) => selectStatus(state))
  const token = useSelector((state) => selectData(state))
  const errorMessage = useSelector((state) => selectErrorMessage(state))
  const state = useSelector((state) => state)

  const trigger = (userCredentials)=>{
    if (userCredentials !== null) {
      dispatch(makeLogin(userCredentials))
    }
  }

  const logout = ()=>{
    if (token) {
      console.log(token)
      dispatch(makeLogout(token))
    }
  }

  const lookToken = ()=>{
    const token = localStorage.getItem("token");
    if(token){
      dispatch(setToken(token))
      return true
    }
    return false
  }

  // derive status booleans for ease of use
  const isUninitialized = status === undefined
  const isLoading = status === 'pending' || status === undefined
  const isError = status === 'rejected'
  const isSuccess = status === 'fulfilled'

  // return the import data for the caller of the hook to use
  return { token, isUninitialized, isLoading, isError, isSuccess, trigger,logout, lookToken, errorMessage }
}