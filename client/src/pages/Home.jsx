import React from "react";

import Logo from "../assets/Logo.png";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <nav className="flex items-center justify-between px-10 py-2 border-b bg-blue-800">
        <div className="flex items-center gap-2 text-xl font-semibold text-blue-600 cursor-pointer">
          <img src={Logo} alt="Logo" className="w-20 h-25 object-contain" />
        </div>

        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li className="hover:text-yellow-300 cursor-pointer">Home</li>
          <li className="hover:text-yellow-300 cursor-pointer">Plan Trip</li>
          <li className="hover:text-yellow-300 cursor-pointer">AI Chat</li>
          <li className="hover:text-yellow-300 cursor-pointer">My Trips</li>
          <li className="hover:text-yellow-300 cursor-pointer">Profile</li>
        </ul>

        <div className="flex gap-4">
          <button className="px-4 py-2 rounded-lg bg-white  text-black hover:bg-yellow-300">
            Login
          </button>
          <button className="px-4 py-2 rounded-lg bg-white text-black hover:bg-yellow-300">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Home;
