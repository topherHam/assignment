import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthForm } from "../../../../common/authForm"
import { Message } from "../../../../common/message"
import { useSignup } from "../../../../hooks"

const Signup = ({changeAuthOption}) => {
    const [message, setMessage] = useState()
    const {newAccount, signup,error } = useSignup()

    useEffect(()=>{
        if(newAccount){
            changeAuthOption()
        }
    },[newAccount, changeAuthOption])

    useEffect(()=>{
        console.log(error)
        if(error){
            setMessage({text: error, type:'error'})
        }
    }, [error])
    
    const handleSignup = async (userName, password) => {
        signup({ userName, password })
        /*try {
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
            setMessage({text: error.response.newAccount.message, type:'error'})
        }*/
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