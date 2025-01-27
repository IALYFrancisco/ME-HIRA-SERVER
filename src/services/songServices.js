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
        }else {
            response.status(200).json("Listes de toutes chansons dans la collection: " + allSongs)
        }

        await dbDisconnexion()

    }catch (error) {
        console.log("Erreur de récupération de toutes les chansons: " + error)

        await dbDisconnexion()
    }
    
}

export function getOneSong(request, response) {
    console.log(request.query)
    response.send("OK")   
}