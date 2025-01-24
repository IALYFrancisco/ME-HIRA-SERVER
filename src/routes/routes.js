import express, { request, response } from "express";
import getAllSongs from "../services/songServices.js";

const routes = express.Router()

routes.get('/songs', getAllSongs)

export default routes