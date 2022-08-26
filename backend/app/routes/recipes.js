import { Router } from 'express';
import RecipeController from '../controllers/RecipesController.js';
import authorizer from '../middlewares/authorizer.js';

let router = Router();

router.post('/',authorizer, RecipeController.create)

export default router;