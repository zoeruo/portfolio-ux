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
import SwitchingPanel from '../components/SwitchingPanel';
import DesignFeatures from '../components/DesignFeature';
import Youtube from "../components/Youtube";
import videofront from "../asset/videos/CHDMS_D.mp4";
import videoback from "../asset/videos/CHDMS_D_Backend.mp4";
import flikshop_d0 from '../asset/img/Flikshop_d3.png';
import flikshop_d1 from '../asset/img/Flikshop_d4.png';
import flikshop_d2 from '../asset/img/Flikshop_d5.png';
import flikshop_d3 from '../asset/img/Flikshop_d6.png';
import flikshop_d4 from '../asset/img/Flikshop_d7.png';
import flikshop_d5 from '../asset/img/Flikshop_d8.png';
import lightbulb from '../asset/img/lightbulb.png';
import FSr_0 from '../asset/img/FS_r0.png';
import FSr_1 from '../asset/img/FS_r1.png';
import FSr_2 from '../asset/img/FS_r2.png';
import FSr_3 from '../asset/img/FS_r3.png';
import FSdp_0 from '../asset/img/FS_dp0.png';
import FSdp_1 from '../asset/img/FS_dp1.png';
import FSdp_2 from '../asset/img/FS_dp2.png';
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator,
} from "@mui/lab";
import MyTimeline from "../components/Timeline";


function ProjectDetail(props) {
    const { title } = useParams();
    const content = contents[title];

    const [show, setShow] = useState(false);
    const [imgSrc, setImgSrc] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        setShow(true);
        setImgSrc(e.target.src);
    }

    const ContentSection = ({ className, condition, children }) => {
        return condition ? (
            <div className={className}>
                <Container className="custom-container">
                    {children}
                </Container>
            </div>
        ) : null;
    };

    // Helper function to safely parse content
    const SafeParse = ({ content }) => {
        if (!content) return null;
        try {
            return <React.Fragment>{parse(content)}</React.Fragment>;
        } catch (error) {
            console.error('Parsing error:', error);
            return null;
        }
    };

    // Count visible sections to track background color
    const visibleSectionCount = [
        content.problemstatement || content.part,
        content.designfeatures,
        content.addon,
        content.researchFS,
        content.designprocessFS,
        content.process,
        content.success,
        content.change,
        content.colortheme,
        content.youtube,
        content.requirements,
        content.reflection
    ].filter(Boolean).length;
    let currentVisibleIndex = -1;

    return (
        <div className="bg-theme">
            <div className="bg-white">
                <img src={content.img} className="img-fluid" alt="Banner img" />
            </div>
            {/* BASIC INFO */}
            <div className="bg-theme">
                <Container className="custom-container">
                    <Row className="py-c pb-0">
                        <Col xs={12} className="text-center">
                            <h1 className="font-display2">{content.title}</h1>
                        </Col>
                    </Row>
                    <Row className="py-c">
                        <Col xs={12} className="py-3">
                            <h1>Overview</h1>
                            <React.Fragment>{parse(content.overview)}</React.Fragment>
                        </Col>
                        <Col xs={12} className="py-3">
                            <h1>Duration</h1>
                            <React.Fragment>{parse(content.duration)}</React.Fragment>
                        </Col>
                        {content.hasOwnProperty('teammembers') &&
                            <>
                                <Col xs={12} className="py-3">
                                    <h1>Team Members</h1>
                                    <React.Fragment>{parse(content.teammembers)}</React.Fragment>
                                </Col>
                            </>
                        }
                        {content.hasOwnProperty('role') &&
                            <>
                                <Col xs={12} className="py-3">
                                    <h1>My Roles</h1>
                                    <React.Fragment>{parse(content.role)}</React.Fragment>
                                </Col>
                            </>
                        }
                    </Row>
                </Container>
            </div>

            {/* Dynamic sections - They will alternate colors based on their order */}
            {[
                //Challenge 
                {
                    condition: content.problemstatement || content.part,
                    content: (
                        <>
                            {content.part && (
                                <Row className="py-c">
                                    <Col xs={12} className="py-3">
                                        <h2>Part 01: AI-powered Flikshop LMS</h2>
                                    </Col>
                                </Row>
                            )}
                            <Row className="py-c">
                                {content.problemstatement && (
                                    <>
                                        <Col xs={12} className="py-3">
                                            <h1>Challenge</h1>
                                            <SafeParse content={content.problemstatement} />
                                        </Col>
                                        {content.goal && (
                                            <Col xs={12} className="py-3">
                                                <h1>What about the GOAL?</h1>
                                                <SafeParse content={content.goal} />
                                            </Col>
                                        )}
                                    </>
                                )}
                            </Row>
                        </>
                    ),
                },
                //DESIGN FEATURES
                {
                    condition: content.designfeatures,
                    content: (
                        <DesignFeatures features={content.designfeatures} />
                    )
                },
                //CancerQA Bootstrap
                {
                    condition: content.addon,
                    content: (
                        <Row className="py-c">
                            <Col xs={12} className="pt-4">
                                <h1>Leveraging Bootstrap for Rapid Development</h1>
                            </Col><Col xs={12} className="pt-2">
                                <SafeParse content={content.addon} />
                            </Col>
                        </Row>
                    )
                },
                //Research Discovery Flikshop
                {
                    condition: content.researchFS,
                    content: (
                        <Row className="py-c">
                            <Col xs={12} className="py-3">
                                <h1>Research + Discovery ( What drove me to the DESIGN DECISIONS? )</h1>
                                <p>To inform this project, we employed a comprehensive research approach, including <strong>field research</strong>, <strong>desktop research</strong>, <strong>user interviews</strong>, and <strong>consultations with AI experts</strong>.</p>
                                <h2>Target Population</h2>
                                <p>Incarcerated individuals using tablets as a learning tool in facilities.</p>
                            </Col>
                            <Col xs={12} className="py-3">
                                <h2>Field Research: Meeting returning citizens in person</h2>
                                <div className="div-FS-research">
                                    <h2>Goal</h2>
                                    <ul>
                                        <li>Access Flikshop School of Business's program to inform LMS development for incarcerated reintegration.</li>
                                    </ul>

                                    <h2>Insights</h2>
                                    <ul>
                                        <li>LMS deployment: Pre-installation on tablets provided by Flikshop in collaboration with manufacturers and facilities. Challenges include government approval and facility environment constraints.</li>
                                        <li>Scholars (Returning Citizens): Motivated by learning tech skills.</li>
                                    </ul>
                                    <div className="bg-theme py-1 px-2 d-flex mb-4">
                                        <div className="me-2 my-auto"><img src={lightbulb} className='pb-2 lightbulb' alt='' /></div>
                                        <div>See ChatGPT as a ‘personal tutor’</div>
                                    </div>

                                    <img src={FSr_0} className="img-fluid"></img>
                                </div>
                            </Col>
                            <Col xs={12} className="py-3">
                                <h2>User Interview</h2>
                                <p>To gain a deeper understanding of the challenges  incarcerated people face, we conducted interviews with 4 formerly incarcerated people.  Since none of us had firsthand experience, these interviews were crucial in identifying important considerations for our design.</p>
                                <div className="div-FS-research">
                                    <h2>Goal</h2>
                                    <ul className="">
                                        <li>Explore learning experiences, resources, and career preparation experiences in correctional facilities.</li>
                                    </ul>
                                    <img src={FSr_1} className="img-fluid pb-4"></img>
                                    <h2>Insights</h2>
                                    <ul>
                                        <li>Federal prisons offer a range of in-person learning opportunities, but experiences can differ.</li>
                                        <li>Data collection within correctional facilities raises privacy and censorship issues.</li>
                                        <li>Frustration with digital tools in prisons can hinder learning effectiveness.</li>
                                    </ul>
                                    <div className="bg-theme py-1 px-2 d-flex mb-4">
                                        <div className="me-2 my-auto"><img src={lightbulb} className='pb-2 lightbulb' alt='' /></div>
                                        <div>How can we mitigate the frustration or anxiety?</div>
                                    </div>
                                    <img src={FSr_2} className="img-fluid"></img>
                                </div>
                            </Col>
                            <Col xs={12} className="py-3">
                                <h2>AI Expert Interview</h2>
                                <p>To optimize our AI integration within the LMS system, we conducted AI Expert interviews to understand the potential benefits and drawbacks of AI in the LMS system.</p>
                                <div className="div-FS-research">
                                    <h2>Goal</h2>
                                    <ul className="">
                                        <li>Identify opportunities for AI-powered LMS to address the challenges faced by learners in correctional facilities, despite the inherent difficulties of implementing such technology in this environment.</li>
                                    </ul>
                                    <img src={FSr_3} className="img-fluid pb-4"></img>
                                    <h2>Insights</h2>
                                    <ul>
                                        <li>High user engagement is essential for a successful LMS within correctional facilities.</li>
                                        <li>The LMS should be accessible to all users, including those with visual impairments, by offering multiple languages, clear and concise language options, and other accessibility features.</li>
                                        <li>The LMS can be a tool to demonstrate and celebrate personal growth and learning, potentially fostering a sense of accomplishment and rebuilding trust.</li>
                                    </ul>
                                    <div className="bg-theme py-1 px-2 d-flex mb-4">
                                        <div className="me-2 my-auto"><img src={lightbulb} className='pb-2 lightbulb' alt='' /></div>
                                        <div>How can we ensure the LMS is accessible to all learners?</div>
                                    </div>
                                </div>
                            </Col>
                        </Row>)
                },
                //Design Process Flikshop
                {
                    condition: content.designprocessFS,
                    content: (
                        <Row className="py-c">
                            <Col xs={12} className="py-3">
                                <h1>Design Sprint</h1>
                                <p>We used a <strong>design sprint</strong> to tackle this challenge!</p>
                            </Col>
                            <Col xs={12} className="py-3">
                                <div className="div-FS-designprocess">
                                    <Row>
                                        <Col xs={12} md={3}>
                                            <div className="bg-white px-2 py-1 rounded">Mapping</div>
                                            <div className="px-2 py-1">Sketch</div>
                                            <div className="px-2 py-1">Decide</div>
                                            <div className="px-2 py-1">Prototype</div>
                                            <div className="px-2 py-1">Testing</div>
                                        </Col>
                                        <Col xs={12} md={9}>
                                            <img src={FSdp_0} className="img-fluid pb-4"></img>
                                            <p>By mapping out how students typically use the LMS and meeting with Flikshop, we identified their main focus: to prepare students for job opportunities when they are released. Next, we brainstormed, organized, and voted on the ‘How Might We’ notes. We identified a key question:</p>
                                            <div className="bg-white py-1 px-2 d-flex mb-4">
                                                <div className="me-2 my-auto"><img src={lightbulb} className='pb-2 lightbulb' alt='' /></div>
                                                <div>‘ How might we use AI to tell a correctional journey ( Form of a Resume/ Cover Letter/ Parole Pack/ Skills ) and prepare them for job opportunities? ’</div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col xs={12} className="py-3">
                                <div className='div-FS-designprocess'>
                                    <Row>
                                        <Col xs={12} md={3}>
                                            <div className="px-2 py-1">Mapping</div>
                                            <div className="bg-white px-2 py-1 rounded">Sketch</div>
                                            <div className="bg-white px-2 py-1 rounded">Decide</div>
                                            <div className="px-2 py-1">Prototype</div>
                                            <div className="px-2 py-1">Testing</div>
                                        </Col>
                                        <Col xs={12} md={9}>
                                            <img src={FSdp_1} className="img-fluid pb-4" />
                                            <p>Our Sketch session yielded three core user flows: <b>Resume Building</b>, <b>Interview Preparation</b>, and <b>Personal Journey</b>. Flikshop, prioritizing practical job placement assistance for incarcerated individuals, opted to focus on the first two flows.</p>
                                            <img src={FSdp_2} className="img-fluid pb-4" />
                                            <p>The mix of working alone and together got the creative juices flowing!</p>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col xs={12} className="py-3">
                                <div className='div-FS-designprocess'>
                                    <Row>
                                        <Col xs={12} md={3}>
                                            <div className="px-2 py-1">Mapping</div>
                                            <div className="px-2 py-1">Sketch</div>
                                            <div className="px-2 py-1 ">Decide</div>
                                            <div className="px-2 py-1">Prototype</div>
                                            <div className="bg-white px-2 py-1 rounded">Testing</div>
                                        </Col>
                                        <Col xs={12} md={9}>
                                            <p>Conducted 4 in-person, moderated testing with previously incarcerated people from federal prisons. Each lasted for around 1 hour. </p>
                                            <h2>What were we trying to know?</h2>
                                            <ul>
                                                <li>Assessed the usability of the interface and how easy it is for incarcerated learners to enter information.</li>
                                                <li>Evaluated the overall user experience and how smoothly users can complete tasks within the system.</li>
                                                <li>Gathered insights into the user behaviors of incarcerated learners as they interact with the platform</li>
                                            </ul>
                                            <h2>Results</h2>
                                            <p>User testing revealed promising results. Testers found the experience design and app flows to be clean and intuitive, making it suitable for use within correctional facilities. Additionally, users praised the AI features and interaction, highlighting their usefulness in resume creation and interview practice.</p>
                                            <h2>What valuable insights did we uncover?</h2>
                                            <ul>
                                                <li><strong>Offer in-app tutorials</strong>: Provide clear and concise instructions on using the app and creating effective resumes.</li>
                                                <li><strong>Capture life experiences</strong>: Allow users to integrate valuable life and situational experiences into their resumes.</li>
                                                <li><strong>Flexible education section</strong>: Make the "Education" section optional to accommodate users with non-traditional academic backgrounds.</li>
                                                <li><strong>Diverse prompts</strong>: Offer a wider variety of prompts to guide users in crafting their resumes and exploring potential career paths.</li>
                                            </ul>
                                            <div className="bg-white py-1 px-2 d-flex mb-4">
                                                <div className="me-2 my-auto"><img src={lightbulb} className='pb-2 lightbulb' alt='' /></div>
                                                <div>Incarcerated individuals have diverse experiences, and many may lack formal education or traditional work backgrounds.</div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    )
                },
                //CHGH PROCESS
                {
                    condition: content.process,
                    content: (
                        <Row className="py-c">
                            <Col xs={12} className="py-3">
                                <h1>Proccess</h1>
                                <MyTimeline />
                            </Col>
                        </Row>
                    )
                },
                //Success
                {
                    condition: content.success,
                    content: (
                        <>
                            {content.hasOwnProperty('success') &&
                                (<Row className="py-c">
                                    <Col xs={12} className="pt-4">
                                        <h1>Design Features Highlights</h1>
                                    </Col>
                                    <Col xs={12} className="pt-2">
                                        <React.Fragment>{parse(content.success)}</React.Fragment>
                                        <video className='w-100' autoPlay loop muted>
                                            <source src={videofront} type='video/mp4' allowFullScreen />
                                        </video>

                                    </Col>
                                    <Col xs={12} className="pt-4">
                                        <h2>Back-End Key Design Consideration &  DEMO</h2>
                                        <ul><li><strong>Show all important info at once</strong>: Use tables with rows to make editing information clear.</li>
                                            <li><strong>Keep it simple</strong>: Remove distractions and use clear icons with text.</li>
                                            <li><strong>Give users flexibility</strong>: Provide a text editor for detailed editing.</li></ul>
                                        <video className='w-100' autoPlay loop muted>
                                            <source src={videoback} type='video/mp4' allowFullScreen />
                                        </video>
                                    </Col>
                                </Row>
                                )
                            }
                        </>
                    )
                },
                //DONE DIFFERENTLY
                {
                    condition: content.change,
                    content: (
                        <Row className="py-c">
                            <Col xs={12} className="pt-4">
                                <h1>What would I have done DIFFERENTLY?</h1>
                            </Col><Col xs={12} className="pt-2">
                                <SafeParse content={content.change} />
                            </Col>
                        </Row>
                    )
                },
                //Color Theme
                {
                    condition: content.colortheme,
                    content: (
                        <Row className="py-c">
                            <Col xs={12} className="pt-4">
                                <h1>Color Theme</h1>
                            </Col>
                            <Col xs={12} className="pt-2">
                                <SafeParse content={content.colortheme} />
                            </Col>
                        </Row>
                    )
                },
                //Creating Process
                // {
                //     condition: content.creatingprocess,
                //     content: (
                //         <Row className="py-c">
                //             <Col xs={12} className="pt-4">
                //                 <h1>Creating Process</h1>
                //             </Col><Col xs={12} className="pt-2">
                //                 <SafeParse content={content.creatingprocess.txt} />
                //                 {content.creatingprocess.img.map(item => (
                //                     <>
                //                         <img src={item.img} className="img-fluid mt-3" alt="" onClick={handleShow} />
                //                         <p className=''>{item.txt}</p>
                //                     </>
                //                 ))}
                //             </Col>
                //         </Row>
                //     )
                // },
                //Youtube
                {
                    condition: content.youtube,
                    content: (
                        <Row className="py-c">
                            <Col xs={12} className="pt-4">
                                <h1>Documentation Video</h1>
                            </Col><Col xs={12} className="pt-2">
                                <Youtube videoID={content.youtube} />
                            </Col>
                        </Row>
                    )
                },
                //Requirements
                {
                    condition: content.requirements,
                    content: (
                        <Row className="py-c">
                            <Col xs={12} className="pt-4">
                                <h1>Requirements</h1>
                            </Col><Col xs={12} className="pt-2">
                                <SafeParse content={content.requirements} />
                            </Col>
                        </Row>
                    )
                },
                //Outcome
                {
                    condition: content.outcome,
                    content: (
                        <Row className="py-c">
                            <Col xs={12} className="pt-4">
                                <h1>Outcome</h1>
                            </Col>
                            <Col xs={12} className="pt-2">
                                <SafeParse content={content.outcome} />
                            </Col>
                        </Row>
                    )
                },
                //Reflections
                {
                    condition: content.reflection,
                    content: (
                        <Row className="py-c">
                            <Col xs={12} className="pt-4">
                                <h1>Reflection</h1>
                            </Col>
                            <Col xs={12} className="pt-2">
                                <SafeParse content={content.reflection} />
                            </Col>
                        </Row>
                    )
                },

            ].map((section, index) => {
                // Only increment the visible index if the section is visible
                if (section.condition) {
                    currentVisibleIndex++;
                }
                return (
                    <ContentSection
                        key={index}
                        className={section.condition ? (currentVisibleIndex % 2 === 0 ? 'bg-white' : 'bg-theme') : ''}
                        condition={section.condition}
                    >
                        {section.content}
                    </ContentSection>
                );
            })}

            <Container className="custom-container">
                {content.hasOwnProperty('persona') &&
                    <><Row className="py-c">
                        <Col xs={12} className="pt-4">
                            <h1>Personas</h1>
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
                            <h1>Storyboards</h1>
                        </Col>
                        <Col xs={12} className="pt-2">
                            <img src={content.storyboards} className="img-fluid mb-2 zoom" alt="" onClick={handleShow} />
                        </Col>
                    </Row></>
                }
                {content.hasOwnProperty('IA') &&
                    <><Row className="py-c">
                        <Col xs={12} className="pt-4">
                            <h1>Information Architecture</h1>
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
                            <h1>Low-Fidelity Prototypes</h1>
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
                            <h1>Wireframes</h1>
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
                            <h1>Components</h1>
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
                            <h1>High-Fidelity Prototypes</h1>
                        </Col>
                        <Col xs={12} className="pt-2">
                            <Carousel className="mx-auto" id="C_highfidelity" data-bs-theme="dark" slide={false} indicators={false} interval={5000}>
                                {content.highfidelity.map((item, index) => (
                                    <Carousel.Item key={index} >
                                        <img
                                            className="d-block w-100"
                                            src={item.img}
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
                            <h1>Development</h1>
                        </Col>
                        <Col xs={12} className="pt-2">
                            <p><React.Fragment>{parse(content.development)}</React.Fragment></p>
                        </Col>
                    </Row></>
                }
                {content.hasOwnProperty('achievement') &&
                    <><Row className="py-c">
                        <Col xs={12} className="pt-4">
                            <h1>Achievements</h1>
                        </Col><Col xs={12} className="pt-2">
                            <React.Fragment>{parse(content.achievement)}</React.Fragment>
                        </Col>
                    </Row></>
                }

                {content.hasOwnProperty('inprocess') &&
                    <><Row className="py-c">
                        <Col xs={12} className="pt-2 text-center">
                            <p><b>Coming Soon! Can't wait to know the details? Let's Chat!</b></p>
                            {/* <button type="button" class="btn btn-dark"></button> */}
                            <a href="mailto:zoeruolo@gmail.com" className="btn btn-dark">Schedule an Interview</a>
                        </Col>
                    </Row></>
                }
            </Container>

            <Modal show={show} fullscreen={true} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body className="text-center"><img src={imgSrc} className="img-fluid" alt="" onClick={handleShow} /></Modal.Body>
            </Modal>
        </div>
    );
    const carousel = new Carousel('#C_highfidelity')
}



export default ProjectDetail;

