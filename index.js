import e from 'express'

import dotenv from 'dotenv'
import { app_router } from './src/routes/index.js'

dotenv.config()

const app = e()

app.use(e.json())

app.use(app_router)

app.listen(3000, ()=>{console.log(`The application is running at ${process.env.APP_HOST}`)})
