import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/Logo1.png';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { toggleGptSearchView } from '../utils/gptSlice';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: user } = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleShowGPTSearch = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <div>
      <nav
        className={`flex items-center justify-between px-6 py-3 sticky top-0 w-full z-30
          ${
            showGptSearch
              ? 'bg-black bg-opacity-70 backdrop-blur-md shadow-md'
              : 'bg-gradient-to-b from-black/90 to-transparent'
          }
          text-white transition-all duration-300 ease-in-out
        `}
      >
        {/* Left: Logo */}
        <div className="flex items-center space-x-8">
          <img src={logo} alt="FLIXGPT" className="w-28 object-contain" />
        </div>

        {/* Right: Welcome + Buttons */}
        {user && (
          <div className="flex items-center space-x-4">
            <span className="text-sm hidden md:inline">
              Welcome, <b>{user.displayName}</b>
            </span>
            <button
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white font-medium px-4 py-1 rounded text-sm shadow transition duration-200"
              onClick={handleShowGPTSearch}
            >
              GPT Search
            </button>
            <button
              onClick={() => {
                signOut(auth).then(() => navigate('/')).catch(() => navigate('/error'));
              }}
              className="bg-red-600 px-4 py-1 rounded hover:bg-red-700 text-sm"
            >
              Sign Out
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
 