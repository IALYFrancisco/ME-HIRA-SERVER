import mongoose from "mongoose";

const songsSchema = mongoose.Schema({
    // titre du chanson
    titre : { type: String, required: true, default: "" },
    // taille du fichier en Mo
    taille : { type: Number, required: false, default: 0 },
    // durée du chanson en seconde
    duree : { type: Number, required: false, default: 0 },
    // chanteur/chanteuse du chanson
    auteur : { type: String, required: true, default: "" },
    // emplacement du fichier
    fichier_url : { type: String, required: true, default: "" },
    // album titulaire du chanson
    album : { type: String, required: false, default: "" }
})

const ChansonCollection = new mongoose.model("Chansons", songsSchema);

export default ChansonCollection