import { useAuth } from "../../hooks/authHook"

const Home = () => {
    const {token} = useAuth();

    

    return (
        <>
        <h2>Welcome to Recipes</h2>
        <div>
            
        </div>
        </>
    )
}

export default Home