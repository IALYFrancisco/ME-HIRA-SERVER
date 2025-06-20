import e from "express";
import { addSongs, checkQueryParams, getSongs } from "../services/Song.js";

const routes = e.Router()

routes.get('/songs', checkQueryParams, getSongs)

routes.post('/songs', addSongs)

export default routes