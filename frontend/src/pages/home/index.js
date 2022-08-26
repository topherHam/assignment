import { useAuth } from "../../hooks/authHook"

const Home = () => {
    const {token} = useAuth();
    return (
        <>
        this is the home {token}
        </>
    )
}

export default Home