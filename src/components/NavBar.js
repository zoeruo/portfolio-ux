import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useState } from 'react';
import logo from "../asset/logo.svg";
import Pdf from '../asset/Resume.pdf';

export const NavBar = () => {
    // Add state to control Offcanvas
    const [show, setShow] = useState(false);

    // Handlers for Offcanvas
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar bg="theme" key='md' expand='md'>
                <Container>
                    <Navbar.Toggle
                        aria-controls="offcanvasNavbar-expand-md"
                        onClick={handleShow}  // Add onClick handler
                    />
                    <Navbar.Offcanvas
                        className="justify-content-center bg-P-light"
                        id="offcanvasNavbar-expand-md"
                        aria-labelledby="offcanvasNavbarLabel-expand-md"
                        placement="start"
                        show={show}  // Control show state
                        onHide={handleClose}  // Handle close event
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="me-auto ms-auto nav-main bg-P-light" id="main-nav">
                                <Link
                                    to="/About"
                                    className="nav-link font-title text-P-darkblue"
                                    onClick={handleClose}  // Close on link click
                                >
                                    ABOUT
                                </Link>
                                <Link
                                    to="/"
                                    className="nav-link font-title text-P-darkblue"
                                    onClick={handleClose}  // Close on link click
                                >
                                    WORK
                                </Link>
                                <Link
                                    to="/Contact"
                                    className="nav-link font-title text-P-darkblue"
                                    onClick={handleClose}  // Close on link click
                                >
                                    CONTACT
                                </Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;