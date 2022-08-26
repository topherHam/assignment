import React, { useState } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../../../../App"
import { makeLogin } from "./api"

const Login = () => {
    const [userName, setUsername] = useState()
    const [password, setPassword] = useState()

    const authContext =  React.useContext(AuthContext);

    const handleChangeUsername = (e) => setUsername(e.target.value)
    const handleChangePassword = (e) => setPassword(e.target.value)

    const handleLogin = async ()=> {
        const response = await makeLogin({userName, password}) 
        if(response.status === 200){
            authContext.onLogin(response.data.accessToken)
            
        }
    }

    return (
        <>
            <h2>Welcome</h2>
            <section>
            <label htmlFor="username">
                    Username
                </label>
                <input
                    id="username"
                    onChange={handleChangeUsername}
                    value={userName}
                />
                <label htmlFor="password">
                    Password
                </label>
                <input
                    id="password"
                    onChange={handleChangePassword}
                    value={password}
                    type="password"
                />
                <button onClick={handleLogin}>
                    Login
                </button>
            </section>
        </>
    )
}

export default Login