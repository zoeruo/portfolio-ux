import { Container, Row, Col } from "react-bootstrap";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { Link } from "react-router-dom";
import ProtectedCaseStudy from "./ProtectedCaseStudy"
import redflagsimg from '../asset/img/RFO_m0.png';
import chghimg from '../asset/img/CHGH_m0.png';
import deepdive from '../asset/img/DD_m0.png';
import deptCMS from '../asset/img/DCMS_m.jpg';
import flikshop from '../asset/img/Flikshop_m.jpg';
import cancerqa from '../asset/img/CancerQA_thumbnail.png';
import imslpimg from '../asset/img/IMSLP_m0.png';
import arrowright from '../asset/img/arrow_right.png';
import arrowleft from '../asset/img/arrow_left.png';
import '@splidejs/react-splide/css';

export const Project = () => {
    return (
        <>
            <section id="Project" className="bg-white">
                <Container className="custom-container">
                    <Row className="pb-5">
                        <Col md={12}>
                            <Link to="/ProjectDetail/FlikshopLMS" className="nav-link"><img src={flikshop} className="img-fluid mb-3" alt="" /></Link>
                            <Link to="/ProjectDetail/FlikshopLMS" className="nav-link"><h1 className="mb-1">Flikshop Learning Management System | 2023</h1></Link>
                            <div>Unlocking Potential: A Learning Platform for Incarcerated Individuals</div>
                        </Col>
                    </Row>
                    <Row className="pb-5">
                        <Col md={12}>
                            <Link to="/ProjectDetail/DepartmentCMS" className="nav-link"><img src={deptCMS} className="img-fluid mb-3" alt="" /></Link>
                            <Link to="/ProjectDetail/DepartmentCMS" className="nav-link"><h1 className="mb-1">CMS for Hospital's Organizational Divisions | 2020</h1></Link>
                            <div>Taming the Content Chaos: A CMS for 80+ Divisions</div>
                        </Col>
                    </Row>
                    <ProtectedCaseStudy
                        imageUrl={cancerqa}
                        title="Cancer Patient Care Inquiry Hub | 2020"
                        description="Bridging the Communication Gap: Improving Cancer Care Coordination with a Centralized Inquiry Platform"
                        linkTo="/ProjectDetail/CancerQA"
                        passkey="zoe2024"
                    />
                </Container>
            </section>
        </>
    )

}