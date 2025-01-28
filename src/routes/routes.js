import express, { request, response } from "express";
import { addSong, checkQueryParams, getOneSong } from "../services/songServices.js";

const routes = express.Router()

routes.get('/songs', checkQueryParams, getSongs)

routes.post('/song', addSong)

export default routes