const express = require('express')

const getMovies = require('./controllers/getMovies')
const app = express()

app.use(express.json())

const PORT = 4100

app.get('/api/movielist', getMovies.movieList)
app.get('/api/movielist/:id', getMovies.getMoviesById)
app.post('/api/addmovie', getMovies.addMovie)

app.put('/api/edit/:id', getMovies.editMovie)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))