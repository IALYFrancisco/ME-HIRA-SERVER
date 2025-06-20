import ChansonCollection from "../models/Song.js";

import { dbConnexion, dbDisconnexion } from "./dbServices.js";


// récupération de toutes les chansons dans la base de données

export async function getSong(request, response) {

    await dbConnexion()

    try {

        let songs = await ChansonCollection.find(request.query)

        if(songs == ""){
            
            response.status(404).json("Resources doesn't exist ⏺⏺")
        
        } else {
            
            response.status(200).json(songs)
        
        }

        await dbDisconnexion()

    } catch (error) {
        
        console.log("Erreur de récupération de toutes les chansons: " + error)

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

        return response.status(400).json({"Bad request ⛔⛔, the next fields are useless": invalidQueryParams})

    }

    next()
    
}

// ajout d'une chanson

export async function addSongs(request, response) {
    
    try {

        await dbConnexion()

        let newSong = ChansonCollection(request.body)

        await newSong.save()

        response.set('Content-Type', 'application/json')

        response.status(201).json("Resource created successfuly ✅")

    } catch (error) {

        response.status(500).json({"Error creating resource": error})

    } finally {

        await dbDisconnexion()

    }

}