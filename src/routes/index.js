import { Router } from "express";

export const app_router = Router()

app_router.get("/", (req, res)=>{
    res.json("get away")
})