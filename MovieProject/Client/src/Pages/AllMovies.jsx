import React, { useState, useEffect } from "react";
import MovieCard from "../Component/MovieCard";
import axios from "axios";
import "./AllMovies.css";

const BASEURL = import.meta.env.VITE_BASEURL;

const AllMovies = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getDataFromServer = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${BASEURL}/movie/fetchAllMovies`, {
        withCredentials: true,
      });
      setMovies(res.data.movies);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (currentUser?._id) {
      getDataFromServer();
    }
  }, []);

  return (
    <div className="movies-container">
      <h1 className="movies-title">All Movies</h1>
      {isLoading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <div className="movies-grid">
          {movies.length > 0 ? (
            movies.map((movie, index) => (
              <div
                className="movie-item"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <MovieCard
                  key={movie._id}
                  movieId={movie._id}
                  title={movie.title}
                  genre={movie.genre}
                  director={movie.director}
                  releaseYear={movie.releaseYear}
                  description={movie.description}
                  onDelete={getDataFromServer}
                />
              </div>
            ))
          ) : (
            <div className="no-movies">
              <p>No movies found.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AllMovies;
