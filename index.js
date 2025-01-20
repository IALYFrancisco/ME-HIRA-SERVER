const express = require('express')

const dotenv = require('dotenv')

dotenv.config()

const app = express()

app.get('/', (request, response) => {
    response.json('Ready to start')
})

app.listen(process.env.APP_PORT, ()=>{
    console.log('http://127.0.0.1:3000')
})