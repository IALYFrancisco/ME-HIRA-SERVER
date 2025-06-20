import mongoose from "mongoose";

const songsSchema = mongoose.Schema({
    title : { type: String, required: true},
    size : { type: Number },
    duration : { type: Number },
    author : { type: String, required: true },
    file_url : { type: String, required: true },
    album : { type: String },
    add_date : { type: Date, required: true, default: Date.now }
})

export const Song = new mongoose.model("Songs", songsSchema);