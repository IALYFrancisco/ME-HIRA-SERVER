import e from "express";
import { addSong, checkQueryParams, getSong } from "../services/Song.js";

export const song_routes = e.Router()

song_routes.get('/get', checkQueryParams, getSong)

song_routes.post('/post', addSong)