import ChansonCollection from "../models/songsModel.js";

import { dbConnexion, dbDisconnexion } from "./dbServices.js";


// récupération de toutes les chansons dans la base de données

export async function getAllSongs(request, response) {

    await dbConnexion()

    try {

        let allSongs = await ChansonCollection.find({})

        console.log("Toutes les chansons sont récupérées.")

        if(allSongs == ""){
            
            response.json("Pas de chanson dans la base de données, la collection est vide.")
        
        } else {
            
            response.status(200).json(allSongs)
        
        }

        await dbDisconnexion()

    } catch (error) {
        
        console.log("Erreur de récupération de toutes les chansons: " + error)

        await dbDisconnexion()
    
    }
    
}


// récupération d'une seule chanson

export async function getOneSong(request, response) {

    let songs;

    try {

        await dbConnexion()
        
        songs = await ChansonCollection.find(request.query)

        response.set("Content-Type", "application/json")

        response.status(200).json(songs)

     } catch (error) {

        console.log("There are an errors: " + error)

        response.set("Content-Type", "application/json")

        response.status(500).json(error)

    } finally {

        await dbDisconnexion()

    }

}


// middelware qui vérifie la validité des paramètres de requête

export function checkQueryParams(request, response, next) {

    let validQueryParams = ["_id", "titre", "taille", "duree", "auteur", "fichier_url", "album"]

    let currentQueryParams = Object.keys(request.query)
    
    let invalidQueryParams = currentQueryParams.filter((param) => {

        return !validQueryParams.includes(param)

    })
    
    if(invalidQueryParams.length > 0) {

        return response.status(400).json("Bad request")

    }

    next()
    
}
