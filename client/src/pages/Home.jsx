import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/Logo.png";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <nav className="flex items-center justify-between px-10 py-2 border-b bg-blue-800">
        <div>
          <img src={Logo} alt="Logo" className="w-20 h-12 object-contain" />
        </div>

        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li className="hover:text-yellow-300 cursor-pointer">Home</li>
          <li className="hover:text-yellow-300 cursor-pointer">
            <Link to="/plan-trip">Plan Trip</Link>
          </li>

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

      {/* hero section*/}
      <section className="px-10 py-12">
        <div
          className="relative rounded-2xl overflow-hidden h-[380px] flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </section>
    </div>
  );
};

export default Home;
