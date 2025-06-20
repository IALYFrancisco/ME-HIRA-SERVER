import mongoose from "mongoose";

const songsSchema = mongoose.Schema({
    titre : { type: String, required: true, default: "" },
    taille : { type: Number, required: false, default: 0 },
    duree : { type: Number, required: false, default: 0 },
    auteur : { type: String, required: true, default: "" },
    fichier_url : { type: String, required: true, default: "" },
    album : { type: String, required: false, default: "" },
    add_date : { type: Date, required: true, default: Date.now }
})

export const Song = new mongoose.model("Songs", songsSchema);