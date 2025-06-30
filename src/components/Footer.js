import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

function Footer(props) {
    return (
        <div id="footer" className="bg-white">
            <Container fluid>
                <Row>
                    <Col xs={6} className="d-flex justify-content-start">
                        <a href="mailto:zoeruo.lo@gmail.com"
                            className="nav-link font-title text-P-darkblue"
                        >zoeruo.lo@gmail.com</a>
                    </Col>
                    <Col xs={6} className="d-flex justify-content-end">
                        <a href="https://www.linkedin.com/in/chiajoulo/"
                            className="nav-link font-title text-P-darkblue" 
                            target="_blank"
                            rel="noopener noreferrer"
                        >linkedin</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Footer;