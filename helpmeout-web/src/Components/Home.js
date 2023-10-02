import React from "react";
import Logo from "../assets/helpmeout.png";
import Hero from "../assets/hero.svg";
import { Navbar, Container, Nav } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <header className="mt-3">
        <Navbar>
          <Container>
            <Navbar.Brand>
              <img
                src={Logo}
                alt="logo"
                className="img-fluid"
                width={30}
                height={30}
              />
              <span> HelpMeOut</span>
            </Navbar.Brand>

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <a class="nav-link" href="#features">
                  Features
                </a>
                <a class="nav-link" href="#howitworks">
                  How It Works
                </a>
              </Nav>
            </Navbar.Collapse>
            <div className="toggle-main justify-content-end align-items-center">
              <a
                href="/"
                className="text-decoration-none text-base me-3 mt-sm-2"
              >
                Get Started
              </a>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            </div>
          </Container>
        </Navbar>
      </header>

      <div className="hero ">
        <div className="container">
          <div className="row pt-5">
            <div className="col-6 bg-info mx-auto mt-5 pt-5">
              <h2>
                Show Them <br /> Don't Just Tell
              </h2>
              <p>
                Help your friends and loved ones by creating and sending videos
                on how to get things done on a website.
              </p>

              <button className="mt-3 text-white btn btn-primary">
                Install HelpMeOut <i class="ms-2 bi bi-arrow-right"></i>
              </button>
            </div>
            <div className="col-6 bg-danger mx-auto">
              <img src={Hero} alt="hero" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
