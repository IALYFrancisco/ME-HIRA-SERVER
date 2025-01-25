import mongoose from "mongoose";

function getOneSong(request, response) {
    console.log(request.query)
    response.send("OK")   
}

export default getOneSong