import mongoose from "mongoose"

export async function dbConnexion() {
    try {
        await  mongoose.connect(process.env.DB_URI)
        console.log('Connexion à la base de données réussie')
    }catch(error){
        console.log("Erreur de connexion à la base de données: " + error)
    }
}