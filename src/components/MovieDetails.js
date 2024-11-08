import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_URL, API_KEY } from "../utils/constant"; // Importing IMAGE_URL and API_KEY

const MovieDetails = () => {
  const { id } = useParams(); // Get movie ID from URL params
  const [details, setDetails] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    // Fetch movie details and cast when the component mounts
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
        );
        const movieData = await movieResponse.json();
        setDetails(movieData);

        const creditsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
        );
        const creditsData = await creditsResponse.json();
        setCast(creditsData.cast);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!details) {
    return <div>Loading...</div>;
  }

  const { original_title, vote_average, release_date, overview, poster_path, backdrop_path } = details;
  const formattedDate = new Date(release_date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  return (
    <div className="movie-details-container">
      <div className="movie-details">
        <img src={`${IMAGE_URL}${poster_path}`} alt="Movie Poster" />
        <div>
          <h1>{original_title}</h1>
          <p>Rating: {vote_average}</p>
          <p>Release Date: {formattedDate}</p>
          <p>{overview}</p>
        </div>
      </div>
      <div className="movie-cast">
        <h2>Cast</h2>
        <ul>
          {cast.map(actor => (
            <li key={actor.id}>
              <img
                src={actor.profile_path ? `${IMAGE_URL}${actor.profile_path}` : "/default-profile.jpg"}
                alt={actor.name}
              />
              <div>
                <p>{actor.name}</p>
                <p>as {actor.character}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
