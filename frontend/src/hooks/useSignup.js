import { useSelector } from 'react-redux'
import { makeSignup, resetSignupError } from '../redux/actions/signupActions'

export function useSignup() {
  const newAccount = useSelector((state) => state.signup.newAccount)
  const error = useSelector((state) => state.signup.error)

  const signup = (newUser) => {
    if (newUser !== null) {
      resetSignupError()
      makeSignup(newUser)
    }
  }


  // return the import data for the caller of the hook to use
  return { newAccount, signup, error }
}