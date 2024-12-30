import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Pdf from "../asset/Resume.pdf";

function Footer(props) {
    return (
        <div id="footer" className="bg-theme">
            <Container>
                <Row>
                    <Col xs={12} className="nav-main d-flex justify-content-center">
                        <a href={Pdf}
                            className="nav-link font-title text-P-darkblue" target="_blank"
                        >RESUME</a>
                        <Link
                            to="/"
                            className="nav-link font-title text-P-darkblue"
                        >
                            WORK
                        </Link>
                        <Link
                            to="/Contact"
                            className="nav-link font-title text-P-darkblue"
                        >CONTACT</Link>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="my-auto text-center pt-3">
                        © 2024. All Rights Reserved to Zoe Lo
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Footer;