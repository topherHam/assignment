import React, { useState } from "react"
import { useEffect } from "react"
//import { AuthContext } from "../../../../App"
import { AuthForm } from "../../../../common/authForm"
import { Message } from "../../../../common/message"
import { useMakeLogin } from "../../../../hooks/useMakeLogin"
//import { makeLogin } from "./api"
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [message, setMessage] = useState()
    const { token, isError, isLoading, trigger, lookToken, errorMessage } = useMakeLogin()
    const navigate = useNavigate();    

    useEffect(()=>{
        if(!(isError || isLoading) && token){
            console.log(token)
            localStorage.setItem("token", token)
            navigate('/home')
        }
        else if(!token){
            lookToken()
        } 
    },[token, isError, isLoading, lookToken, navigate])
    useEffect(()=>{
        if(errorMessage){
            setMessage({text: errorMessage, type:'error'})
        }
    }, [errorMessage])

    const handleLogin = async (userName, password) => {
        trigger({userName, password})
        /*try {
            const response = await makeLogin({ userName, password })
            if (response.status === 200) {
                authContext.onLogin(response.data.accessToken)
                return
            }
        } catch (error) {
            setMessage({text: error.response.data.message, type:'error'})
        }*/
        //setCredentials({ userName, password })
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
