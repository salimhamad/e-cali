// import React from "react";

// export default function Register() {
//   return <div>Registerrrrrrrrrrrrrrrrr</div>;
// }

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import React, { useState, useEffect } from "react";
import { login } from "../feautres/LoginSlice";
import { useRegisterMutation } from "../service/apisevis";
import jwt from "jsonwebtoken";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Login() {
  //
  //
  //
  const { user } = useSelector((state) => state.loginSlice);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRegister, { isError, isLoading, data, error }] =
    useRegisterMutation();

  useEffect(() => {
    data && dispatch(login(jwt.decode(data?.token)));
  }, [data]);
  //
  //
  //
  //
  return (
    <>
      {JSON.stringify(data)}
      {isError && JSON.stringify(error)}
      {user && <Navigate to="/" />}

      <Container>
        <Form
          className="mt-5"
          onSubmit={(e) => {
            e.preventDefault();
            userRegister({ email, password });
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              // value={user}
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              // value={user}
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Re-EnterPassword</Form.Label>
            <Form.Control
              type="password"
              // value={user}
              placeholder="Re-EnterPassword"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create-acount
          </Button>
        </Form>
      </Container>
    </>
  );
}
