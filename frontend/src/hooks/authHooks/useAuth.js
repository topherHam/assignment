import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { makeLogin, makeLogout, resetAuthError, setToken } from '../../redux/actions/authActions'
import resetStore from '../../redux/actions/rootActions/resetStore'

const useAuth = () => {
  const token = useSelector((state) => state.auth.token)
  const error = useSelector((state) => state.auth.error)
  const navigate = useNavigate();
  const login = (userCredentials) => {
    if (userCredentials !== null) {
      resetAuthError()
      makeLogin(userCredentials)
    }
  }

  const logout = () => {
    if (token) {
      makeLogout(token)
    }
  }
  const handleAuth = ()=>{
    localStorage.clear()
    resetStore()
    navigate('/auth')
  }

  const lookToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token)
      return true
    }
    return false
  }

  return { token, login, lookToken, logout, error,handleAuth }
}
export default useAuth