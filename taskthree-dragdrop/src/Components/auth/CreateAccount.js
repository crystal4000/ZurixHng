import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
    setValidated(true);
  };
  return (
    <>
      <div className="login pt-5">
        <div className="container-fluid">
          <div className="login-content mx-auto mt-5 px-5 py-5">
            <h4 className="text-center">Create an Account</h4>
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
                  Register
                </button>
              </div>
            </Form>
            <p className="text-center mt-4">
              Already have an account?{" "}
              <Link to="/" className="register-link text-decoration-none">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
