import { useAuth } from "../../hooks/useAuth"
import CardContainer from "./components/cardContainer"
import { AddRecipeForm } from "./components/newRecipe"

const Home = () => {
    const { logout } = useAuth()
    return (
        <>
            <h2>Welcome to Recipes</h2>
            <div>
                <a href="#" onClick={() => logout()}>Logout</a>
                <AddRecipeForm/>
                <CardContainer/>
            </div>
        </>
    )
}

export default Home