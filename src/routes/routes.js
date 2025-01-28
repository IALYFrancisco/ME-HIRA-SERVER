import express, { request, response } from "express";
import { checkQueryParams, getAllSongs, getOneSong } from "../services/songServices.js";

const routes = express.Router()

routes.get('/songs', getAllSongs)

routes.get('/song', checkQueryParams, getOneSong)

export default routes