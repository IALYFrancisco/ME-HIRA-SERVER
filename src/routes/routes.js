import express, { request, response } from "express";
import { addSong, checkQueryParams, getSongs, getOneSong } from "../services/songServices.js";

const routes = express.Router()

routes.get('/songs', getSongs)

routes.get('/song', checkQueryParams, getOneSong)

routes.post('/song', addSong)

export default routes