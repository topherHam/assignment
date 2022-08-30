import { useAuth } from "../../hooks/authHook"
import { useGetMyRecipes } from "../../hooks/useGetRecipesByUser";
import { useMakeLogin } from "../../hooks/useMakeLogin";
//import { getRecipes } from "../../store/actions/recipesAction";

const Home = () => {
    const {token, logout} = useMakeLogin();
    console.log('home', token)
    //const { data, isError, isLoading } = useGetMyRecipes(token)

    //console.log(data, isError, isLoading)
    

    return (
        <>
        <a href="#" onClick={()=>logout()}>Logout</a>
        <h2>Welcome to Recipes</h2>
        <div>
            
        </div>
        </>
    )
}

export default Home