import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthForm } from "../../../../common/authForm"
import { Message } from "../../../../common/message"
import { makeSignup } from "./api"

const Signup = ({changeAuthOption}) => {
    const [message, setMessage] = useState()
    const navigate = useNavigate();
    
    const handleSignup = async (userName, password) => {
        try {
            const response = await makeSignup({ userName, password })
            console.log(response.status)
            if (response.status === 201) {
                console.log(12)
                changeAuthOption()
               // navigate('/login')
                return
            }
        } catch (error) {
            console.log(error)
            setMessage({text: error.response.data.message, type:'error'})
        }
    }

    return (
        <>
            <h2>Create an account quickly</h2>
            <section>
                <AuthForm 
                    handleFormSubmit={handleSignup}
                    labelButton="Signup"
                    />
                {message !== null && <Message message={message} callback={()=>setMessage(null)}/>}
            </section>
        </>
    )
}

export default Signup