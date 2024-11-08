import React from "react";
import { IMAGE_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Card = ({ id, original_title, poster_path }) => {
  return (
    <div className="card">
      <Link to={`/movie/${id}`}>
        <img
          src={poster_path ? `${IMAGE_URL}${poster_path}` : "/default-movie.jpg"}
          alt={original_title}
        />
        <h3>{original_title}</h3>
      </Link>
    </div>
  );
};

export default Card;
