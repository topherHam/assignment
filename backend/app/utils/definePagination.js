import { LIMIT_PER_PAGE } from "../constants.js"

export const definePagination = (req) => {
    let page = req.query.page ? parseInt(req.query.page) : 1
    const limit = req.query.limit ? parseInt(req.query.limit) : LIMIT_PER_PAGE
    return {
        limit,
        skip: (page - 1) * limit
    }
}
