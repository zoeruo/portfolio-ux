import React from 'react';
import { Container, Row, Col } from "react-bootstrap";



function Footer(props) {

    return (
        <div className="bg-theme">
            <Container>
                <Row>
                    <Col xs={12} className="my-auto text-center py-2">
                        © 2023. All Rights Reserved to Zoe Lo.
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;