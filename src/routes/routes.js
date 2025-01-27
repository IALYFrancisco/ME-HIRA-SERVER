import express, { request, response } from "express";
import { getAllSongs, getOneSong } from "../services/songServices.js";

const routes = express.Router()

routes.get('/songs', getAllSongs)

routes.get('/song', getOneSong)

export default routes