import axios from "axios"
export const makeLogin = (userCredentials) => axios.post(`http://127.0.0.1:3000/login`, userCredentials)