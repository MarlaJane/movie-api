const express = require('express')
const bodyParser = require('body-parser')
const { getAllMovies, getMovieByTitle, getMoviesByDirector, createNewMovie } = require('./controllers/movies')

const app = express()

app.get('/', getAllMovies)

app.get('/:title', getMovieByTitle)

app.get('/:director', getMoviesByDirector)

app.post('/movies', bodyParser.json(), createNewMovie)

app.all('*', (request, response) => response.status(404).send('Page Not Found'))


app.listen(2319, () => {
  console.log('Listening on port 2319...')
})
