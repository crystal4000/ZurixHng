import React, { useEffect, useState } from "react";
import { fetchGenres, fetchMovieDetails } from "../api/api";
import { useParams, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Logo from "../assets/DarkLogo.svg";
import twoTicket from "../assets/two-ticket.svg";
import imgGrid from "../assets/img-grid.png";
import { ToastContainer, toast } from "react-toastify";
import { useSidebar } from "../hooks/useSidebar";

const MovieDetails = ({ match }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { id } = useParams();
  const [genres, setGenres] = useState([]);
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieDetailsResponse = await fetchMovieDetails(id);
        setMovieDetails(movieDetailsResponse);

        const genresResponse = await fetchGenres();
        setGenres(genresResponse);
      } catch (error) {
        // Handle API request errors
        toast.error(
          "An error occurred while fetching movie details. Please try again later."
        );
        console.error("API request error:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  const directors = movieDetails.credits.crew.filter(
    (crewMember) => crewMember.job === "Director"
  );
  const actors = movieDetails.credits.cast.map((castMember) => castMember.name);

  // Slice the actors to the first 5
  const slicedActors = actors.slice(0, 5);
  const writers = movieDetails.credits.crew
    .filter((crewMember) => crewMember.department === "Writing")
    .map((crewMember) => crewMember.name);
  const slicedWriters = writers.slice(0, 5);

  // Get the trailer URL
  const trailerUrl = movieDetails.videos.results.find(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  );

  const releaseDate = new Date(movieDetails.release_date); // Parse the release date

  // Format the date as "YYYY-MM-DD"
  const formattedReleaseDate = `${releaseDate.getUTCFullYear()}-${String(
    releaseDate.getUTCMonth() + 1
  ).padStart(2, "0")}-${String(releaseDate.getUTCDate()).padStart(2, "0")}`;
  return (
    <>
      <div
        className={`movie-details sb-nav-fixed ${
          isSidebarOpen ? "sb-sidenav-toggled" : ""
        }`}
      >
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <nav
              className="sb-sidenav accordion sb-sidenav-light"
              id="sidenavAccordion"
            >
              <div className="sb-sidenav-menu">
                <div className="nav mt-3">
                  <Navbar.Brand href="/" className="ms-3 mb-3">
                    <img src={Logo} alt="logo" className="img-fluid" />
                  </Navbar.Brand>
                  <NavLink className="nav-link py-2" to="/">
                    {/* <div className="line"></div> */}
                    <div className="home-icon  me-3"></div>
                    Home
                  </NavLink>

                  <NavLink
                    className="nav-link py-2 mt-4"
                    to={`/movies/${movieDetails.id}`}
                  >
                    <div className="movie-icon  me-3"></div>
                    Movies
                    <div className="line"></div>
                  </NavLink>
                  <NavLink className="nav-link py-2 mt-4" to="/products">
                    {/* <div className="line"></div> */}
                    <div className="tv-icon  me-3"></div>
                    Tv Series
                  </NavLink>

                  <NavLink className="nav-link py-2 mt-4" to="/transactions">
                    {/* <div className="line"></div> */}
                    <div className="upcoming-icon  me-3"></div>
                    Upcoming
                  </NavLink>
                </div>

                <div className="sb-sidenav-footer mt-4 mb-2 mx-3 text-light">
                  <div className="movie-quiz pt-3 px-3">
                    <h6 className="m-0 ">
                      Play movie quizes and earn free tickets
                    </h6>
                    <p className="mt-3">50k people are playing now</p>
                    <p className="startplay text-center p-2">Start Playing</p>
                  </div>

                  <div className="d-grid gap-2 col-12 mx-auto mt-3">
                    <button className="logout-btn btn" type="button">
                      <i className="fa-solid fa-arrow-right-from-bracket me-3"></i>
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <div id="layoutSidenav_content">
            <main className="mx-4 mb-3">
              <div className="my-2 d-flex justify-content-end">
                <button
                  className="toggle-btn btn btn-sm"
                  onClick={toggleSidebar}
                  id="sidebarToggle"
                >
                  <i className="fas fa-bars"></i>
                </button>
              </div>
              <div className="movie-trailer-bg position-relative">
                <img
                  src={`https://image.tmdb.org/t/p/w1280/${movieDetails.backdrop_path}`}
                  className="movie-trailer"
                  alt=""
                />
                <a
                  href={`https://www.youtube.com/embed/${trailerUrl.key}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="play-button position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center rounded-circle  ">
                    <i class="fa-solid fa-play"></i>
                  </div>
                </a>
              </div>
              <div className="movie mt-3 d-flex justify-content-between align-items-center">
                <div className="movie-info d-flex justify-content-center align-items-center">
                  <h3 className="me-3">
                    <span data-testid="movie-title"> {movieDetails.title}</span>
                    •{" "}
                    <span data-testid="movie-release-date">
                      {formattedReleaseDate}
                    </span>{" "}
                    • PG-13 •{" "}
                    <span data-testid="movie-runtime">{`${movieDetails.runtime}`}</span>
                  </h3>
                  <div className="movie-genre">
                    {movieDetails.genres.map((genre) => (
                      <span key={genre.id} className="genres me-2 mb-2">
                        {genre.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rating d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-star fa-sm text-warning"></i>
                  <h6 className="m-0 ms-2 me-2">8.5</h6>{" "}
                  <p className="m-0">| 350k</p>
                </div>
              </div>

              <div className="movie-people row mt-2 pb-2">
                <div className="col-sm-8">
                  <p data-testid="movie-overview">{movieDetails.overview}</p>
                  <p>
                    Director :{" "}
                    <span>
                      {directors.length > 0 ? directors[0].name : "Unknown"}
                    </span>
                  </p>
                  <p>
                    Writers : <span>{slicedWriters.join(", ")}</span>
                  </p>
                  <p>
                    Stars : <span>{slicedActors.join(", ")}</span>
                  </p>

                  <div className="button row mx-1">
                    <button className="col-sm-4 btn red-btn m-0">
                      Top rated movie #65
                    </button>

                    <Dropdown className="col-sm-8 text-white m-0 p-0" title="">
                      <Dropdown.Toggle
                        id="dropdown"
                        className="w-100 h-100 bg-white"
                      >
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="m-0 ms-3"> Awards 9 nominations</p>
                          <i className="fa-solid fa-angle-down fa-lg text-secondary"></i>
                        </div>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>Edit Item</Dropdown.Item>

                        <Dropdown.Item>Delete Item</Dropdown.Item>

                        <Dropdown.Item>Change Status</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div className="col-sm-4">
                  <button className="w-100 btn showtimes-btn m-0">
                    <span className="me-2">
                      {" "}
                      <img
                        src={twoTicket}
                        alt="two-ticket"
                        className="img-fluid "
                      />
                    </span>
                    See Showtimes
                  </button>
                  <button className="mt-2 w-100 btn watchOptions-btn m-0">
                    <i className="me-2 fa-solid fa-list fa-xs"></i>Watch more
                    options
                  </button>

                  <div className="mt-3 position-relative">
                    <img src={imgGrid} className="movie-grid" alt="" />

                    <div className="overlay pt-1">
                      <i className="me-2 fa-solid fa-list fa-lg"></i>The Best
                      Movies and Shows in September
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default MovieDetails;
