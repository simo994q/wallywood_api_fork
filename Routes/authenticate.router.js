import express from 'express'
import AuthenticateController from '../Controllers/authenticate.controller.js'
import verifyToken from '../Middleware/verifytoken.js';
const AuthRouter = express.Router()

const controller = new AuthenticateController();

AuthRouter.post('/login', (req, res) => { controller.login(req, res)})
AuthRouter.get('/protected', verifyToken, (req, res) => { controller.protected(req, res)})

export default AuthRouter