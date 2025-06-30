import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import parse from "html-react-parser";

import thumbnail from '../asset/img/Eastland_thumbnail.jpg';
import prototype_sneak from '../asset/img/Eastland_prototype_sneak.png';
import old_prototype from '../asset/img/Eastland_prototype_old.png';
import bottom from '../asset/img/Eastland_bottom.jpg';

import video_home from '../asset/videos/Eastland_home.mp4';
import video_about from '../asset/videos/Eastland_about.mp4';
import video_brand from '../asset/videos/Eastland_product.mp4';

function Eastland() {
    return (
        <div className="bg-theme">
            <div className="bg-white">
                <img src={thumbnail} className="img-fluid" alt="Banner img" />
            </div>
            <div className="bg-theme">
                <Container fluid className="py-c">
                    <Row className="">
                        <Col md={1}></Col>
                        <Col md={3} className="">
                            <Row className="pb-3 pb-md-0">
                                <Col xs={6} md={12} className="pb-md-3">
                                    <h3>DURATION</h3>
                                    <p>1 week (Jun 2025)</p></Col>
                                <Col xs={6} md={12}><h3>TEAM & MY ROLE</h3>
                                    <p>Team of 2, UX Designer</p></Col>
                            </Row>
                        </Col>
                        <Col md={7}>
                            <p className="font-display2">A lively and dynamic Gateway with the <span className="text-eastland-green">Greens</span>.</p>
                            <p>Eastland needs a website redesign to showcase their growth and keep up with current trends.
                                The task was straightforward—they need a more dynamic website representing their evolution while maintaining their corporate identity.
                                As a company with over forty years of history, they want to establish their professionalism through visuals, so anything too playful is not favorable.</p>
                        </Col>
                        <Col md={1}></Col>
                    </Row>
                </Container>
            </div>
            <div className="bg-theme py-c pt-0">
                <img src={prototype_sneak} className="img-fluid" alt="Banner img" />
            </div>
            <div className="bg-white">
                <Container fluid className="py-c">
                    <Row className="">
                        <Col md={1}></Col>
                        <Col md={3} className="">
                            <div className="pb-3">
                                <h3>STATUS QUO</h3>
                            </div>
                        </Col>
                        <Col md={7}>
                            <p>1 → 2<br />
                                We inherited a functional yet uninspired website and its existing branding.
                                User feedback confirmed our suspicions: the site was 'boring, bootstrap-style,' and critically lacked a dedicated space to showcase our curated products.
                                This immediate insight drove our redesign efforts to create a visually engaging platform for our selections.</p>
                            <img src={old_prototype} className="img-fluid" alt="Banner img" />
                        </Col>

                    </Row>
                </Container>
            </div>
            <div className="bg-theme">
                <Container fluid className="py-c">
                    <Row className="">
                        <Col md={1}></Col>
                        <Col md={3} className="">
                            <div className="pb-3">
                                <h3>HOME PAGE</h3>
                            </div>
                        </Col>
                        <Col md={7}>
                            <video width="auto" autoPlay loop muted>
                                <source src={video_home} type="video/mp4" />
                            </video>
                        </Col>
                        <Col md={1}></Col>
                    </Row>

                </Container>
            </div>
            <div className="bg-theme">
                <Container fluid className="py-c pt-0">
                    <Row className="">
                        <Col md={1}></Col>
                        <Col md={3} className="">
                            <div className="pb-3">
                                <h3>ABOUT PAGE</h3>
                            </div>
                        </Col>
                        <Col md={7}>
                            <video width="auto" autoPlay loop muted>
                                <source src={video_about} type="video/mp4" />
                            </video>
                        </Col>
                        <Col md={1}></Col>
                    </Row>
                </Container>
            </div>
            <div className="bg-theme">
                <Container fluid className="py-c pt-0">
                    <Row className="">
                        <Col md={1}></Col>
                        <Col md={3} className="">
                            <div className="pb-3">
                                <h3>BRAND PAGE</h3>
                            </div>
                        </Col>
                        <Col md={7}>
                            <video width="auto" autoPlay loop muted>
                                <source src={video_brand} type="video/mp4" />
                            </video>
                        </Col>
                        <Col md={1}></Col>
                    </Row>
                </Container>
            </div>
            <div className="bg-white">
                <Container fluid className="py-c">
                    <Row className="">
                        <Col md={1}></Col>
                        <Col md={3} className="">
                            <div className="pb-3">
                                <h3>REFLECTION</h3>
                            </div>
                        </Col>
                        <Col md={7}>
                            <p>
                                The accelerated pace of the redesign led to swift decisions,
                                but the absence of in-depth stakeholder input and comprehensive data from the previous site hindered our ability to make truly informed choices.
                                In a future project, I'd ensure dedicated time for user interviews or surveys to gather qualitative insights and establish key performance indicators (KPIs) from existing data to guide the redesign process effectively.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="bg-white">
                <img src={bottom} className="img-fluid" alt="Banner img" />
            </div>
            <Link to="/ProjectDetail/DepartmentCMS" className="text-decoration-none">
                <div className="bg-p-deepnavy">
                    <Container fluid className="next-bottom-container text-p-white">
                        <Row className="">
                            <Col md={1}></Col>
                            <Col md={3} className="">
                                <div className="pb-3">
                                    <span className="text-p-white btn-next"><h3>NEXT PROJECT</h3></span>
                                </div>
                            </Col>
                            <Col md={7}>
                                <span className="text-p-white btn-next-title"><h2 className="font-display2">Custom Healthcare CMS Platform</h2></span>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Link>
        </div>

    )
}

export default Eastland;