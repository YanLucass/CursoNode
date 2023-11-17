import express from 'express'
const router = express.Router();
//controller
import AuthController from '../controllers/AuthController';
 
router.get('/login', AuthController.login);
router.post('/login', AuthController.loginPost)
router.get('/register', AuthController.register);
router.post('/register', AuthController.createUser);
router.get('/logout', AuthController.logout);

module.exports = router