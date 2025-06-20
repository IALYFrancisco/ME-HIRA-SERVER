import { Song } from "../models/Song.js";
import { dbConnexion, dbDisconnexion } from "./dbServices.js";

export async function getSong(request, response) {
    await dbConnexion()
    try {
        let songs = await Song.find()
        response.status(200).json({
            message: "List of song.",
            data: songs
        })
    } catch (error) {
        console.log("Erreur de récupération de toutes les chansons: " + error)
    }finally {
        await dbDisconnexion()
    }
    
}

export function checkQueryParams(request, response, next) {
    let validQueryParams = ["_id", "titre", "taille", "duree", "auteur", "fichier_url", "album"]
    let currentQueryParams = Object.keys(request.query)
    let invalidQueryParams = currentQueryParams.filter((param) => {
        return !validQueryParams.includes(param)
    })
    if(invalidQueryParams.length > 0) {
        return response.status(400).json({"Bad request ⛔⛔, the next fields are useless": invalidQueryParams})
    }
    next()
}

export async function addSong(request, response) {
    try {
        await dbConnexion()
        let newSong = Song(request.body)
        await newSong.save()
        response.set('Content-Type', 'application/json')
        response.status(201).json("Resource created successfuly ✅")
    } catch (error) {
        response.status(500).json({"Error creating resource": error})
    } finally {
        await dbDisconnexion()
    }
}