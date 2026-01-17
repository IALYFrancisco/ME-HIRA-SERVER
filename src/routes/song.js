import { Router } from "express";
import { addSong, checkQueryParams, get_song } from "../services/song.js";

export const song_router = Router()

song_router.get('/get', checkQueryParams, get_song)
song_router.post('/post', addSong)