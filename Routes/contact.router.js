import express from 'express'
import ContactController from '../Controllers/contact.controller.js'
const ContactRouter = express.Router()
const controller = new ContactController

ContactRouter.get('/contact', (req, res) => { controller.list(req, res) })
ContactRouter.get('/contact/:id([0-9]*)', (req, res) => { controller.details(req, res) })
ContactRouter.post('/contact', (req, res) => { controller.create(req, res) })
ContactRouter.put('/contact/:id([0-9]*)', (req, res) => { controller.update(req, res) })

export default ContactRouter