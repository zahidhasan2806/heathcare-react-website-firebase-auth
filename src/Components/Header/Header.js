import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from "../../asset/logo-header.png"
import UseAuth from '../../Hooks/UseAuth';
import "./Header.css";

const Header = () => {
    const activeStyle = {
        fontWeight: 'bold',
        color: 'red',
        backgroundColor: 'white',
        borderRadius: '5px',

    }
    const { user, logOut } = UseAuth();
    return (
        <div className="header">
            <Navbar expand="lg" >
                <Container>
                    <Navbar.Brand as={NavLink} className="text-dark" to="/home">
                        <img width="100px" height="65px" src={logo} alt="Logo" />{" "}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link activeStyle={activeStyle} as={NavLink} to="/home" className="text-dark">
                                Home
                            </Nav.Link>

                            <Nav.Link activeStyle={activeStyle} as={NavLink} to="/about" className="text-dark">
                                About
                            </Nav.Link>
                            <Nav.Link activeStyle={activeStyle} as={NavLink} to="/doctor" className="text-dark">
                                Doctors
                            </Nav.Link>
                            {!user.email ? <> <Nav.Link activeStyle={activeStyle} as={NavLink} to="/login" className="text-dark">
                                Login
                            </Nav.Link>
                                <Nav.Link activeStyle={activeStyle} as={NavLink} to="/signup" className="text-dark">
                                    Sign Up
                                </Nav.Link></>

                                : <> <Button as={NavLink} to="/home" onClick={logOut} variant="outline-dark">Log-out</Button> <Navbar.Text className="ms-2">
                                    <a className="text-decoration-none" href="#login">{user?.displayName}</a>
                                </Navbar.Text> </>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;