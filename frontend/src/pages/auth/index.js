import { useState } from "react"
import Login from "./features/login"
import SignUp from "./features/signup"

const Auth = () => {
	const [option, setOption] = useState(1)

	const handleSwitch = () => setOption(option === 1 ? 2 : 1)

	return (
		<>
			<small onClick={() => handleSwitch()}>
			<a href="#" id="switch">

				{option === 1 ? `Not an account  yet? Let's create a new one!` : 'Back to login'}
			</a></small>
			{ option === 1 ? <Login /> : <SignUp changeAuthOption={() => handleSwitch()} /> }
		</>
	)
}
export default Auth