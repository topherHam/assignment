import { RESET_SIGNUP_ERROR } from "../../types";
import store from "../../store";

const resetError = () => {
    store.dispatch({
        type: RESET_SIGNUP_ERROR,
        payload: {
            token: '',
            error: ''
        }
    });
}
export default resetError