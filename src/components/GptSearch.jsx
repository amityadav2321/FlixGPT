import React, { useRef, useState } from "react";
import { API_OPTIONS, IMG_BACKGROUND } from "../utils/constants";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieRecommendations } from "../utils/togetherAI";
import { addGptMovieResult } from "../utils/gptSlice";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearch = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchMovieTMDB = async (movie) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          movie
        )}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const json = await res.json();
      return json?.results || [];
    } catch (err) {
      console.error("TMDB Search Error:", err);
      return [];
    }
  };

  const handleSearch = async () => {
    const userInput = searchText.current.value.trim();

    if (!userInput) {
      setError("Please enter a search term.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const result = await fetchMovieRecommendations(userInput);

      if (!result || result.length === 0) {
        setError("No recommendations found.");
        setLoading(false);
        return;
      }

     
      const movieNames = result
        .split(",")
        .map((m) => m.trim())
        .filter(Boolean);

      const promiseArray = movieNames.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);

      dispatch(addGptMovieResult({ movieNames, movieResults: tmdbResults }));
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="relative flex justify-center items-start min-h-screen w-full overflow-x-hidden">
      
      <img
        src={IMG_BACKGROUND}
        alt="background"
        className="fixed inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

    
      <div className="z-20 w-full flex flex-col items-center px-4 pt-20">
       
        <div className="w-full max-w-2xl flex border-[2px] border-black rounded-md overflow-hidden bg-white mb-6">
          <input
            type="text"
            ref={searchText}
            placeholder={lang[langKey].gptSearchPlaceholder}
            className="w-full px-4 py-3 text-black text-sm focus:outline-none"
          />
          <button
            onClick={handleSearch}
            disabled={loading}
            className={`${
              loading ? "bg-gray-500" : "bg-red-700 hover:bg-red-800"
            } text-white px-6 py-3 font-semibold text-sm`}
          >
            {loading ? "Searching..." : lang[langKey].Search}
          </button>
        </div>

        
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Movie Recommendations */}
        <GptMovieSuggestion />
      </div>
    </div>
  );
};

export default GptSearch;
