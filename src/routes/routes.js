import e from "express";
import { addSongs, checkQueryParams, getSong } from "../services/Song.js";

const routes = e.Router()

routes.get('/songs', checkQueryParams, getSong)

routes.post('/songs', addSongs)

export default routes