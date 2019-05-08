const express = require('express')
const cors = require('cors')
const getMovies = require('./controllers/getMovies')
const app = express()
app.use(cors())
app.use(express.json())

const PORT = 4100

app.get('/api/movielist', getMovies.movieList)
app.get('/api/movielist/:id', getMovies.getMoviesById)
app.post('/api/addmovie', getMovies.addMovie)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))