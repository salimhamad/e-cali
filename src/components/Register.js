// import React from "react";

// export default function Register() {
//   return <div>Registerrrrrrrrrrrrrrrrr</div>;
// }

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { register } from "../feautres/RegisterSlice";

export default function Login() {
  // our local user state - taybat ba componenty login, initial value = object
  // start local store { https://youtu.be/fTP2gi7e3k8 } bam vedio ya local store krawa
  const [user, setUser] = useState({});

  useEffect(() => {
    const lsr = localStorage.getItem("userrgester");
    if (lsr) {
      setUser(JSON.parse(lsr));
    }
  }, []);

  useEffect(() => {
    // storing input name
    localStorage.setItem("userrgester", JSON.stringify(user));
  });

  // localStorage.setItem("name", JSON.stringify(user));

  // end local store

  // state.loginuser.value -----.> loginuser"nawy slice akaya"
  const globalUser = useSelector((state) => state.registerSlice.value);

  const dispatch = useDispatch();

  // const globalState = useSelector(state => state.state)

  const handleEmail = (e) => {
    const emailValue = e.target.value;
    let newState = { ...user };
    newState.email = emailValue;

    setUser(newState);
  };

  const handlePassword = (e) => {
    const passwordValue = e.target.value;
    let newState = { ...user };
    newState.password = passwordValue;

    setUser(newState);
  };

  return (
    <>
      <Container>
        <Form className="mt-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              // value={user}
              placeholder="Enter email"
              onChange={handleEmail}
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
              onChange={handlePassword}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Re-EnterPassword</Form.Label>
            <Form.Control
              type="password"
              // value={user}
              placeholder="Re-EnterPassword"
              onChange={handlePassword}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="primary" onClick={() => dispatch(register(user))}>
            Create-acount
          </Button>
        </Form>
        {globalUser.email}
      </Container>
    </>
  );
}
