import { RESET_AUTH_ERROR } from "../../types";
import store from "../../store";

const resetError = () => {
    store.dispatch({
        type: RESET_AUTH_ERROR,
        payload: {
            token: '',
            error: ''
        }
    });
}
export default resetError