import { Router } from "express";
import { song_router } from "./song.js";

export const app_router = Router()

app_router.use('/songs', song_router)