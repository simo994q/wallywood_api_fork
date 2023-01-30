import express from 'express'
import OrgController from '../Controllers/org.controller.js'
const OrgRouter = express.Router()
const controller = new OrgController

OrgRouter.get('/org', (req, res) => { controller.list(req, res) })
OrgRouter.post('/org', (req, res) => { controller.create(req, res) })
OrgRouter.put('/org/:id([0-9]*)', (req, res) => { controller.update(req, res) })
OrgRouter.delete('/org/:id([0-9]*)', (req, res) => { controller.remove(req, res) })

export default OrgRouter