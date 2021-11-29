import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navy() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Cali'sE-Commerce
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>

              <Nav.Link as={Link} to="/product/all">
                Product
              </Nav.Link>

              <NavDropdown title="product" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/products/ios">
                  mobile IOS
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/android">
                  mobile ANDROID
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/laptop">
                  laptop
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>

            <Nav>
              {/* <Nav.Link as={Link} to="/setting">
                setting
              </Nav.Link> */}
              <Nav.Link as={Link} to="/cartselectortobuy">
                CartselectorToBuy
              </Nav.Link>

              <NavDropdown title="Setting" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/login">
                  login
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/register">
                  register
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
