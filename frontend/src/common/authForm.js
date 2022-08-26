import { useState } from "react"

export const AuthForm = ({ handleFormSubmit, labelButton }) => {
    const [userName, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleChangeUsername = (e) => setUsername(e.target.value)
    const handleChangePassword = (e) => setPassword(e.target.value)

    return (
        <form>
            <div>
                <label htmlFor="username">
                    Username
                </label>
                <input
                    id="username"
                    onChange={handleChangeUsername}
                    value={userName}
                />
            </div>

            <div>
                <label htmlFor="password">
                    Password
                </label>
                <input
                    id="password"
                    onChange={handleChangePassword}
                    value={password}
                    type="password"
                />
            </div>
            <button onClick={(e)=>{
                e.preventDefault()
                handleFormSubmit(userName, password)
                }}>
                {labelButton}
            </button>
        </form>
    )
}