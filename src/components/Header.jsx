import React from 'react';
import logo from '../assets/Logo1.png';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full px-40 py-10 z-20 bg-gradient-to-b from-black/80 to-transparent">
      <img
        src={logo}
        alt="FlixGPT logo"
        className="h-14 md:h-16 w-auto"
      />
    </header>
  );
};

export default Header;
