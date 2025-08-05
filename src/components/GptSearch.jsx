import React, { useState } from 'react';
import { IMG_BACKGROUND } from '../utils/constants'; // Your background image
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearch = () => {
  const [query, setQuery] = useState('');
  const langKey =useSelector(store=>store.config.lang)
  const handleSearch = () => {
    console.log("Searching for:", query);
  };

  return (
    <div className="relative flex justify-center items-start  h-screen w-full overflow-hidden">
      
      <img
        src={IMG_BACKGROUND}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

     
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      
      <div className="z-20 flex items-center my-20 max-w-2xl w-[90%] border-[2px] border-black rounded-md overflow-hidden bg-white">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-3 text-black text-sm focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 font-semibold text-sm"
        >
          {lang[langKey].Search}
        </button>
      </div>
    </div>
  );
};

export default GptSearch;
