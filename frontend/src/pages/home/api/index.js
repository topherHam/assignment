import axios from "axios"

export const makeGetMyRecipes = (token) => axios.get(`http://127.0.0.1:3000/user/recipes`, {
    'Content-Type': 'application/json',
    'x-access-token': token

})