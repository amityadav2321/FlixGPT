import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

function SecondaryContainer() {
  const movies = useSelector(store => store.movie)
  return (
    <div>
      <div>
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovie} />
          <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
          <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
          <MovieList title={"Popular"} movies={movies?.popularMovies} />
      </div>
      
    </div>
  )
}

export default SecondaryContainer
