import express from 'express'
import GenreController from '../Controllers/genre.controller.js'
const GenreRouter = express.Router()
const controller = new GenreController

GenreRouter.get('/genre', (req, res) => { controller.list(req, res) })
GenreRouter.get('/genre/:id([0-9]*)', (req, res) => { controller.details(req, res) })
GenreRouter.post('/genre', (req, res) => { controller.create(req, res) })
GenreRouter.put('/genre/:id([0-9]*)', (req, res) => { controller.update(req, res) })

export default GenreRouter