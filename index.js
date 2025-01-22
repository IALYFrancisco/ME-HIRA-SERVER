import express from 'express'
import dotenv from 'dotenv'
import routes from './src/routes/routes.js'

dotenv.config()

const app = express()

app.use('/', routes)

app.listen(process.env.APP_PORT, ()=>{
    console.log('http://127.0.0.1:3000')
})