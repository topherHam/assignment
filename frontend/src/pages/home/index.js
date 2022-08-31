import { SmallButton } from '../../common/smallButton'
import { useAuth, useGetMyRecipes } from '../../hooks'
import CardContainer from './components/cardContainer'
import { AddRecipeForm } from './components/newRecipe'

const Home = () => {
    const { logout } = useAuth()
    const {data } = useGetMyRecipes()
    return (
        <>
            <SmallButton text='Logout' handler={() => logout()}/>
            <h2>Welcome to Recipes</h2>
            <div>
               {!(data.total > 0 && data.recipes.length === 0) && <AddRecipeForm />}
                <CardContainer />
            </div>
        </>
    )
}

export default Home