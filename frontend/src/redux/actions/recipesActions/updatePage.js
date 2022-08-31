import store from '../../store'
import { UPDATE_PAGE } from '../../types'

const updatePage = (page) => {
    store.dispatch({
        type: UPDATE_PAGE,
        payload: page
    })
}

export default updatePage