import React, { useState } from "react"
import { AuthContext } from "../../../../App"
import { AuthForm } from "../../../../common/authForm"
import { Message } from "../../../../common/message"
import { makeLogin } from "./api"

const Login = () => {
    const [message, setMessage] = useState()
    const authContext = React.useContext(AuthContext);

    const handleLogin = async (userName, password) => {
        try {
            const response = await makeLogin({ userName, password })
            if (response.status === 200) {
                authContext.onLogin(response.data.accessToken)
                return
            }
        } catch (error) {
            setMessage({text: error.response.data.message, type:'error'})
        }
    }

    return (
        <>
            <h2>Welcome</h2>
            <section>
                <AuthForm 
                    handleFormSubmit={handleLogin}
                    labelButton="Login"
                    />
                {message !== null && <Message message={message} callback={()=>setMessage(null)}/>}
            </section>
        </>
    )
}

export default Login