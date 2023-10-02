import React from "react";
import Logo from "../assets/helpmeout.png";
import { Navbar, Container, Nav } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <header className="bg-info mt-3">
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
                <a class="nav-link" href="/">
                  Features
                </a>
                <a class="nav-link" href="/">
                  How It Works
                </a>
              </Nav>
            </Navbar.Collapse>
            <div className="toggle-main justify-content-end align-items-center">
              <a
                href="/"
                className="text-white text-decoration-none text-base me-3 mt-sm-2"
              >
                Get Started
              </a>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            </div>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Home;
