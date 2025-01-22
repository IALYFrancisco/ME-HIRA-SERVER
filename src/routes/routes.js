import express, { request, response } from "express";

const routes = express.Router()

routes.get('/songs', (request, response) => {
    response.status(200).json('list of songs')
})

export default routes