import React, { useEffect, useState } from "react";
import { fetchTopMovies, fetchGenres, searchMovies } from "../api/api";
import MovieSearch from "./MovieSearch";
import { Carousel, Navbar, Container, Nav } from "react-bootstrap";
import { TailSpin } from "react-loader-spinner";
import Logo from "../assets/Logo.svg";
import IMBD from "../assets/IMBD.svg";
import rottenTomatoes from "../assets/tomatoes.svg";
import MovieCard from "./MovieCard";
import { ToastContainer, toast } from "react-toastify";

const HomePage = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [searchResults, setSearchResults] = useState([]); // State for storing search results
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [activeIndicatorIndex, setActiveIndicatorIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const topMoviesResponse = await fetchTopMovies();
        setTopMovies(topMoviesResponse.results.slice(0, 12));

        const genresResponse = await fetchGenres();
        setGenres(genresResponse);
      } catch (error) {
        // Handle API request errors
        toast.error(
          "An error occurred while fetching data. Please try again later."
        );
        console.error("API request error:", error);
      }
    };

    fetchData();
  }, []);
  // Function to handle search query
  const handleSearch = async (query) => {
    try {
      setSearchLoading(true);
      const results = await searchMovies(query);
      setSearchResults(results);
      setSearchQuery(query);
      setSearchLoading(false);
    } catch (error) {
      toast.error(
        "An error occurred while searching for movies. Please try again later."
      );
      setSearchLoading(false);
      console.error("Search error:", error);
    }
  };

  return (
    <>
      <div className="header">
        <Carousel
          style={{ backgroundColor: "#000" }}
          id="carouselExampleIndicators"
          onSelect={(index) => setActiveIndicatorIndex(index)}
        >
          {topMovies.slice(0, 4).map((movie, index) => (
            <Carousel.Item
              className={` ${index === 0 ? "active" : ""}`}
              key={movie.id}
            >
              <div className="poster">
                <img
                  src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
                  className="d-block w-100"
                  alt="poster"
                />
              </div>
              <div className="black-overlay"></div>
              <Navbar collapseOnSelect expand="lg" className="mt-2">
                <Container>
                  <Navbar.Brand href="/">
                    <img src={Logo} alt="logo" className="img-fluid" />
                  </Navbar.Brand>
                  <div className="toggle-mobile d-flex justify-content-end align-items-center">
                    <a
                      href="/"
                      className="text-white text-decoration-none text-base me-3 mt-sm-2"
                    >
                      Sign In
                    </a>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  </div>
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                      <MovieSearch onSearch={handleSearch} />
                    </Nav>
                  </Navbar.Collapse>
                  <div className="toggle-main justify-content-end align-items-center">
                    <a
                      href="/"
                      className="text-white text-decoration-none text-base me-3 mt-sm-2"
                    >
                      Sign In
                    </a>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  </div>
                </Container>
              </Navbar>
              <Carousel.Caption className="px-3">
                <h2 className="text-5xl text-left">{movie.title}</h2>
                <div className="rating d-flex align-items-center mt-4">
                  <div className="me-4">
                    <img src={IMBD} alt="IMBD" className="img-fluid" />
                    <span className="ms-2">86.0/100</span>
                  </div>
                  <div>
                    <img
                      src={rottenTomatoes}
                      alt="rottenTomatoes"
                      className="img-fluid"
                    />
                    <span className="ms-2">97%</span>
                  </div>
                </div>
                <p className="movie-about mt-4">{movie.overview}</p>

                <button className="btn">
                  <i className="fa-solid fa-circle-play"></i>
                  <span className="ms-2">WATCH TRAILER</span>
                </button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}

          <div className="carousel-indicators">
            {topMovies.slice(0, 5).map((_, index) => (
              <div key={index} className="d-flex align-items-center">
                <button
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                ></button>
                <p
                  className={`ms-2 ${
                    activeIndicatorIndex === index
                      ? "text-white"
                      : "text-secondary"
                  }`}
                >
                  {index + 1}
                </p>
              </div>
            ))}
          </div>
        </Carousel>
      </div>
      <main className="featured-movies container  mt-5 mb-4 ">
        {searchLoading ? (
          <div className="col-md-12 my-5 py-5 d-flex flex-column justify-content-center align-items-center">
            <TailSpin
              height="80"
              width="80"
              color="#1e1e1e"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass="tailspin"
              visible={true}
            />
          </div>
        ) : (
          <>
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="">
                {searchQuery ? "Search Results" : "Featured Movies"}
              </h3>
              <a href="/">
                See More <i className="fa-solid fa-greater-than fa-xs"></i>
              </a>
            </div>
            {searchQuery && searchResults.length === 0 ? (
              <div className="text-center my-5 py-5">
                <p>No search results found.</p>
                <a href="/">Refresh Page</a>
              </div>
            ) : (
              <div className="row justify-content-center align-items-center mt-5">
                {(searchQuery && searchResults.length > 0
                  ? searchResults
                  : topMovies
                ).map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    genres={genres}
                    data-testid="movie-card"
                  />
                ))}
              </div>
            )}
          </>
        )}
      </main>

      <footer className="container mb-5 pb-4">
        <ul className="socials list-unstyled mx-auto mt-4">
          <div className="social-list d-flex justify-content-between align-items-center">
            <li className="">
              <a href="/">
                <i className="social-icon fa-brands fa-square-facebook"></i>
              </a>
            </li>
            <li className="">
              <a href="/">
                <i className="social-icon fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="social-icon fa-brands fa-twitter"></i>
              </a>
            </li>
            <li className="">
              <a href="/">
                <i className=" social-icon fa-brands fa-youtube"></i>
              </a>
            </li>
          </div>
        </ul>
        <ul className="links list-unstyled px-5 mx-auto mt-4">
          <div className="links-list d-flex justify-content-between align-items-center">
            <li className="">
              <a href="/">Conditions of Use</a>
            </li>
            <li className="">
              <a href="/">Privacy & Policy</a>
            </li>
            <li>
              <a href="/">Press Room</a>
            </li>
          </div>
        </ul>

        <p className="copyright mt-4 text-center">
          © 2021 MovieBox by Adriana Eka Prayudha{" "}
        </p>
      </footer>
      <ToastContainer />
    </>
  );
};

export default HomePage;
