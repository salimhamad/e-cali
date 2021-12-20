import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CartCount from "../components/CartCount";
import { logout } from "../feautres/LoginSlice";
import { BsFillBasket2Fill } from "react-icons/bs";

export default function Navy() {
  const { user } = useSelector((state) => state.loginSlice);
  const dispatch = useDispatch();

  {
    /* useman wargrtotawane boaway cheky pebkain agar user login bw ba login
 bkat ba logout w har la page homeda bmenetawane*/
  }
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

              {/* <Nav.Link as={Link} to="/product/all">
                Product
              </Nav.Link> */}
              {/*  */}
              {/* <Nav.Link as={Link} to="/CartselectorToBuy">
              CartselectorToBuy
              </Nav.Link> */}

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
                <div style={{ padding: "0px", margin: "0px" ,display:"flex" }}>
                  <div style={{ float: "right", minwidth: "initial"  }}>
                    <CartCount />
                  </div>
                  <div>
                    C<BsFillBasket2Fill />RT
                  </div>

                  {/* <CartCount />
                  <BsFillBasket2Fill /> */}
                </div>
                {/* Cart */}
              </Nav.Link>

              {/* 
              <Nav.Link as={Link} to="/cartselectortobuy">
                <div>
                  <CartCount />
                </div>
                CartselectorToBuy
              </Nav.Link> */}
              <NavDropdown title="Setting" id="collasible-nav-dropdown">
                {/* <NavDropdown.Item as={Link} to="/login">
                  login
                </NavDropdown.Item> */}
                {!user && (
                  // ama ale agar useraka nabw wata login nrabw awa ba login bkat
                  <NavDropdown.Item as={Link} to="/login">
                    login
                  </NavDropdown.Item>
                )}
                {user && (
                  //  ama ale agar login krabw wata user habw ba login darnaxa balku logout darxat w la homa bmenetawane
                  <NavDropdown.Item
                    as={Link}
                    to="/"
                    onClick={() => {
                      dispatch(logout());
                    }}
                  >
                    logout
                  </NavDropdown.Item>
                )}

                {/* <NavDropdown.Item as={Link} to="/login">
                  login
                </NavDropdown.Item> */}
                {/* <NavDropdown.Item as={Link} to="/register">
                  register
                </NavDropdown.Item> */}

                {!user && (
                  <NavDropdown.Item as={Link} to="/register">
                    register
                  </NavDropdown.Item>
                )}

                <NavDropdown.Item as={Link} to="/personalinformation">
                  personalInformation
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

{
  /* {!user && (
                  // ama ale agar useraka nabw wata login nrabw awa ba login bkat
                  <NavDropdown.Item as={Link} to="/login">
                    login
                  </NavDropdown.Item>
                )} */
}

{
  /* 
  {user && (
                  //  ama ale agar login krabw wata user habw ba login darnaxa balku logout darxat w la homa bmenetawane
                  <NavDropdown.Item
                    as={Link}
                    to="/"
                    onClick={() => {
                      dispatch(logout());
                    }}
                  >
                    logout
                  </NavDropdown.Item>)
                } 
                
                */
}
