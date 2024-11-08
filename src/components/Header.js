// src/components/Header.js

import React from "react";
import logo from "../assets/logo.jpeg"; // Adjust path based on where your logo is saved

const Header = () => {
  return (
    <header>
      <img src={logo} alt="App Logo" className="logo" />
      
    </header>
  );
};

export default Header;
