import React, { useState } from 'react'
import { useEffect } from 'react'
import { AuthForm } from '../../../common/authForm'
import { Message } from '../../../common/message'
import { useAuth } from '../../../hooks'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [message, setMessage] = useState()
    const { token, login, lookToken, error } = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token)
            navigate('/home')
        }
        else if (!token && lookToken())  {
        }
    }, [token, navigate, lookToken])

    useEffect(() => {
        if (error) setMessage({ text: error, type: 'error' })
    }, [error])

    const handleLogin = async (userName, password) => login({ userName, password })

    return (
        <>
            <h2>Welcome</h2>
            <section>
                <AuthForm
                    handleFormSubmit={handleLogin}
                    labelButton='Login'
                />
                {message !== null && <Message message={message} callback={() => setMessage(null)} />}
            </section>
        </>
    )
}

export default Login
