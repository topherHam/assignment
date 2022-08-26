import { Router } from 'express';
import AuthController from '../controllers/AuthController.js';
import authorizer from '../middlewares/authorizer.js';
import checkDuplicateUsername from '../middlewares/usernameCheck.js'

let router = Router();

router.post('/login', AuthController.login)
router.post('/signup', checkDuplicateUsername, AuthController.signup)
router.put('/logout', authorizer, AuthController.logout)

export default router;