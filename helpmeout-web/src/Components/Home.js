import React from "react";
import Logo from "../assets/helpmeout.png";
import Hero from "../assets/hero.svg";
import Simple from "../assets/simple.svg";
import Easy from "../assets/easy.svg";
import Revisit from "../assets/revisit.svg";
import Video from "../assets/videoRepo.svg";
import Record from "../assets/works.svg";
import footerLogo from "../assets/footerLogo.png";
import { Navbar, Container, Nav } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <header className="mt-3">
        <Navbar expand="lg">
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
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <a class="nav-link" href="#features">
                  Features
                </a>
                <a class="nav-link" href="#howitworks">
                  How It Works
                </a>
              </Nav>
              <Nav>
                <a href="/" className="get-started me-3 mt-sm-2">
                  Get Started
                </a>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <div className="hero pb-5">
        <div className="container">
          <div className="row pt-5">
            <div className="col-6 mx-auto mt-5 pt-5">
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
            <div className="col-6 col-sm-12 mx-auto">
              <img src={Hero} alt="hero" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div id="features" className="container mt-5 pb-5">
        <h3 className="headline text-center">Features</h3>
        <p className="text-center">Key Highlights of our extension</p>

        <div className="row mt-5">
          <div className="col-6">
            <div>
              <h3>
                <img
                  src={Simple}
                  alt="simple"
                  className="me-3 img-fluid"
                  width={32}
                  height={32}
                />
                Simple Screen Recording
              </h3>
              <p className="mx-5">
                Effortless screen recording for everyone. Record with ease, no
                tech expertise required.
              </p>
            </div>

            <div>
              <h3>
                {" "}
                <img
                  src={Easy}
                  alt="easy"
                  className="me-3 img-fluid"
                  width={32}
                  height={32}
                />
                Easy-to-share URL
              </h3>
              <p className="mx-5">
                Share your recordings instantly with a single link. No
                attachments, no downloads.
              </p>
            </div>

            <div>
              <h3>
                {" "}
                <img
                  src={Revisit}
                  alt="revisit"
                  className="me-3 img-fluid"
                  width={32}
                  height={32}
                />
                Revisit Recordings
              </h3>
              <p className="mx-5">
                Access and review your past content effortlessly. Your
                recordings, always at your fingertips.
              </p>
            </div>
          </div>

          <div className="col-6">
            <img src={Video} alt="video" className="w-100 h-100 img-fluid" />
          </div>
        </div>
      </div>

      <div id="howitworks" className="container mt-5">
        <h3 className="text-center">How It Works</h3>
        <div className="row mt-5 justify-content-center">
          <div className="col-4 ">
            <div className="icon-bg mx-auto mb-3">1</div>
            <h4 className="text-center">Record Screen</h4>
            <p className="text-center">
              Click the "Start Recording" button in our extension. choose which
              part of your screen to capture and who you want to send it to.
            </p>
            <img src={Record} alt="Record" className="img-fluid" />
          </div>
          <div className="col-4 ">
            <div className="icon-bg mx-auto mb-3">2</div>
            <h4 className="text-center">Share Your Recording</h4>
            <p className="text-center">
              We generate a shareable link for your video. Simply send it to
              your audience via email or copy the link to send via any platform.
            </p>
            <img src={Record} alt="Record" className="img-fluid" />
          </div>
          <div className="col-4 ">
            <div className="icon-bg mx-auto mb-3">3</div>
            <h4 className="text-center">Learn Effortlessly</h4>
            <p className="text-center">
              Recipients can access your video effortlessly through the provided
              link, with our user-friendly interface suitable for everyone.
            </p>
            <img src={Record} alt="Record" className="img-fluid" />
          </div>
        </div>
      </div>

      <footer className="mt-5 py-5">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="footer-logo mt-5">
                <img
                  src={footerLogo}
                  alt="logo"
                  className="img-fluid"
                  width={30}
                  height={30}
                />
                <span> HelpMeOut</span>
              </div>
            </div>

            <div className="col-3">
              <h5>Menu</h5>

              <div className="d-flex flex-column">
                <a href="/">Home</a>

                <a href="/">Converter</a>

                <a href="/">How it works</a>
              </div>
            </div>
            <div className="col-3">
              <h5>About Us</h5>
              <div className="d-flex flex-column">
                <a href="/">About</a>

                <a href="/">Contact Us</a>

                <a href="/">Privacy Policy</a>
              </div>
            </div>
            <div className="col-3">
              <h5>Screen Record</h5>
              <div className="d-flex flex-column">
                <a href="/">Browser Window</a>

                <a href="/">Desktop</a>

                <a href="/">Application</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
