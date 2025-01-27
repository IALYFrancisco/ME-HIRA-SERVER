import ChansonCollection from "../models/songsModel.js";
import dbConnexion from "./dbServices.js";
import mongoose from "mongoose";

//déconnexion à la base de données
async function dbDisconnexion() {
    try {
        await mongoose.disconnect()
        console.log('Déconnexion à la base de données réussie.')
    }catch(error){
        console.log('Erreur de déconnexion à la base de données: ' + error)
    }
}

// résupération de toutes les chansons dans la base de données
async function getAllSongs(request, response) {

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

export default getAllSongs