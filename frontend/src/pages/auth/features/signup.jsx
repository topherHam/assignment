import React, { useEffect, useState } from 'react'
import { AuthForm } from '../../../common/authForm'
import { Message } from '../../../common/message'
import { useSignup } from '../../../hooks'

const Signup = ({ changeAuthOption }) => {
    const [message, setMessage] = useState()
    const { newAccount, signup, error } = useSignup()

    useEffect(() => {
        if (newAccount) {
            changeAuthOption()
        }
    }, [newAccount, changeAuthOption])

    useEffect(() => {
        if (error) {
            setMessage({ text: error, type: 'error' })
        }
    }, [error])

    const handleSignup = async (userName, password) => signup({ userName, password })

    return (
        <>
            <h2>Create an account quickly</h2>
            <section>
                <AuthForm
                    handleFormSubmit={handleSignup}
                    labelButton='Signup'
                />
                {message !== null && <Message message={message} callback={() => setMessage(null)} />}
            </section>
        </>
    )
}

export default Signup