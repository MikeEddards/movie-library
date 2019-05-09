const express = require('express')

const getMovies = require('./controllers/getMovies')
const app = express()

app.use(express.json())

const PORT = 4100

app.get('/api/movielist', getMovies.movieList)
app.get('/api/moviesearch/:id', getMovies.getMoviesByTitle)

app.post('/api/addmovie', getMovies.addMovie)

app.put('/api/edit/:id', getMovies.editMovie)

app.delete('/api/deletemovie/:id', getMovies.deleteMovie)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))