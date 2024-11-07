import React from 'react';
import { Container, Row, Col } from "react-bootstrap";



function Footer(props) {
    return (
        <div className="bg-white">
            <Container>
                <Row>
                    <Col xs={12} className="my-auto text-center py-3">
                        © 2024. All Rights Reserved to Zoe Lo
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;