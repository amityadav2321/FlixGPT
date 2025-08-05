import React from 'react';
import { IMG_URL_CDN } from '../utils/constants';

function MovieCard({ posterPath }) {
  return (
    <div className="min-w-[180px] md:min-w-[220px] lg:min-w-[180px] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
      <img
        src={IMG_URL_CDN + posterPath}
        alt="Movie Poster"
        className="rounded-lg shadow-lg w-full h-auto object-cover"
      />
    </div>
  );
}

export default MovieCard;
