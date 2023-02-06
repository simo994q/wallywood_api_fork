import express from 'express'
import CartController from '../Controllers/cart.controller.js'
import verifyToken from '../Middleware/verifytoken.js'
const CartRouter = express.Router()
const controller = new CartController

CartRouter.get('/cart', verifyToken, (req, res) => { controller.list(req, res) })
CartRouter.post('/cart', (req, res) => { controller.create(req, res) })
CartRouter.put('/cart', verifyToken, (req, res) => { controller.update(req, res) })
CartRouter.delete('/cart/:id([0-9]*)', verifyToken, (req, res) => { controller.remove(req, res) })

export default CartRouter