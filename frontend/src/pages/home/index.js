import { useAuth } from '../../hooks'
import CardContainer from './components/cardContainer'
import { AddRecipeForm } from './components/newRecipe'

const Home = () => {
    const { logout } = useAuth()

    return (
        <>
            <a href='#' onClick={() => logout()}>Logout</a>
            <h2>Welcome to Recipes</h2>
            <div>
                <AddRecipeForm />
                <CardContainer />
            </div>
        </>
    )
}

export default Home