import React, { useEffect } from 'react';
import logo from '../assets/Logo1.png';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  useEffect(()=>{
                onAuthStateChanged(auth, (user) => {
                if (user) {
                    
                    const {uid,email,displayName} = user;
                    dispatch(addUser({uid:uid,email:email,displayName:displayName}));
                    navigate("/browse")

                    // ...
                } else {
                   
                    dispatch(removeUser());
                    navigate("/")
                }
                });

    },[])
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
