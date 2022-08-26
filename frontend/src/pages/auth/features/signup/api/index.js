import axios from "axios"

export const makeSignup = () => axios.post(`http://127.0.0.1:3000/signup`,
    {
        "userName": "Christopher",
        "password": "12346"
    }
)