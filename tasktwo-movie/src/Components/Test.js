import React from "react";
import { NavLink } from "react-router-dom";
import { useSidebar } from "../hooks/useSidebar";

const Test = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  return (
    <>
      <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="c-item carousel-item active ">
            <img
              src="https://image.tmdb.org/t/p/w500//ktejodbcdCPXbMMdnpI9BUxW6O8.jpg"
              class="c-img d-block w-100"
              alt="Slide 1"
            />
          </div>
          <div class="c-item carousel-item">
            <img
              src="https://image.tmdb.org/t/p/w500//lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg"
              class="c-img d-block w-100"
              alt="Slide 2"
            />
          </div>
          <div class="carousel-item">
            <img
              src="c-item https://image.tmdb.org/t/p/w500//ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg"
              class="c-img d-block w-100"
              alt="Slide 3"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
