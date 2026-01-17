import e from 'express'
import { config } from 'dotenv'
import { app_router } from './src/routes/index.js'
import { cors_configuration } from './src/services/cors.js'
import { db_connection } from './src/services/database.js'

config()

const app = e()

app.use(e.json())

app.use(cors_configuration)

db_connection()

app.use(app_router)

app.listen(3000, ()=>{console.log(`The application is running at ${process.env.APP_HOST}`)})