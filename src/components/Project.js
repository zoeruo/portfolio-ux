import { Container, Row, Col } from "react-bootstrap";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { Link } from "react-router-dom";
import redflagsimg from '../asset/img/RFO_m0.png';
import chghimg from '../asset/img/CHGH_m0.png';
import deepdive from '../asset/img/DD_m0.png';
import deptCMS from '../asset/img/CHGH_D_m0.png';
import flikshop from '../asset/img/Flikshop_m0.png';
import imslpimg from '../asset/img/IMSLP_m0.png';
import arrowright from '../asset/img/arrow_right.png';
import arrowleft from '../asset/img/arrow_left.png';
import '@splidejs/react-splide/css';

export const Project = () => {


    return (
        <section id="Project" className="bg-white">
            <Container>
                <Row className="py-3">
                    <Col md={12} className="text-center">
                        <h3>PROJECT | FEATURED</h3>
                    </Col>
                </Row>
                <Row className="pb-4">
                    <Col md={6}>
                        <Link to="/ProjectDetail/FlikshopLMS" className="nav-link"><img src={flikshop} className="img-fluid mb-3" alt="" /></Link>
                        <Link to="/ProjectDetail/FlikshopLMS" className="nav-link"><h5 className="mb-1">Flikshop LMS | 2024</h5></Link>
                        <p>Unlocking Potential: A Learning Platform for Incarcerated Individuals</p>
                    </Col>
                    <Col md={6}>
                        <Link to="/ProjectDetail/DepartmentCMS" className="nav-link"><img src={deptCMS} className="img-fluid mb-3" alt="" /></Link>
                        <Link to="/ProjectDetail/DepartmentCMS" className="nav-link"><h5 className="mb-1">Hospital Department CMS | 2020</h5></Link>
                        <p>Responsive Web Template Design</p>
                    </Col>
                    {/* <Col md={4}>
                        <Link to="/ProjectDetail/CHGH" className="nav-link"><img src={chghimg} className="img-fluid mb-3" alt="" /></Link>
                        <Link to="/ProjectDetail/CHGH" className="nav-link"><h5 className="mb-1">Cheng Hsin General Hospital | 2020</h5></Link>
                        <p>Responsive Web Design</p>
                    </Col> */}
                </Row>
                <Row className="py-3">
                    <Col md={12} className="text-center">
                        <h3>PROJECT | HCI STUDY</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Link to="/ProjectDetail/IMSLPRedesigning" className="nav-link"><img src={imslpimg} className="img-fluid mb-3" alt="" /></Link>
                        <Link to="/ProjectDetail/IMSLPRedesigning" className="nav-link"><h5 className="mb-1">IMSLP Redesigning | 2023</h5></Link>
                        <p>Visual Design</p>
                    </Col>
                    <Col md={4}>
                        <Link to="/ProjectDetail/RedFlagsOut" className="nav-link cursor-lighlight"><img src={redflagsimg} className="img-fluid mb-3" alt="" /></Link>
                        <Link to="/ProjectDetail/RedFlagsOut" className="nav-link"><h5 className="mb-1">Red Flags Out | 2023</h5></Link>
                        <p>A dating app focusing on RedFlags</p>
                    </Col>
                    <Col md={4}>
                        <Link to="/ProjectDetail/Deepdive" className="nav-link"><img src={deepdive} className="img-fluid mb-3" alt="" /></Link>
                        <Link to="/ProjectDetail/Deepdive" className="nav-link"><h5 className="mb-1">Deepdive | 2023</h5></Link>
                        <p>A learning and tracking app for freedivers</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}