import { Router } from "express";
import { addSong, checkQueryParams, getSong } from "../services/song.js";

export const song_router = Router()

song_router.get('/get', checkQueryParams, getSong)

song_router.post('/post', addSong)