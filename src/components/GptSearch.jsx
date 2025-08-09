import React, { useRef, useState } from 'react';
import { API_OPTIONS, IMG_BACKGROUND } from '../utils/constants'; // Your background image
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';

import { fetchMovieRecommendations } from '../utils/togetherAI';  // ✅ correct path
import { addGptMovieResult } from '../utils/gptSlice';
import GptMovieSuggestion from './GptMovieSuggestion';


const GptSearch = () => {
  
  const langKey =useSelector(store=>store.config.lang);
  const searchText =useRef(null);
  const dispatch = useDispatch();
  

  const searchMovieTMDB = async(movie)=>{
    const data =await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS)
    const json =await data.json();
    return json.results;
  }

  const handleSearch = async () => {
  const userInput = searchText.current.value;

  const result = await fetchMovieRecommendations(userInput);
  if(result.length==0){
    // error
  }
  const getMovies=result.split(", ")
  console.log(getMovies)

  const promiseArray = getMovies.map(movie=>searchMovieTMDB(movie))
  const tmdbResults = await Promise.all(promiseArray);
  console.log(tmdbResults);

  dispatch(addGptMovieResult({movieNames:getMovies,movieResults:tmdbResults}))


};;

  return (
  <div className="relative flex justify-center items-start min-h-screen w-full overflow-x-hidden">
    {/* Background */}
    <img
      src={IMG_BACKGROUND}
      alt="background"
      className="fixed inset-0 w-full h-full object-cover z-0"
    />
    <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

    {/* Content Wrapper */}
    <div className="z-20 w-full flex flex-col items-center px-4 pt-20">
      
      {/* Search Bar */}
      <div className="w-full max-w-2xl flex border-[2px] border-black rounded-md overflow-hidden bg-white mb-10">
        <input
          type="text"
          ref={searchText}
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="w-full px-4 py-3 text-black text-sm focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 font-semibold text-sm"
        >
          {lang[langKey].Search}
        </button>
      </div>

      {/* Movie Recommendations */}
      <GptMovieSuggestion />

    </div>
  </div>
);

};

export default GptSearch;
