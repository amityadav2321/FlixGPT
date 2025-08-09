import React from 'react';
import { useSelector } from 'react-redux';

const GptMovieSuggestion = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames || movieResults.length === 0) return null;


  const allTmdbMovies = movieResults
    .flat()
    .filter(
      (movie, index, self) =>
        movie.poster_path && self.findIndex(m => m.id === movie.id) === index
    );

  return (
    <div className="w-full px-4 py-6 text-white max-w-7xl mx-auto rounded-lg bg-black/30 backdrop-blur-[3px]">


      
<div className="mb-10">
  <h2 className="text-2xl font-bold mb-4 text-center">Recommended Movies</h2>
  <div className="flex flex-wrap justify-center gap-4 overflow-x-auto hide-scrollbar pb-2">
    {movieResults.map((resultList, index) => {
      const firstValidMovie = resultList.find(movie => movie.poster_path);
      if (!firstValidMovie) return null;

      return (
        <div
          key={movieNames[index]}
          className="flex-none w-36 bg-white/10 rounded-md shadow-md hover:scale-105 transition-transform duration-300"
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${firstValidMovie.poster_path}`}
            alt={firstValidMovie.title}
            className="w-full h-52 object-cover rounded-t-md"
          />
          <div className="p-2 text-sm text-center">
            <h4 className="font-semibold truncate">{movieNames[index]}</h4>
          </div>
        </div>
      );
    })}
  </div>
</div>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">Similar Movies</h2>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
          {allTmdbMovies.map((movie) => (
            <div
              key={movie.id}
              className="flex-none w-36 bg-white/10 rounded-md shadow-md hover:scale-105 transition-transform duration-300"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-52 object-cover rounded-t-md"
              />
              <div className="p-2 text-sm">
                <h4 className="truncate font-semibold">{movie.title}</h4>
                <p className="text-gray-300 text-xs">{movie.release_date || 'Unknown'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </div>
  );
};

export default GptMovieSuggestion;
