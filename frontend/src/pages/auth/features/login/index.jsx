import React, { useState } from "react"
import { useEffect } from "react"
//import { AuthContext } from "../../../../App"
import { AuthForm } from "../../../../common/authForm"
import { Message } from "../../../../common/message"
import { useAuth } from "../../../../hooks/useAuth"
//import { makeLogin } from "./api"
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [message, setMessage] = useState()
    const { token,
        login,
        lookToken,
        error,
    // isError, isLoading, trigger, , errorMessage*/
 } = useAuth()
    const navigate = useNavigate();    

    useEffect(()=>{
        if(token){
            localStorage.setItem("token", token)
            navigate('/home')
        }
        else if(!token && lookToken()){
            console.log(54)
        } 
    },[token, navigate])
    useEffect(()=>{
        if(error){
            setMessage({text: error, type:'error'})
        }
    }, [error])

    const handleLogin = async (userName, password) => {
        login({userName, password})
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
