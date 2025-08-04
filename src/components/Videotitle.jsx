import React from 'react';
import { FaPlay } from 'react-icons/fa'; // Font Awesome Play icon

function Videotitle({ title, overview }) {
  return (
    <div className='w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black'>

      <h1 className='font-extrabold text-5xl my-4'>{title}</h1>
      <p className='text-lg w-[50%] my-4 '>{overview}</p>

      <div className='flex gap-4 mt-6'>
        <button className='bg-white text-black py-2 px-6 rounded-md text-lg font-semibold flex items-center gap-2 hover:bg-gray-300 transition'>
          <FaPlay />
          Play
        </button>
        <button className='bg-gray-600  text-white py-2 px-6 rounded-md text-lg font-semibold bg-opacity-50 hover:bg-gray-500 transition'>
          ⓘ More Info
        </button>
      </div>
    </div>
  );
}

export default Videotitle;

