import React, { useEffect, useState } from "react";
import { TOP_RATED_URL } from "../utils/constant";
import Card from "./Card"; // Reuse Card component

const TopRatedPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      const response = await fetch(TOP_RATED_URL);
      const result = await response.json();
      setData(result.results);
    };
    fetchTopRatedMovies();
  }, []);

  return (
    <div className="movies-page">
      <h1>Top Rated Movies</h1>
      <div className="cards-container">
        {data.map(item => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TopRatedPage;
