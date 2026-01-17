import mongoose from "mongoose"

export function db_connection() {
    mongoose.connect(process.env.DB_URI)
    .then(()=>console.log('Database connection succefully.'))
    .catch(()=>console.log('Database connection error.'))
}