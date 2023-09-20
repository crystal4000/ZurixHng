import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for changes in the user's authentication state
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If the user is signed in, set the user object in state
        setAuthUser(user);
      } else {
        // If the user is signed out, set authUser to null
        setAuthUser(null);
      }
    });

    // Cleanup the listener when the component unmounts
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    // Function to sign the user out
    signOut(auth)
      .then(() => {
        console.log("Sign out Sucessfull");
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
  return (
    <>
      <div className="user">
        {authUser && (
          <>
            <p> {`Signed In as ${authUser.email}`}</p>
            <button className="btn btn-primary" onClick={userSignOut}>
              Sign out
            </button>
          </>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default AuthDetails;
