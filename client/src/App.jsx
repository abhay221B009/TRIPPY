// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Discover from "./pages/Discover";
import PlanTrips from "./pages/PlanTrips";
import Preferences from "./pages/Preferences";
import TrippyAi from "./pages/TrippyAi";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/plan-trips" element={<PlanTrips />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/trippy-ai" element={<TrippyAi />} />
      </Routes>
    </>
  );
}

export default App;
