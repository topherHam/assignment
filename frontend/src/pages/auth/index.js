import { useState } from "react"
import { SmallButton } from "../../common/smallButton"
import Login from "./features/login"
import SignUp from "./features/signup"

const Auth = () => {
	const [option, setOption] = useState(1)

	const handleSwitch = () => setOption(option === 1 ? 2 : 1)

	return (
		<>
			<SmallButton text={option === 1 ? `Not an account  yet? Let's create a new one!` : 'Back to login'} handler={() => handleSwitch()} />
			{option === 1 ? <Login /> : <SignUp changeAuthOption={() => handleSwitch()} />}
		</>
	)
}
export default Auth