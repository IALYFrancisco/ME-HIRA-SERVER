import e from "express";
import { addSongs, checkQueryParams, getSong } from "../services/Song.js";

export const routes = e.Router()

routes.get('/songs', checkQueryParams, getSong)

routes.post('/songs', addSongs)