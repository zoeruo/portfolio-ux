import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from "../asset/logo.svg";
import Pdf from '../asset/Resume.pdf';

export const NavBar = () => {
    return (
        <>
            <Navbar bg="theme" key='md' expand='md'>
                <Container>
                    <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
                    <Navbar.Offcanvas className="justify-content-center bg-P-light" id="offcanvasNavbar-expand-md" aria-labelledby="offcanvasNavbarLabel-expand-md" placement="start">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="me-auto ms-auto nav-main bg-P-light">
                                <Nav.Link to="/" className="nav-link font-title text-P-darkblue">ABOUT</Nav.Link>
                                <Nav.Link to="/#Project" className="nav-link font-title text-P-darkblue">WORK</Nav.Link>
                                <a href="/#Playground" className="nav-link font-title text-P-darkblue">CONTACT</a>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}
export default NavBar;