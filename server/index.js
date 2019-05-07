const express = require('express')
const axios = require('axios')
const getMovies = require('./controllers/getMovies')


const app = express()
app.use(express.json())
const port = 4000


app.listen(port, () => console.log(`Listening on port: ${port}`))