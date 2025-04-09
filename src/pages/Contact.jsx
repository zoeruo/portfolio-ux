import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

function Contact() {
    return (
        <React.Fragment>
            <section id="Contact" className="bg-white">
                <Container>
                    <Row className="py-5">
                        <Col md={12} className="text-center">
                            <h1 className="font-display2">Lets Get In Touch.</h1>
                        </Col>
                    </Row>
                    <Row className="py-5">
                        <Col md={1}></Col>
                        <Col md={4} className="text-center mb-4">
                            <h1>Email</h1>
                            <a href="mailto:zoeruo.lo@gmail.com" className="text-P-blue" target="_blank">zoeruo.lo@gmail.com</a>
                        </Col>
                        <Col md={2} className="text-center my-auto">
                            <div className="font-display2 mb-4">or</div>
                        </Col>
                        <Col md={4} className="text-center">
                            <h1>LinkedIn</h1>
                            <a href="https://www.linkedin.com/in/chiajoulo/" className="text-P-blue" target="_blank">Go to LinkedIn profile</a>
                        </Col>
                        <Col md={1}></Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Contact;