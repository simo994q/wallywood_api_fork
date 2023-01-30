import express from 'express'
import CartController from '../Controllers/cart.controller.js'
const CartRouter = express.Router()
const controller = new CartController

CartRouter.get('/cart', (req, res) => { controller.list(req, res) })
CartRouter.post('/cart', (req, res) => { controller.create(req, res) })
CartRouter.put('/cart/:id([0-9]*)', (req, res) => { controller.update(req, res) })
CartRouter.delete('/cart/:id([0-9]*)', (req, res) => { controller.remove(req, res) })

export default CartRouter