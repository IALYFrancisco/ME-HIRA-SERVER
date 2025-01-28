import express, { response } from 'express'
import dotenv from 'dotenv'
import routes from './src/routes/routes.js'

dotenv.config()

const app = express()

app.use(express.json())

app.get('/', (requet, response) => {
    response.set('Content-Type', 'application/json')
    response.status(200).json('Welcome to me-hira server 🎵😁')
})

app.use('/', routes)

app.listen(process.env.APP_PORT, ()=>{
    console.log('http://127.0.0.1:3000')
})