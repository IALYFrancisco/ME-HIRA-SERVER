import e from 'express'

import dotenv from 'dotenv'

import { song_routes } from './src/routes/song.js'

dotenv.config()

const app = e()

app.use(e.json())

app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.setHeader('Access-Control-Allow-Methods', '*')
    next();
})

app.get('/', (requet, response) => {

    response.set('Content-Type', 'application/json')

    response.status(200).json('Welcome to me-hira server 🎵😁')

})

app.use('/song', song_routes)

app.listen(3000, ()=>{console.log(`The application is running at ${process.env.APP_HOST}`)})
