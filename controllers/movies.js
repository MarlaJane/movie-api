const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.send(movies)
}

const getMovieByTitle = ('/:title', (request, response) => {
  const { title } = request.params

  const foundMovieByTitle = movies.filter((movies) => {
    return movies.title.toLowerCase().includes(title.toLowerCase())
  })
  if (!movies.length) return response.sendStatus(404)
  return response.send(foundMovieByTitle)
})

const getMoviesByDirector = ('/:director', (request, response) => {
  const { director } = request.params

  const foundMoviesByDirector = movies.filter((movies) => {
    return movies.director.toLowerCase().includes(director.toLowerCase())
  })
  if (!movies.length) return response.sendStatus(404)
  return response.send(foundMoviesByDirector)
})

const createNewMovie = (request, response) => {
  const { title, directors, releaseDate, rating, runTime, genres } = request.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    return response
      .status(400)
      .send('Please fill out each field: title, directors, releaseDate, rating, runTime, genres')
  }

  const newMovie = { title, directors, releaseDate, rating, runTime, genres }

  movies.push(newMovie)

  return response.status(201).send(newMovie)

}

module.exports = { getAllMovies, getMovieByTitle, getMoviesByDirector, createNewMovie }