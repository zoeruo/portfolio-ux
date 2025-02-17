import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import logo from "../asset/logo.svg";
import Pdf from '../asset/Resume.pdf';

export const NavBar = () => {
    const [show, setShow] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // Check if screen is desktop width
        const mediaQuery = window.matchMedia('(min-width: 768px)');
        setIsDesktop(mediaQuery.matches);

        // Handle screen resize
        const handleResize = (e) => {
            setIsDesktop(e.matches);
        };

        // Handle scroll for shadow effect
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        mediaQuery.addListener(handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            mediaQuery.removeListener(handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar
                key='md'
                expand='md'
                fixed={isDesktop ? "top" : undefined}
                className={`bg-p-white py-4 ${scrolled && isDesktop ? 'shadow-sm' : ''}`}
                style={{ zIndex: 1030 }}
            >
                <Navbar.Toggle
                    aria-controls="offcanvasNavbar-expand-md"
                    onClick={handleShow}
                />
                <Navbar.Offcanvas
                    className="justify-content-center bg-p-white"
                    id="offcanvasNavbar-expand-md"
                    aria-labelledby="offcanvasNavbarLabel-expand-md"
                    placement="start"
                    show={show}
                    onHide={handleClose}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="d-none d-md-block me-auto" id="main-nav">
                            <a href={Pdf}
                                className="nav-link px-3 font-title text-p-deepnavy"
                                target="_blank"
                                rel="noopener noreferrer"
                            >RESUME</a>
                        </Nav>
                        <Nav>
                            <Link
                                to="/About"
                                className="nav-link px-3 font-title text-p-deepnavy"
                                onClick={handleClose}
                            >
                                ABOUT
                            </Link>
                            <Link
                                to="/"
                                className="nav-link px-3 font-title text-p-deepnavy"
                                onClick={handleClose}
                            >
                                WORK
                            </Link>
                            <a href={Pdf}
                                className="nav-link px-3 font-title text-p-deepnavy d-block d-md-none"
                                target="_blank"
                                rel="noopener noreferrer"
                            >RESUME</a>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
                <Navbar.Brand href="/" className="d-md-none text-p-deepnavy"><strong>zoe-lo</strong></Navbar.Brand>
            </Navbar>
            {/* Add padding only for desktop */}
            {isDesktop && <div style={{ paddingTop: "86px" }}></div>}
        </>
    )
}

export default NavBar;