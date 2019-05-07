const express = require('express')
const cors = require('cors')
const getMovies = require('./controllers/getMovies')
const app = express()
app.use(cors())
app.use(express.json())

const port = 4100

app.get('/api/movielist', getMovies.movieList)

app.listen(port, () => console.log(`Listening on port: ${port}`))