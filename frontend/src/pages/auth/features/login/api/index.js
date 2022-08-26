import axios from "axios"
export const makeLogin = () => axios.post(`http://127.0.0.1:3000/login`,
    {
        "userName": "Christopher",
        "password": "123"
    }
)