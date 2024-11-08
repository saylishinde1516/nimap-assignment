import React, { useEffect, useState } from "react";
import { UPCOMING_MOVIES } from "../utils/constant";
import Card from "./Card"; // Reuse Card component

const UpcomingPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      const response = await fetch(UPCOMING_MOVIES);
      const result = await response.json();
      setData(result.results);
    };
    fetchUpcomingMovies();
  }, []);

  return (
    <div className="movies-page">
      <h1>Upcoming Movies</h1>
      <div className="cards-container">
        {data.map(item => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingPage;
