import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValid from "../utils/validation";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate=useNavigate();

  const email =useRef(null);
  const password= useRef(null);
  const [isSignIn,setSignIn]=useState(true);
  const [errorMessage,setErrorMessage]=useState();
  // const message=checkValid(email.current.value,password.current.value)
  // console.log(message);
  // const handleForm =()=>{
  //   const message = checkValid(email.current.value,password.current.value);
  //   console.log(message);
  // }
  const toggleSignIn= () => {
    setSignIn(!isSignIn);
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute h-full w-full object-cover z-0"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
        alt="background"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Header */}
      <div className="z-30 relative">
        <Header />
      </div>

      {/* Login Form */}
      <form  onSubmit={(e) => {
            e.preventDefault();
            const message = checkValid(email.current.value, password.current.value);
            setErrorMessage(message);

            if(message) return;

            if(!isSignIn){
              createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
              .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                
                navigate("/browse");
              
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " - "+ errorMessage);
              
              });
            }
            else{
              signInWithEmailAndPassword(auth, email.current.value, password.current.value)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
               
                navigate("/browse");
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " - "+ errorMessage);
              });
            }
    
  }} className="absolute top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 bg-black/60  p-10 rounded-md text-white z-20">
        <h2 className="text-3xl font-bold mb-6">{isSignIn ? "Sign In" : "Sign Up "}</h2>

        {!isSignIn && <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-4 p-3 bg-zinc-800 rounded text-white placeholder-gray-400"
        />}

        <input
          type="email"
          ref={email}
          placeholder="Email or mobile number"
          className="w-full mb-4 p-3 bg-zinc-800 rounded text-white placeholder-gray-400"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="w-full mb-4 p-3 bg-zinc-800 rounded text-white placeholder-gray-400"
        />
        {errorMessage!=null &&<div className="flex justify-center">
            <p className="text-red-600 font-bold pb-4">{errorMessage}</p>
        </div>}
        
        
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 transition-all duration-200 py-3 rounded font-semibold"
          
        >
          {isSignIn ? "Sign In" : "Sign Up "}
        </button>

        <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <a href="#" className="hover:underline">Need help?</a>
        </div>

        <div className="mt-6 text-gray-400">
          {isSignIn ? "New to FlixGPT?" : "Already Registered"}{" "}
          <a className="text-white cursor-pointer hover:underline" onClick={toggleSignIn}>{isSignIn ? "Sign Up now" : "Sign In now"}</a>.
        </div>
      </form>
    </div>
  );
}

export default Login;
