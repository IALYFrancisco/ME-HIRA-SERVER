import mongoose from "mongoose";

const songsSchema = mongoose.Schema({
    title : { type: String, required: true, default: "" },
    size : { type: Number, required: false, default: 0 },
    duration : { type: Number, required: false, default: 0 },
    author : { type: String, required: true, default: "" },
    file_url : { type: String, required: true, default: "" },
    album : { type: String, required: false, default: "" },
    add_date : { type: Date, required: true, default: Date.now }
})

export const Song = new mongoose.model("Songs", songsSchema);