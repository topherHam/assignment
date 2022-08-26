import { Router } from 'express'

import auth from './auth.js'
import user from './users.js'
import recipe from './recipes.js'

let rootRouter = Router()

rootRouter.use('/', auth)
rootRouter.use('/user', user)
rootRouter.use('/recipe', recipe)

export default rootRouter;