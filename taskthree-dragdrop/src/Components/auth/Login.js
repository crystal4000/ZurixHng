import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);

  // Access the router's navigation
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Attempt to sign in with email and password
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);

        // Show a success toast message
        showSuccessToast();

        // Redirect to the homepage after a delay
        setTimeout(() => {
          navigate("/homepage");
        }, 3000);
      })
      .catch((error) => {
        console.log(error);

        // Show an error toast message
        showErrorToast();
      });

    // Mark the form as validated
    setValidated(true);
  };
  // Function to display a success toast message
  const showSuccessToast = () => {
    toast.success("Login Successful", {
      autoClose: 2000,
    });
  };

  // Function to display an error toast message
  const showErrorToast = () => {
    toast.error("Login Failed. Please check your email and password.", {
      autoClose: 2000,
    });
  };
  return (
    <>
      <div className="login pt-5">
        <div className="container">
          <div className="login-content mx-auto mt-5 mb-5 px-5 py-5">
            <h4 className="text-center">Log In to your Account</h4>
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="mt-5"
            >
              <Form.Group className="mb-5">
                <Form.Control
                  required
                  className="py-2"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Form.Control.Feedback type="invalid">
                  This field is required
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-5">
                <Form.Control
                  required
                  className="py-2"
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  This field is required
                </Form.Control.Feedback>
              </Form.Group>
              <div className="col-12 d-flex justify-content-center align-items-center mt-4">
                <button type="submit" className="login-btn btn text-light">
                  Log in
                </button>
              </div>
            </Form>
            {/* Registration link (commented out) */}
            {/* <p className="text-center mt-4">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="register-link text-decoration-none"
              >
                Register
              </Link>
            </p> */}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
