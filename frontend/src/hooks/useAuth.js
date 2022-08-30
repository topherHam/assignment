import { useSelector } from 'react-redux'
import { makeLogin, makeLogout, resetAuthError, setToken } from '../redux/actions/authActions'

export function useAuth() {
  const token = useSelector((state) => state.auth.token)
  const error = useSelector((state) => state.auth.error)

  const login = (userCredentials)=>{
    if (userCredentials !== null) {
      resetAuthError()
      makeLogin(userCredentials)
    }
  }

  const logout = ()=>{
    if (token) {
      makeLogout(token)
    }
  }

  const lookToken = () => {
    const token = localStorage.getItem("token");
    if(token){
      setToken(token)
    }
  }

  return { token, login, lookToken, logout, error }
}