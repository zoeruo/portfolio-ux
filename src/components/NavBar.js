import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from "../asset/logo.svg";
import Pdf from '../asset/Resume.pdf';

export const NavBar = () => {
    return (
        <Navbar bg="theme" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} width="36px" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
                    <Nav className="me-auto ms-auto">
                        {/* <Link to="/" className="nav-link">ABOUT</Link> */}
                        <a href="/#Project" className="nav-link">PROJECT</a>
                        {/* <Link to="/#Playground" className="nav-link" onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({
                                top: document.querySelector("#Playground").offsetTop,
                                behavior: "smooth",
                            });
                        }}>PLAYGROUND</Link> */}
                        <a href="/#Playground" className="nav-link">PLAYGROUND</a>
                        {/* <Nav.Link href="#">PLAYGROUND</Nav.Link> */}

                    </Nav>
                    <Nav className="">
                        {/* <Link to="../asset/Resume.pdf" className="nav-link" target="_blank">RESUME</Link> */}
                        <a href={Pdf} className="nav-link" target="_blank">RESUME</a>
                    </Nav>
                </Navbar.Collapse>


            </Container>
        </Navbar>
    )
}

export default NavBar;