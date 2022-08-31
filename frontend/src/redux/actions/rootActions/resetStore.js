import store from "../../store";
import { RESET_STORE } from "../../types";

const resetStore = ()=>{
    store.dispatch({
        type: RESET_STORE,
        payload: {}
    }); 
}
export default resetStore