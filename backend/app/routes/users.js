import { Router } from 'express';
import UserController from '../controllers/UserController.js';
import authorizer from '../middlewares/authorizer.js'

let router = Router();

router.get('/recipes',authorizer, UserController.recipes)

export default router;