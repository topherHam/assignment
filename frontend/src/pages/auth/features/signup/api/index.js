import axios from "axios"

export const makeSignup = (newUser) => axios.post(`http://127.0.0.1:3000/signup`, newUser)