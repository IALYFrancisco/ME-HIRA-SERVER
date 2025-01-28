import express, { request, response } from "express";
import { addSong, checkQueryParams, getAllSongs, getOneSong } from "../services/songServices.js";

const routes = express.Router()

routes.get('/songs', getAllSongs)

routes.get('/song', checkQueryParams, getOneSong)

routes.post('/song', addSong)

export default routes