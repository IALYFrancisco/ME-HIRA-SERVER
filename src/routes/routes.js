import express, { request, response } from "express";
import getAllSongs from "../services/songServices.js";
import getOneSong from "../services/getOneSong.js";

const routes = express.Router()

routes.get('/songs', getAllSongs)

routes.get('/songs/:id', getOneSong)

export default routes