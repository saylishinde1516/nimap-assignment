import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import TopRatedPage from "./components/TopratedPage";
import UpcomingPage from "./components/UpcomingPage";
import MovieDetails from "./components/MovieDetails";
import Error from "./components/Error";
import "../src/style/styles.css"; // Check if the file exists and has styles

export default function App() {
  return (
    <div>
      <Header /> {"/"}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-rated" element={<TopRatedPage />} />
        <Route path="/upcoming" element={<UpcomingPage />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}