import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../../App"
import { AuthForm } from "../../../../common/authForm"
import { Message } from "../../../../common/message"
import { makeSignup } from "./api"

const Signup = () => {
    const [message, setMessage] = useState()
    const authContext = React.useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleSignup = async (userName, password) => {
        try {
            const response = await makeSignup({ userName, password })
            if (response.status === 200) {
                authContext.onSignup(response.data.accessToken)
                navigate('/home')
                return
            }
        } catch (error) {
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