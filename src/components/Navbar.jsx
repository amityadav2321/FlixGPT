import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/Logo1.png';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
import Maincontainer from './Maincontainer';
import SecondaryContainer from './SecondaryContainer';

const Navbar = () => {
  const navigate = useNavigate();
  const { data: user } = useSelector((store) => store.user);

  return (
    <div>
    <nav className="flex items-center justify-between px-6 pb-2 pt-3 bg-black text-white">
      {/* Left: Logo and Links */}
      <div className="flex items-center space-x-8">
        <img src={logo} alt="FLIXGPT" className="w-28 object-contain" />
        <div className="hidden md:flex space-x-6 text-sm">
          <Link to="/browse" className="hover:text-gray-300">Home</Link>
          <Link to="/tv" className="hover:text-gray-300">TV Shows</Link>
          <Link to="/movies" className="hover:text-gray-300">Movies</Link>
          <Link to="/new" className="hover:text-gray-300">New & Popular</Link>
          <Link to="/mylist" className="hover:text-gray-300">My List</Link>
        </div>
      </div>

      {/* Right: Welcome + Sign Out */}
      {user && (
        <div className="flex items-center space-x-4">
          <span className="text-sm hidden md:inline">
            Welcome, <b>{user.displayName}</b>
          </span>
          <button
            onClick={() => {
              signOut(auth).then(() => navigate("/")).catch(() => navigate("/error"));
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
