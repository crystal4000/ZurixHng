import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IMBD from "../assets/IMBD.svg";
import rottenTomatoes from "../assets/tomatoes.svg";
import { getGenreName } from "../api/api";
const MovieCard = ({ movie, genres }) => {
  const releaseDate = new Date(movie.release_date); // Parse the release date

  // Format the date as "YYYY-MM-DD"
  const formattedReleaseDate = `${releaseDate.getUTCFullYear()}-${String(
    releaseDate.getUTCMonth() + 1
  ).padStart(2, "0")}-${String(releaseDate.getUTCDate()).padStart(2, "0")}`;
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.includes(movie.id));
  }, []);

  useEffect(() => {
    // Check if the movie is in the favorites list when the component mounts
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.includes(movie.id));
  }, [movie.id]);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    e.preventDefault(); // Prevent the click event from bubbling up
    // Toggle the favorite status and update local storage
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (isFavorite) {
      const updatedFavorites = favorites.filter((id) => id !== movie.id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      favorites.push(movie.id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    setIsFavorite(!isFavorite);
  };
  return (
    <>
      <div
        className="movie col-xl-3 mx-2 col-md-4 mb-4"
        key={movie.id}
        data-testid="movie-card"
      >
        <Link to={`/movies/${movie.id}`}>
          <div className="movie-poster">
            <div className="position-relative">
              {/* Movie poster */}
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="img-fluid"
                data-testid="movie-poster"
              />
              {/* Favorite icon */}
              <div
                className="favorite-icon"
                onClick={toggleFavorite}
                style={{ color: isFavorite ? "red" : "rgba(209, 213, 219, 1)" }}
              >
                <i className={`fa-solid fa-heart fa-xs`}></i>
              </div>
            </div>
          </div>

          <p className="movie-date mt-3" data-testid="movie-release-date">
            USA, {formattedReleaseDate}
          </p>

          <h4 className="movie-name" data-testid="movie-title">
            {movie.title}
          </h4>

          <div className="rating d-flex align-items-center">
            <div className="me-4">
              <img src={IMBD} alt="IMBD" />{" "}
              <span className="ms-2">{movie.vote_average}/10</span>
            </div>
            <div>
              <img src={rottenTomatoes} alt="" />{" "}
              <span className="ms-2">97%</span>
            </div>
          </div>
          <p className="movie-genre mt-3">
            {movie.genre_ids
              .map((genreId) => getGenreName(genreId, genres))
              .join(", ")}
          </p>
        </Link>
      </div>
    </>
  );
};

export default MovieCard;
