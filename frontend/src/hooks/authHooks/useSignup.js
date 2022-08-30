import { useSelector } from 'react-redux'
import { makeSignup, resetSignupError } from '../../redux/actions/signupActions'

const useSignup = () => {
  const newAccount = useSelector((state) => state.signup.newAccount)
  const error = useSelector((state) => state.signup.error)

  const signup = (newUser) => {
    if (newUser !== null) {
      resetSignupError()
      makeSignup(newUser)
    }
  }

  return { newAccount, signup, error }
}

export default useSignup