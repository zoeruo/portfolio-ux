import { Container, Row, Col } from "react-bootstrap";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { Link } from "react-router-dom";
import redflagsimg from '../asset/img/RFO_m0.png';
import chghimg from '../asset/img/CHGH_m0.png';
import deepdive from '../asset/img/DD_m0.png';
import deptCMS from '../asset/img/CHGH_D_m0.png';
import arrowright from '../asset/img/arrow_right.png';
import arrowleft from '../asset/img/arrow_left.png';
import '@splidejs/react-splide/css';

export const Project = () => {


    return (
        <section id="Project" className="bg-white">
            <Container>
                <Row className="py-2">
                    <Col md={12}>
                        <h3>PROJECT</h3>
                    </Col>
                </Row>
                <Row>
                <Col md={4}>
                        <Link to="/ProjectDetail/DepartmentCMS" className="nav-link"><img src={deptCMS} className="img-fluid mb-3" alt="" /></Link>
                        <Link to="/ProjectDetail/DepartmentCMS" className="nav-link"><h5 className="mb-1">Hospital Department CMS | 2020</h5></Link>
                        <p>Responsive Web Template Design</p>
                    </Col>
                    <Col md={4}>
                        <Link to="/ProjectDetail/CHGH" className="nav-link"><img src={chghimg} className="img-fluid mb-3" alt="" /></Link>
                        <Link to="/ProjectDetail/CHGH" className="nav-link"><h5 className="mb-1">Cheng Hsin General Hospital | 2020</h5></Link>
                        <p>Responsive Web Design</p>
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
                {/* <Row>
                    <Col md={12}>
                        <Splide hasTrack={false} options={{
                            type: 'loop',
                            perPage: 3,
                            rewind : true
                            
                        }}
                            aria-label=""
                        >
                            
                            <SplideTrack>
                                <SplideSlide>
                                    <div className="div_slider splide__slide__container">
                                        <img src={chghimg} alt="Cheng Hsin General Hospital project photo" />
                                        <h4>Cheng Hsin General Hospital</h4>
                                        <p>Responsive Web Design</p>
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="div_slider splide__slide__container">
                                        <img src={deepdive} alt="Deepdive project photo" />
                                        <h4>Deepdive | 2023</h4>
                                        <p>A learning and tracking app for freedivers</p>
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="div_slider splide__slide__container">
                                        <img src={redflagsimg} alt="RedFlagsOut project photo" />
                                        <h4>Red Flags Out | 2023</h4>
                                        <p>A dating app focusing on RedFlags</p>
                                    </div>
                                </SplideSlide>
                            </SplideTrack>
                            <div className="splide__arrows">
                                <button className="splide__arrow splide__arrow--prev my-arrow"><img src={arrowleft} style={{ width: 40 }} /></button>
                                <button className="splide__arrow splide__arrow--next my-arrow"><img src={arrowright} /></button>
                            </div>
                        </Splide>
                    </Col>
                </Row> */}



            </Container>
        </section>
    )

}