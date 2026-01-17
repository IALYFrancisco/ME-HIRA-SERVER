import { Song } from "../models/Song.js"

export async function get_song(request, response) {
    try {
        let songs = await Song.find({}, {__v: 0})
        response.status(200).json(songs)
    } catch (error) {
        console.log("Erreur de récupération de toutes les chansons: " + error)
    }
    
}

export function checkQueryParams(request, response, next) {
    let validQueryParams = ["title", "size", "duration", "author", "file_url", "album"]
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
        let newSong = Song(request.body)
        await newSong.save()
        response.set('Content-Type', 'application/json')
        response.status(201).json("Resource created successfuly ✅")
    } catch (error) {
        response.status(500).json({"Error creating resource": error})
    }
}