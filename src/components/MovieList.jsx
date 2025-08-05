import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ title, movies }) {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-6 py-4">
      <h1 className="text-2xl md:text-3xl font-semibold text-white mb-4">{title}</h1>

      <div className="flex overflow-x-auto gap-4 scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
