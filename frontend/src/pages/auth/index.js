
import { useState } from "react"
import Login from "./features/login"
import SignUp from "./features/signup"

const Auth = () => {
	const [option, setOption] = useState(1)

	const handleSwitch = () => setOption(option === 1 ? 2 : 1)

	return (
		<>
			<a href="#">
				<small onClick={()=>handleSwitch()}>
				{option === 1 ? `Not an account  yet? Let's create a new one!` : 'Back to login'}
				</small></a>
			{option === 1 ? <Login/> : <SignUp changeAuthOption={()=>handleSwitch()} />}
		</>
	)
}
export default Auth