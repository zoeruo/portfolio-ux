import { Container, Row, Col } from "react-bootstrap";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { Link } from "react-router-dom";
import ProtectedCaseStudy from "./ProtectedCaseStudy"
import redflagsimg from '../asset/img/RFO_m0.png';
import chghimg from '../asset/img/CHGH_thumbnail.jpg';
import deepdive from '../asset/img/DD_m0.png';
import deptCMS from '../asset/img/DCMS_m.jpg';
import flikshop from '../asset/img/Flikshop_m.jpg';
import cancerqa from '../asset/img/CancerQA_thumbnail.jpg';
import flikshopmobile from '../asset/img/mobile_flikshopthumbnail.jpg';
import chghmobile from '../asset/img/mobile_chghthumbnail.jpg';
import cancermobile from '../asset/img/mobile_cancerthumbnail.jpg';
import imslpimg from '../asset/img/IMSLP_m0.png';
import arrowright from '../asset/img/arrow_right.png';
import arrowleft from '../asset/img/arrow_left.png';
import titlework from '../asset/img/title_work.svg';
import '@splidejs/react-splide/css';

export const Project = () => {
    return (
        <section id="Project" className="bg-white p-0">
            <Container fluid className="px-0 px-md-3">
                <Row className="pt-md-5 gx-0 gx-md-3">
                    <Col md={12}>
                        <h1 className="d-none d-md-block font-display-title text">WORK</h1>
                        <img src={titlework} className="img-fluid d-block d-md-none" alt="" />
                    </Col>
                </Row>
                <Link to="/ProjectDetail/FlikshopLMS" className="text-decoration-none ">
                    <Row className="gx-0 mb-md-3">
                        <Col md={4} className="d-none d-md-flex">
                            <div className="text-bg-p-black d-flex align-items-center justify-content-center p-5 rounded-start-4">
                                <div className="text-start">
                                    <h1 className="text-p-white">Flikshop Learning Management System</h1>
                                    <p className="text-p-white">2023</p>
                                    <p className="text-p-white">Unlocking Potential: A Learning Platform for Incarcerated Individuals</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={8} xs={12}>
                            <img src={flikshop} className="img-fluid d-none d-md-block" alt="" />
                            {/* Mobile version with overlay */}
                            <div className="position-relative">
                                <img src={flikshopmobile} className="img-fluid d-block d-md-none" alt="" />
                                <div className="position-absolute top-0 start-0 w-100 h-100 d-block d-md-none"
                                    style={{
                                        background: 'rgba(44, 62, 80, 0.5)', // Adjust opacity by changing the last number
                                    }}>
                                    <div className="d-flex flex-column justify-content-center align-items-center h-100 text-white p-4">
                                        <h1 className="text-center text-p-white">Flikshop Learning Management System</h1>
                                        <p className="text-center text-p-white">2023</p>
                                        <p className="text-center text-p-white">Unlocking Potential: A Learning Platform for Incarcerated Individuals</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Link>
                <Link to="/ProjectDetail/DepartmentCMS" className="text-decoration-none">
                    <Row className="gx-0 mb-md-3">
                        <Col md={8} xs={12}>
                            <img src={chghimg} className="img-fluid d-none d-md-block" alt="" />
                            <div className="position-relative">
                                <img src={chghmobile} className="img-fluid d-block d-md-none" alt="" />
                                <div className="position-absolute top-0 start-0 w-100 h-100 d-block d-md-none"
                                    style={{
                                        background: 'rgba(44, 62, 80, 0.5)', // Adjust opacity by changing the last number
                                    }}>
                                    <div className="d-flex flex-column justify-content-center align-items-center h-100 text-white p-4">
                                        <h1 className="text-center text-p-white">Custom Healthcare CMS Platform</h1>
                                        <p className="text-center text-p-white">2020</p>
                                        <p className="text-center text-p-white">From Static to Dynamic: Implementing a Hospital-wide CMS Platform with Multi-language Support</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className="d-none d-md-flex">
                            <div className="text-bg-p-black d-flex align-items-center justify-content-center p-5 rounded-end-4">
                                <div className="text-start">
                                    <h1 className="text-p-white">Custom Healthcare CMS Platform</h1>
                                    <p className="text-p-white">2020</p>
                                    <p className="text-p-white">From Static to Dynamic: Implementing a Hospital-wide CMS Platform with Multi-language Support</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Link>
                <ProtectedCaseStudy
                    imageUrl={cancerqa}
                    imageUrlMobile={cancermobile}
                    title="Cancer Patient Care Inquiry Hub"
                    year="2020"
                    description="Bridging the Communication Gap: Improving Cancer Care Coordination with a Centralized Inquiry Platform"
                    linkTo="/ProjectDetail/CancerQA"
                    passkey="zoe2024"
                />
            </Container>
        </section>
    )

}