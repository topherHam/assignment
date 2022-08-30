//import { useAuth } from "../../hooks/authHook"
//import { useGetMyRecipes } from "../../hooks/useGetRecipesByUser";
//import { useAuth } from "../../hooks/useAuth";
//import { getRecipes } from "../../store/actions/recipesAction";

import { useAuth } from "../../hooks/useAuth";
import store from "../../redux/store"

const Home = () => {
    const {token, logout} = useAuth();
    //console.log('home', token)
    //const { data, isError, isLoading } = useGetMyRecipes(token)

    //console.log(data, isError, isLoading)
    
    
    return (
        <>
        <h2>Welcome to Recipes</h2>
        <div>
            
        <a href="#" onClick={()=>logout()}>Logout</a>
        </div>
        </>
    )
}

export default Home