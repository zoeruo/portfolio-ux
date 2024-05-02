import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import AnimatedCursor from "react-animated-cursor"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import bannerimg from '../asset/img/RedFlagsOut_main.png';
import { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import parse from "html-react-parser";
import { contents } from './ProjectsContent';
import Youtube from "../components/Youtube";
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator,
} from "@mui/lab";


function ProjectDetail(props) {
    //read url param (App Route path)
    const { title } = useParams();
    // const [title, setTitle] = useState("");
    // const [img, setImg] = useState();
    const content = contents[title]

    const [show, setShow] = useState(false);
    const [imgSrc, setImgSrc] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        setShow(true);
        setImgSrc(e.target.src);
    }


    return (

        <div className="bg-theme">
            <div className="bg-white">
                <Container>
                    <Row className="py-3 py-md-0">
                        <Col xs={12} md={5} className="my-auto">
                            <h1 className="display">{content.title}</h1>
                            <h2 className="shortdesc">{content.subtitle}</h2>
                        </Col>
                        <Col xs={12} md={7} className="py-3">
                            <img src={content.img} className="img-fluid" alt="Banner img" />
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* <AnimatedCursor /> */}
            <Container className="custom-container">
                {/* <Row className="py-3 py-md-0">
                    <Col xs={12} md={5} className="my-auto">
                        <h1 className="display">{content.title}</h1>
                        <h2 className="shortdesc">{content.subtitle}</h2>
                    </Col>
                    <Col xs={12} md={7} className="py-3">
                        <img src={content.img} className="img-fluid" alt="Banner img" />
                    </Col>
                </Row> */}
                <Row className="py-4">
                    <Col xs={12} className="pt-4">
                        <h3>Overview</h3>
                    </Col>
                    <Col xs={12} className="pt-2">
                        <p><React.Fragment>{parse(content.overview)}</React.Fragment></p>
                    </Col>
                    <Col xs={12} className="pt-4">
                        <h3>Duration</h3>
                    </Col>
                    <Col xs={12} className="pt-2">
                        <p><React.Fragment>{parse(content.duration)}</React.Fragment></p>
                    </Col>
                    {content.hasOwnProperty('teammembers') &&
                        <>
                            <Col xs={12} className="pt-4">
                                <h3>Team Members</h3>
                            </Col><Col xs={12} className="pt-2">
                                <React.Fragment>{parse(content.teammembers)}</React.Fragment>
                            </Col>
                        </>
                    }
                    {content.hasOwnProperty('role') &&
                        <>
                            <Col xs={12} className="pt-4">
                                <h3>My Role and Key Achievements</h3>
                            </Col>
                            <Col xs={12} className="pt-2">
                                <React.Fragment>{parse(content.role)}</React.Fragment>
                            </Col>
                        </>
                    }
                </Row>



                {content.hasOwnProperty('colortheme') &&
                    <><Row className="py-c">
                        <Col xs={12} className="pt-4">
                            <h3>Color Theme</h3>
                        </Col>
                        <Col xs={12} className="pt-2">
                            <React.Fragment>{parse(content.colortheme)}</React.Fragment>
                        </Col>
                    </Row></>
                }
                {content.hasOwnProperty('creatingprocess') &&
                    <><Row className="py-c">
                        <Col xs={12} className="pt-4">
                            <h3>Creating Process</h3>
                        </Col><Col xs={12} className="pt-2">
                            <React.Fragment>{parse(content.creatingprocess.txt)}</React.Fragment>
                            {content.creatingprocess.img.map(item => (
                                <>
                                    <img src={item.img} className="img-fluid mt-3" alt="" onClick={handleShow} />
                                    <p className=''>{item.txt}</p>

                                </>
                            ))}
                        </Col>
                    </Row></>
                }
                {content.hasOwnProperty('youtube') &&
                    <><Row className="py-c">
                        <Col xs={12} className="pt-4">
                            <h3>Documentation Video</h3>
                        </Col><Col xs={12} className="pt-2">
                            <Youtube videoID={content.youtube} />
                        </Col>
                    </Row></>
                }


                {content.hasOwnProperty('problemstatement') &&
                    <><Row className="py-c">
                        <Col xs={12} className="pt-4">
                            <h3>What was the PROBLEM?</h3>
                        </Col>
                        <Col xs={12} className="pt-2">
                            <p><React.Fragment>{parse(content.problemstatement)}</React.Fragment></p>
                        </Col>
                    </Row>
                    </>
                }
                {content.hasOwnProperty('process') &&
                    <>
                        <Row className="py-c">
                            <Col xs={12} className="pt-4">
                                <h3>What about the process?</h3>
                            </Col><Col xs={12} className="pt-2">
                                <Timeline>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>Evaluated and reorganized the website's content structure</TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>Restructured the website's information architecture and clearly defined the scope of editable content</TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot />
                                        </TimelineSeparator>
                                        <TimelineContent>Sketched & Wireframed & Discussed with our medical director (decision-maker)</TimelineContent>
                                    </TimelineItem>
                                </Timeline>
                            </Col>
                        </Row>
                    </>
                }
                {content.hasOwnProperty('requirements') &&
                    <><Row className="py-c">
                        <Col xs={12} className="pt-4">
                            <h3>Requirements</h3>
                        </Col><Col xs={12} className="pt-2">
                            <React.Fragment>{parse(content.requirements)}</React.Fragment>
                        </Col>
                    </Row></>
                }
                {content.hasOwnProperty('persona') &&
                    <><Row className="py-c">
                        <Col xs={12} className="pt-4">
                            <h3>Personas</h3>
                        </Col>
                        <Col xs={12} className="pt-2">
                            {content.persona.map(item => (
                                <img src={item} className="img-fluid mb-2 zoom" alt="" onClick={handleShow} />

                            ))}

                        </Col>
                    </Row></>
                }
                {content.hasOwnProperty('storyboards') &&
                    <><Row className="py-c">
                        <Col xs={12} className="pt-4">
                            <h3>Storyboards</h3>
                        </Col>
                        <Col xs={12} className="pt-2">
                            <img src={content.storyboards} className="img-fluid mb-2 zoom" alt="" onClick={handleShow} />
                        </Col>
                    </Row></>
                }
                {content.hasOwnProperty('IA') &&
                    <><Row className="py-c">
                        <Col xs={12} className="pt-4">
                            <h3>Information Architecture</h3>
                        </Col>
                        <Col xs={12} className="pt-2">
                            <div className="text-center">
                                <img src={content.IA} className="img-fluid zoom" alt="" onClick={handleShow} />
                            </div>
                        </Col>
                    </Row></>
                }
                {content.hasOwnProperty('lowfidelity') &&
                    <><Row className="py-c">
                        <Col xs={12} className="pt-4">
                            <h3>Low-Fidelity Prototypes</h3>
                        </Col>
                        <Col xs={12} className="pt-2 text-center">
                            {content.lowfidelity.map((item, index) => (
                                <div key={index} className="py-3">

                                    <img src={item.img} className="img-fluid mb-2 zoom" alt="" onClick={handleShow} />
                                    <h4 className='mt-3'>{item.txt}</h4>
                                </div>
                            ))}
                            {/* <Row>
                                    <Col xs={12} md={6} className="">
                                        <img src={content.lowfidelity.img[0]} className="img-fluid mb-2" alt="" onClick={handleShow} />
                                        {content.lowfidelity.txt[0]}
                                    </Col>
                                    <Col xs={12} md={6} className="">
                                        <img src={content.lowfidelity.img[1]} className="img-fluid mb-2" alt="" onClick={handleShow} />
                                        {content.lowfidelity.txt[1]}
                                    </Col>
                                </Row> */}
                        </Col>
                    </Row></>
                }
                {content.hasOwnProperty('wireframe') &&
                    <><Row className="py-c">
                        <Col xs={12} className="pt-4">
                            <h3>Wireframes</h3>
                        </Col>
                        <Col xs={12} className="pt-2">
                            {content.wireframe.map(item => (
                                <>
                                    <h4 className='mt-3'>{item.txt}</h4>
                                    <img src={item.img} className="img-fluid mb-2 zoom" alt="" onClick={handleShow} />
                                </>
                            ))}
                        </Col>
                    </Row></>
                }
                {content.hasOwnProperty('components') &&
                    <><Row className="py-c">
                        <Col xs={12} className="pt-4">
                            <h3>Components</h3>
                        </Col>
                        <Col xs={12} className="pt-4">
                            <p>{content.components.txt}</p>
                        </Col>
                        <Col xs={12} className="text-center">
                            <img src={content.components.img} className="img-fluid mb-2 zoom" alt="" onClick={handleShow} />
                        </Col>
                    </Row></>
                }
                {content.hasOwnProperty('highfidelity') &&
                    <><Row className="py-c">
                        <Col xs={12} className="pt-4">
                            <h3>High-Fidelity Prototypes</h3>
                        </Col>
                        <Col xs={12} className="pt-2">
                            <Carousel className="mx-auto" id="C_highfidelity" data-bs-theme="dark" slide={false} indicators={false} interval={5000}>
                                {content.highfidelity.map((item, index) => (
                                    <Carousel.Item key={index} >
                                        <img
                                            className="d-block w-100"
                                            src={item.img}
                                        //alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h4>{item.title}</h4>
                                            <p>{item.txt}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Col>
                    </Row></>
                }
                {content.hasOwnProperty('development') &&
                    <><Row className="py-c">
                        <Col xs={12} className="pt-4">
                            <h3>Development</h3>
                        </Col>
                        <Col xs={12} className="pt-2">
                            <p><React.Fragment>{parse(content.development)}</React.Fragment></p>
                        </Col>
                    </Row></>
                }
                {content.hasOwnProperty('achievement') &&
                    <><Row className="py-c">
                        <Col xs={12} className="pt-4">
                            <h3>Achievements</h3>
                        </Col><Col xs={12} className="pt-2">
                            <React.Fragment>{parse(content.achievement)}</React.Fragment>
                        </Col>
                    </Row></>
                }
                {content.hasOwnProperty('reflection') &&
                    <><Row className="py-c">
                        <Col xs={12} className="pt-4">
                            <h3>Reflection</h3>
                        </Col>
                        <Col xs={12} className="pt-2">
                            <p><React.Fragment>{parse(content.reflection)}</React.Fragment></p>
                        </Col>
                    </Row></>
                }
                {/* </Row> */}
                {/* <Row>
                    <Col xs={12} className="my-auto text-center py-c">
                        © 2023. All Rights Reserved to Zoe Lo.
                    </Col>
                </Row> */}
            </Container>


            <Modal show={show} fullscreen={true} onHide={handleClose}>
                <Modal.Header closeButton>
                    {/* <Modal.Title>Modal heading</Modal.Title> */}
                </Modal.Header>
                <Modal.Body className="text-center"><img src={imgSrc} className="img-fluid" alt="" onClick={handleShow} /></Modal.Body>
            </Modal>
        </div>





    );

    const carousel = new Carousel('#C_highfidelity')


}



export default ProjectDetail;

