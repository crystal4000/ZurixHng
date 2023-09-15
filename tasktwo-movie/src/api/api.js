const apiKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDE2ZmEzY2M2MWZmZDY1ZmI3MjVjNjMxMjg4NmIwNyIsInN1YiI6IjY0ZmU1M2IyZGI0ZWQ2MTAzNjNkZWVhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mHQzNN_OmRrsifOID3xaO6hyANA0n76mMAwbx0Fshvo";
const apiUrl = "https://api.themoviedb.org/3";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
};

export const fetchTopMovies = async () => {
  try {
    const response = await fetch(
      `${apiUrl}/movie/top_rated?language=en-US&page=1`,
      options
    );

    if (!response.ok) {
      throw new Error("Failed to fetch top movies");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// api.js

export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${apiUrl}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      options
    );

    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data = await response.json();
    return data.results.slice(0, 12); // Limit to the first 12 movies
  } catch (error) {
    throw error;
  }
};

export const fetchGenres = async () => {
  try {
    const response = await fetch(`${apiUrl}/genre/movie/list?language=en`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch movie genres");
    }

    const data = await response.json();
    return data.genres;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await fetch(
      `${apiUrl}/movie/${movieId}?language=en-US&append_to_response=credits,videos`,
      options
    );
    if (!response.ok) {
      throw new Error("Failed to fetch movie details");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getGenreName = (genreId, genres) => {
  const genre = genres.find((genre) => genre.id === genreId);
  return genre ? genre.name : "Unknown";
};
