import React, { useEffect, useState } from "react";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { Grid } from "./Grid";
import { SortablePhoto } from "./SortablePhoto";
import { Photo } from "./Photo";
import { fetchUnsplashPhotos, searchUnsplashPhotos } from "./unSplashApi";
import { Container, Nav, Navbar } from "react-bootstrap";
import { TailSpin } from "react-loader-spinner";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ImageGallery = () => {
  const [items, setItems] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  useEffect(() => {
    // Define an async function to fetch photos
    async function fetchPhotos() {
      try {
        // Show loader for 5 seconds
        const loaderTimer = setTimeout(() => {
          setLoading(false); // Hide loader after 5 seconds
        }, 5000);

        const unsplashPhotos = await fetchUnsplashPhotos();
        // Clear the loader timer when data is fetched
        clearTimeout(loaderTimer);

        setItems(unsplashPhotos);
        setLoading(false); // Hide loader;
      } catch (error) {
        console.error("Error:", error);
      }
    }

    // Create a listener for Firebase auth changes
    const authListener = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        fetchPhotos(); // Fetch photos when the user is authenticated
      } else {
        // If the user is signed out, set authUser to null
        setAuthUser(null);
        toast.error("Unauthorized! Log in to view page", {
          autoClose: 2000,
        });

        // Redirect to the homepage after a delay
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    });

    // Cleanup the listener when the component unmounts
    return () => {
      // Unsubscribe the Firebase auth listener
      authListener();
    };
  }, []); // Run this effect only once when the component mounts

  // Function to sign the user out
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out Successful");
        // Display a success toast message
        toast.success("Signing Out", {
          autoClose: 2000,
        });

        // Redirect to the homepage after a delay
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((error) => console.log(error));
  };

  async function handleSearch(event) {
    event.preventDefault();
    if (searchQuery.trim() !== "") {
      setLoading(true);
      const searchResults = await searchUnsplashPhotos(searchQuery);
      setItems(searchResults);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } else {
      // If the search query is empty, fetch random photos
      setLoading(false);
      const unsplashPhotos = await fetchUnsplashPhotos();
      setItems(unsplashPhotos);
    }
  }
  function handleDragStart(event) {
    setActiveId(event.active.id);
  }
  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.url === active.id);
        const newIndex = items.findIndex((item) => item.url === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
  function handleDragCancel() {
    setActiveId(null);
  }
  return (
    <>
      <div className="gallery-content ">
        <Navbar collapseOnSelect expand="lg" className="pt-2" sticky="top">
          <Container>
            <Navbar.Brand href="/">Image Gallery</Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <form class="">
                  <div class="input-group">
                    <input
                      type="text"
                      class="text-base form-control"
                      placeholder="Search by Tag"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button
                      className="input-group-text"
                      id="basic-addon1"
                      type="submit"
                      onClick={handleSearch}
                    >
                      <i className="search fa-solid fa-magnifying-glass text-white"></i>
                    </button>
                  </div>
                </form>
              </Nav>
              <Nav>
                {" "}
                <button
                  className="signout-btn btn btn-sm"
                  onClick={userSignOut}
                >
                  Sign out
                </button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="container-fluid">
          {loading ? (
            <div className="col-md-12 my-5 py-5 d-flex flex-column justify-content-center align-items-center">
              <TailSpin
                height="80"
                width="80"
                color="#1197bb"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass="tailspin"
                visible={true}
              />
            </div>
          ) : (
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              onDragCancel={handleDragCancel}
            >
              <SortableContext
                items={items.map((photo) => photo.url)}
                strategy={rectSortingStrategy}
              >
                <Grid>
                  {items.map((photo, index) => (
                    <SortablePhoto
                      key={photo.url}
                      url={photo.url}
                      index={index}
                    />
                  ))}
                </Grid>
              </SortableContext>

              <DragOverlay adjustScale={true}>
                {activeId ? (
                  <Photo
                    url={items.find((photo) => photo.url === activeId).url}
                    index={items.findIndex((photo) => photo.url === activeId)}
                  />
                ) : null}
              </DragOverlay>
            </DndContext>
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ImageGallery;
