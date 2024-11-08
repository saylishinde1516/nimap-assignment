// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="home-container">
      
      <h1>Welcome to Movie App</h1>
      <p>Explore top-rated, upcoming, and popular movies!</p>
      <nav>
        <Link to="/top-rated" className="nav-link">Top Rated Movies</Link>
        <Link to="/upcoming" className="nav-link">Upcoming Movies</Link>
      </nav>
    </div>
  );
};

export default Home;
