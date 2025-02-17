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
import eye1 from '../asset/img/eye1.png';
import eye2 from '../asset/img/eye2.png';
import eye3 from '../asset/img/eye3.png';
import eye4 from '../asset/img/eye4.png';
import chghia from '../asset/img/CHGH_IA.png';
import chghsketch from '../asset/img/chgh_sketch.png';
import chghiteration from '../asset/img/chgh_iteration.png';
import chghRWD from '../asset/img/chgh_feature_RWD.jpg';
import chghmenu from '../asset/img/chgh_feature_selectablemenu.jpg';
import chghlanguage from '../asset/img/chgh_feature01.jpg';
import lmsap_courses from '../asset/img/LMSAP_Courses.jpg';
import lmsap_coursestructurecollapse from '../asset/img/LMSAP_CourseStructureCollapse.jpg';
import lmsap_preview from '../asset/img/LMSAP_Preview.jpg';
import lmsap_research_interview_insights from '../asset/img/LMSAP_research_interviewinsights.jpg';
import lmsap_research_persona1 from '../asset/img/LMSAP_resrach_persona1.jpg';
import lmsap_research_persona2 from '../asset/img/LMSAP_resrach_persona2.jpg';
import lmsap_research_metrics from '../asset/img/LMSAP_research_metrics.jpg';
import lmsap_video_coursestructure from '../asset/videos/LMSAP_CourseStructure.mp4';
import lmsap_video_dashboard from '../asset/videos/LMSAP_Dashboard.mp4';
import lmsap_video_learner from '../asset/videos/LMSAP_Learner.mp4';
import lmsap_design_mapping from '../asset/img/LMSAP_design_mapping.jpg';
import lmsap_design_sketch from '../asset/img/LMSAP_design_sketch.jpg';
import lmsap_design_decide from '../asset/img/LMSAP_design_decide.jpg';
import lmsap_design_prototype from '../asset/img/LMSAP_design_prototype.jpg';
import lmsap_design_test from '../asset/img/LMSAP_design_testing.jpg';
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
import ScrollContentSection from '../components/ScrollContentSection';


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
                {/* <Container className="custom-container"> */}
                {children}
                {/* </Container> */}
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
                <Container className="custom-container py-c">
                    <Row className="mb-5">
                        <Col xs={12} className="text-center">
                            <h1 className="font-display2">{content.title}</h1>
                        </Col>
                    </Row>
                    <Row className="row-gap-4">
                        <Col xs={12} className="">
                            <h3>OVERVIEW</h3>
                            <React.Fragment>{parse(content.overview)}</React.Fragment>
                        </Col>
                        <Col xs={12} className="">
                            <h3>DURATION</h3>
                            <React.Fragment>{parse(content.duration)}</React.Fragment>
                        </Col>
                        {content.hasOwnProperty('teammembers') &&
                            <>
                                <Col xs={12} className="">
                                    <h3>TEAM MEMBERS</h3>
                                    <React.Fragment>{parse(content.teammembers)}</React.Fragment>
                                </Col>
                            </>
                        }
                        {content.hasOwnProperty('role') &&
                            <>
                                <Col xs={12} className="">
                                    <h3>MY ROLES</h3>
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
                        <Container className="custom-container">
                            <Row className="py-c">
                                {content.problemstatement && (
                                    <>
                                        <Col xs={12} className="">
                                            <h1 className="mb-5">CHALLENGE</h1>
                                            <SafeParse content={content.problemstatement} />
                                        </Col>
                                        {content.goal && (
                                            <Col xs={12} className="">
                                                <h1 className="py-5">GOAL</h1>
                                                <SafeParse content={content.goal} />
                                            </Col>
                                        )}
                                    </>
                                )}
                            </Row>
                        </Container>
                    ),
                },
                //DESIGN FEATURES
                {
                    condition: content.designfeatures,
                    content: (
                        <Container className="custom-container">
                            <DesignFeatures features={content.designfeatures} />
                        </Container>
                    )
                },
                //CancerQA Bootstrap
                {
                    condition: content.addon,
                    content: (
                        <Container className="custom-container">
                            <Row className="py-c">
                                <Col xs={12} >
                                    <h1 className="mb-5">LEVERAGING BOOTSTRAP</h1>
                                </Col><Col xs={12} className="pt-2">
                                    <SafeParse content={content.addon} />
                                </Col>
                            </Row>
                        </Container>
                    )
                },
                //Research Discovery Flikshop
                {
                    condition: content.researchFS,
                    content: (
                        <>
                            <Container className="custom-container">
                                <Row className="py-c">
                                    <Col xs={12} className="">
                                        <h1 className="mb-5">RESEARCH + DISCOVERY ( What drove me to the DESIGN DECISIONS? )</h1>
                                        <p>To inform this project, we employed a comprehensive research approach, including <strong>field research</strong>, <strong>desktop research</strong>, <strong>user interviews</strong>, and <strong>consultations with AI experts</strong>.</p>
                                    </Col>
                                    <Col xs={12} className="py-3">
                                        <h2>Target Population</h2>
                                        <p>Incarcerated individuals using tablets as a learning tool in facilities.</p>
                                    </Col>
                                    <Col xs={12} className="py-3">
                                        <div className="div-FS-research">
                                            <h2>Field Research: Meeting returning citizens in person</h2>
                                            <h3><strong>Goal</strong></h3>
                                            <p>Access Flikshop School of Business's program to inform LMS development for incarcerated reintegration.</p>
                                            <h2><strong>Insights</strong></h2>
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
                                        <div className="div-FS-research">
                                            <h2>User Interview</h2>
                                            <p>To gain a deeper understanding of the challenges  incarcerated people face, we conducted interviews with 4 formerly incarcerated people.  Since none of us had firsthand experience, these interviews were crucial in identifying important considerations for our design.</p>
                                            <h2><strong>Goal</strong></h2>
                                            <p>Explore learning experiences, resources, and career preparation experiences in correctional facilities.</p>
                                            <img src={FSr_1} className="img-fluid pb-4"></img>
                                            <h2><strong>Insights</strong></h2>
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

                                        <div className="div-FS-research">
                                            <h2>AI Expert Interview</h2>
                                            <p>To optimize our AI integration within the LMS system, we conducted AI Expert interviews to understand the potential benefits and drawbacks of AI in the LMS system.</p>
                                            <h2><strong>Goal</strong></h2>
                                            <p>Identify opportunities for AI-powered LMS to address the challenges faced by learners in correctional facilities, despite the inherent difficulties of implementing such technology in this environment.</p>
                                            <img src={FSr_3} className="img-fluid pb-4"></img>
                                            <h2><strong>Insights</strong></h2>
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
                                </Row>
                            </Container>
                            <Container fluid>

                            </Container>
                        </>)
                },
                //Design Process Flikshop
                {
                    condition: content.designprocessFS,
                    content: (
                        <Container className="custom-container">
                            <Row className="py-c">
                                <Col xs={12} className="">
                                    <h1 className="mb-5">DESIGN SPRINT</h1>
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
                        </Container>
                    )
                },
                //CHGH PROCESS01
                {
                    condition: content.process1,
                    content: (
                        <>
                            <Container className="custom-container">
                                <Row className="py-c pb-0">
                                    <Col xs={12} className="">
                                        <h2 className="">PROCESS 01</h2>
                                        <h1 className="mb-5">Stakeholder Analysis & Content Management Requirements</h1>
                                        {/* <MyTimeline /> */}

                                        <div className="py-3">
                                            <h2 className="text-p-deepnavy">SITUATION</h2>
                                            <p>It all started when our hospital was about to open its shiny new International Medical Center (IMC). The IMC team wanted a fresh, modern website - and honestly, this got everyone thinking "Hey, our main hospital website is 10 years old... maybe it's time for an upgrade?"</p>
                                            <p>Here's where it got interesting:
                                                <ul>
                                                    <li>The IMC team wanted to manage their own content (makes sense, they know their stuff best)</li>
                                                    <li>Then other hospital divisions jumped in saying "We want that too!"</li>
                                                    <li>Meanwhile, the main hospital website needed updates, but there wasn't actually anyone officially in charge of managing it</li>
                                                    <li>Everyone wanted the power to update their content whenever they needed, but someone (that's us in IT) still needed to keep the whole thing from going off the rails</li>
                                                </ul>
                                            </p>
                                        </div>
                                        <div className="py-3">
                                            <h2 className="text-p-deepnavy">USER RESEARCH</h2>
                                            <div className="font-body"><strong>User Research Goals</strong></div>
                                            <p>
                                                <ul>
                                                    <li>Understand the content management needs across different stakeholder groups</li>
                                                    <li>Identify pain points in the current website management process</li>
                                                    <li>Map out existing content workflows</li>
                                                    <li>Determine technical requirements and authority structures for different user roles</li>
                                                </ul>
                                            </p>
                                            <div className="font-body"><strong>Research Methods</strong></div>
                                            <p>
                                                <ol>
                                                    <li>Conducted 4 Stakeholder Interviews
                                                    </li>
                                                    <li>Analyzed how the website had changed over 10 years and figured out how all the different department websites were organized
                                                    </li>
                                                </ol>
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row className="gx-3 py-3">
                                    <Col md={3}>
                                        <div className="bg-p-deepnavy p-4 text-center">
                                            <img src={eye1} className="img-fluid w-25 mb-2" alt="" />
                                            <div className="text-p-white">The International Medical Center needed autonomy to manage their specialized international patient content</div>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className="bg-p-softcream p-4 text-center h-100">
                                            <img src={eye2} className="img-fluid w-25 mb-2" alt="" />
                                            <div className="text-p-black">IT department needed to maintain overall system control and governance</div>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className="bg-p-deepnavy p-4 text-center h-100">
                                            <img src={eye3} className="img-fluid w-25 mb-2" alt="" />
                                            <div className="text-p-white">The main hospital website required frequent updates but lacked dedicated content managers</div>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className="bg-p-softcream p-4 text-center h-100">
                                            <img src={eye4} className="img-fluid w-25 mb-2" alt="" />
                                            <div className="text-p-black">Individual hospital divisions requested direct control over their departmental content</div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            <Container className="custom-container">
                                <Row className="py-c pt-5">
                                    <Col xs={12} className="">
                                        <div className="">
                                            <h2 className="text-p-deepnavy">CONSTRAINTS</h2>
                                            <p>User research was hampered by limited access to busy medical staff, making interviews and follow-ups difficult. The research scope was also limited, preventing full documentation of content update processes across all departments and missing input from some key areas due to scheduling conflicts. Crucially, there was no direct feedback from the public or patients, no usability testing on the old website, and limited data on how different user groups used it, including analytics on popular features. These limitations forced me to make assumptions based on incomplete information, adding risk to the project planning.</p>
                                        </div>

                                    </Col>
                                </Row>
                            </Container>
                        </>
                    )
                },
                //CHGH PROCESS02
                {
                    condition: content.process2,
                    content: (
                        <>
                            <Container className="custom-container">
                                <Row className="py-c gx-md-3">
                                    <Col xs={12} className="">
                                        <h2 className="">PROCESS 02</h2>
                                        <h1 className="mb-5">Rebuilding the Content Foundation & Sketch</h1>
                                        <p>Reorganizing the website's content, decided who would be allowed to edit different sections, and established clear boundaries between those sections. And Sketched!</p>
                                    </Col>
                                    <Col md={6} className="py-3">
                                        <img src={chghia} className="img-fluid"></img>
                                    </Col>
                                    <Col md={6} className="py-3">
                                        <img src={chghsketch} className="img-fluid"></img>
                                    </Col>
                                </Row>
                            </Container>
                        </>
                    )
                },
                //CHGH PROCESS03
                {
                    condition: content.process1,
                    content: (
                        <>
                            <Container className="custom-container">
                                <Row className="py-c pb-0">
                                    <Col xs={12} className="">
                                        <h2 className="">PROCESS 03</h2>
                                        <h1 className="mb-5">Iterations & Cross-Division Stakeholder Meeting</h1>
                                        <div className="py-3">
                                            <h2 className="text-p-deepnavy">SITUATION</h2>
                                            <p>My first major design review happened at the mid-fidelity prototype stage with our medical director, who was the key decision-maker. This meeting revealed significant gaps in our stakeholder engagement process and highlighted conflicting needs across departments. We needed to quickly pivot to a more inclusive feedback process while balancing various departmental priorities.
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row className="gx-3 py-3">
                                    <Col md={4}>
                                        <div className="bg-p-white p-4 text-center h-100">
                                            <div className="mb-2"><strong >Initial Design Review</strong></div>
                                            <div className="text-p-deepnavy">Showed a low-fidelity version of the new website to the medical director, wrote down the main problems and disagreements, and figured out what needed big changes.</div>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="bg-p-white p-4 text-center h-100">
                                            <div className="mb-2"><strong>Cross-Departmental Engagement</strong></div>
                                            <div className="text-p-deepnavy">Held a meeting with over 80 people from different departments, found disagreements between what the medical director wanted and what users needed, and wrote down all the different priorities and requirements.</div>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="bg-p-white p-4 text-center h-100">
                                            <div className="mb-2"><strong>Design Iteration</strong></div>
                                            <div className="text-p-deepnavy">Found a balance between what the medical director wanted and what the departments needed based on the feedback, and made compromises to work for different groups of users.</div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            <Container className="custom-container">
                                <Row className="py-3">
                                    <Col xs={12} className="py-3">
                                        <div className="">
                                            <h2 className="text-p-deepnavy">CONSTRAINTS</h2>
                                            <p>Late involvement from the medical director, who wasn't included in early design phases, led to significant rework after initial decisions were made without their input. Resource constraints meant the same person served as both designer and developer, limiting time for user testing and preventing thorough validation due to tight deadlines. Managing feedback from over 80 departments simultaneously proved challenging, especially with conflicting requirements between leadership and end-users, forcing the team to balance competing priorities under time pressure.</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="py-c pt-3">
                                    <Col xs={12}>
                                        <img src={chghiteration} className="img-fluid"></img>
                                    </Col>
                                </Row>
                            </Container>
                        </>
                    )
                },
                //CHGH PROCESS04
                {
                    condition: content.process1,
                    content: (
                        <>
                            <Container className="custom-container">
                                <Row className="py-c pb-0">
                                    <Col xs={12} className="">
                                        <h2 className="">PROCESS 04</h2>
                                        <h1 className="mb-5">Development & Project Crisis Management</h1>
                                        <div className="py-3">
                                            <h2 className="text-p-deepnavy">SITUATION</h2>
                                            <p>As the sole front-end developer working alongside two back-end developers and a database engineer, our in-house development was suddenly threatened with outsourcing. This created an urgent need to prove our team's value while managing increasing pressure for rapid deployment.
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row className="gx-3 py-3">
                                    <Col md={4}>
                                        <div className="bg-p-softcream p-4 text-center h-100">
                                            <div className="mb-2"><strong >Built Initial Development Framework</strong></div>
                                            <div className="text-p-deepnavy">Led the front-end development, worked with the back-end team to set development priorities, and created connections between the front-end and the database.</div>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="bg-p-softcream p-4 text-center h-100">
                                            <div className="mb-2"><strong>Project Defense Strategy</strong></div>
                                            <div className="text-p-deepnavy">Compared the costs and benefits of doing the work in-house versus hiring  outsourcing, calculated how much money had already been spent on the project, showed the director that out team understood the hospital's systems well, and made a case for keeping the development work in-house.</div>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="bg-p-softcream p-4 text-center h-100">
                                            <div className="mb-2"><strong>Accelerated Development</strong></div>
                                            <div className="text-p-deepnavy">Accelerated the development schedule to show progress quickly, focused on building features people could see right away, and sped up the release to meet the director's expectations.</div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            <Container className="custom-container">
                                <Row className="py-c pt-3">
                                    <Col xs={12} className="py-3">
                                        <div className="">
                                            <h2 className="text-p-deepnavy">CONSTRAINTS</h2>
                                            <p>The project faced significant resource limitations, with only one front-end developer and a small team tackling a large-scale undertaking, compounded by an accelerated timeline that limited proper testing. Constant political pressure from the threat of outsourcing required the team to continuously demonstrate their value and deliver immediate results. This pressure, combined with the limited timeframe, led to technical compromises, including a rushed deployment without adequate testing and prioritization of speed over perfection.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </>
                    )
                },
                //CHGH DESIGN HIGHLIGHTS
                {
                    condition: content.success,
                    content: (
                        <>
                            {content.hasOwnProperty('success') &&
                                (
                                    <>
                                        <Container className="custom-container">
                                            <Row className="py-c pb-0">
                                                <Col xs={12} className="mb-5">
                                                    <h1>DESIGN HIGHLIGHTS & KEY CONSIDERATIONS</h1>
                                                </Col>
                                                <Col xs={12}>
                                                    <p>My design prioritized intuitive navigation and efficient content management. Users could customize their website's features through a flexible menu system, while a convenient shortcut button enabled quick department switching. To distinguish the department's website while maintaining brand consistency, I implemented a sidebar menu instead of the hospital's standard top bar navigation.
                                                        On the other hand, the administrative interface presented crucial information in clear, tabulated layouts for easy editing, complemented by a distraction-free design that paired simple icons with descriptive text. For enhanced content flexibility, users had access to a comprehensive text editor, allowing them to create and modify detailed content as needed.
                                                        <a href="https://www.chgh.org.tw/Index.aspx" target="_blank" className="ms-2 text-decoration-none">Go to Cheng Hsin General Hospital</a></p>
                                                </Col>
                                            </Row>
                                        </Container>
                                        <Container className="py-c pt-5">
                                            <Row className="mb-5">
                                                <Col md={9}>
                                                    <img src={chghRWD} className="img-fluid"></img>
                                                </Col>
                                                <Col md={3} className="my-auto">
                                                    <div class="p-3 bg-p-white rounded-4 img-explanation-container">The user interface is fully responsive, seamlessly adapting between desktop and mobile views as demonstrated in the provided layouts. Bootstrap's robust grid system and pre-built components significantly streamline development while providing reliable responsive breakpoints.</div>
                                                </Col>
                                            </Row>
                                            <Row className="mb-5">
                                                <Col md={9}>
                                                    <img src={chghlanguage} className="img-fluid"></img>
                                                </Col>
                                                <Col md={3} className="my-auto">
                                                    <div class="p-3 bg-p-white rounded-4 img-explanation-container">Language selection is available in the upper right corner throughout the site. Each language version has its own dedicated page that editors can manage independently. If a user switches to a language where the current page isn't available, they'll automatically return to their previous page. This approach allows for flexible content management while maintaining a seamless user experience.</div>
                                                </Col>
                                            </Row>
                                            <Row className="mb-5">
                                                <Col md={9}>
                                                    <img src={chghmenu} className="img-fluid"></img>
                                                </Col>
                                                <Col md={3} className="my-auto">
                                                    <div class="p-3 bg-p-white rounded-4 img-explanation-container">The management system allows users to tailor their division website's menu structure according to their needs. Administrators can easily add, remove, or rearrange menu items such as events, research publications, contact information, and other content modules through an intuitive interface. This flexibility ensures each website can be customized to reflect its specific purpose and content requirements without requiring technical expertise.</div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </>
                                )
                            }
                        </>
                    )
                },
                //LMSAP DESIGN HIGHLIGHTS
                {
                    condition: content.LMSAPdesign,
                    content: (
                        <>
                            {content.hasOwnProperty('LMSAPdesign') &&
                                (
                                    <>
                                        <Container className="custom-container">
                                            <Row className="py-c pb-0">
                                                <Col xs={12} className="mb-5">
                                                    <h1>KEY FEATURES</h1>
                                                    <p>This design focuses on two main components:<br />
                                                        <strong>Course Creation</strong> and <strong>Performance Metrics</strong></p>
                                                </Col>
                                                <Col xs={12}>
                                                    <h3>01</h3>
                                                    <h2>Course Creation</h2>
                                                    <p>Start by viewing the courses overview and dive into the process of creating a new course as an instructor.</p>
                                                </Col>
                                            </Row>
                                        </Container>
                                        <Container className="py-c pt-5">
                                            <Row className="mb-5">
                                                <Col md={9}>
                                                    <img src={lmsap_courses} className="img-fluid"></img>
                                                </Col>
                                                <Col md={3} className="my-auto">
                                                    <div class="p-3 bg-p-white rounded-end-4 img-explanation-container orange">
                                                        Visual representation of courses displays key information at a glance.
                                                        <hr className="text-black-50"></hr>
                                                        Users can filter courses by status to maintain a structured and organized view.
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row className="mb-5">
                                                <Col md={9}>
                                                    <video width="auto" autoPlay loop muted>
                                                        <source src={lmsap_video_coursestructure} type="video/mp4" />
                                                    </video>
                                                </Col>
                                                <Col md={3} className="my-auto">
                                                    <div class="p-3 bg-p-white rounded-end-4 img-explanation-container orange">
                                                        <div className="mb-1"><strong>Outline Definition</strong></div>
                                                        Users can define the outline of their classes before generating the course content, ensuring a systematic and organized approach.
                                                        <hr className="text-black-50"></hr>
                                                        <div className="mb-1"><strong>Module Types</strong></div>
                                                        The platform supports three types of course modules: Video, Reading, and Quiz. Users can specify the number of lessons and the modules within each lesson.
                                                        <hr className="text-black-50"></hr>
                                                        <div className="mb-1"><strong>Sorting Functionality</strong></div>
                                                        A drag-and-drop feature enables users to reorder modules effortlessly by dragging the left-aligned button, ensuring a seamless organization of content.
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row className="mb-5">
                                                <Col md={9}>
                                                    <img src={lmsap_coursestructurecollapse} className="img-fluid"></img>
                                                </Col>
                                                <Col md={3} className="my-auto">
                                                    <div class="p-3 bg-p-white rounded-end-4 img-explanation-container orange">A collapsible sidebar maximizes the content editing area. Even when collapsed, it displays a progress bar, helping users track their work stages and maintain context.</div>
                                                </Col>
                                            </Row>
                                            <Row className="mb-5">
                                                <Col md={9}>
                                                    <img src={lmsap_preview} className="img-fluid"></img>
                                                </Col>
                                                <Col md={3} className="my-auto">
                                                    <div class="p-3 bg-p-white rounded-end-4 img-explanation-container orange">The preview page functions as a simulator, displaying the content instructors have just edited in the student view on a tablet. This allows instructors to see exactly how the course content will appear to learners.</div>
                                                </Col>
                                            </Row>
                                        </Container>
                                        <Container className="custom-container">
                                            <Row className="pb-0">
                                                <Col xs={12}>
                                                    <h3>02</h3>
                                                    <h2>Performance Metrics</h2>
                                                    <p>The platform provides two features for performance review: a <strong>Platform-Wide Dashboard</strong> and <strong>Individual Learner Reports.</strong></p>
                                                </Col>
                                            </Row>
                                        </Container>
                                        <Container className="py-c pt-5">
                                            <Row className="mb-5">
                                                <Col md={9}>
                                                    <video width="auto" autoPlay loop muted>
                                                        <source src={lmsap_video_dashboard} type="video/mp4" />
                                                    </video>
                                                </Col>
                                                <Col md={3} className="my-auto">
                                                    <div class="p-3 bg-p-white rounded-end-4 img-explanation-container orange">
                                                        <div className="mb-1"><strong>Comprehensive Overview</strong></div>
                                                        A centralized dashboard provides a holistic view of learning and reentry data across the entire platform. This includes key metrics such as course completion rates, learner engagement, and reentry success indicators.
                                                        <hr className="text-black-50"></hr>
                                                        <div className="mb-1"><strong>Stakeholder Alignment</strong></div>
                                                        The dashboard aligns diverse stakeholder perspectives by presenting data that connects educational interventions to meaningful outcomes under the learning and reentry tabs, allowing stakeholders to easily access the data most relevant to them.
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row className="mb-5">
                                                <Col md={9}>
                                                    <video width="auto" autoPlay loop muted>
                                                        <source src={lmsap_video_learner} type="video/mp4" />
                                                    </video>
                                                </Col>
                                                <Col md={3} className="my-auto">
                                                    <div class="p-3 bg-p-white rounded-end-4 img-explanation-container orange">
                                                        <div className="mb-1"><strong>Personalized Insights</strong></div>
                                                        Detailed reports for each learner showcase their growth and progress over time, highlighting individual achievements and reflections. These reports track and visualize key metrics such as course completion, skill development, and engagement levels, providing a clear picture of each learner's journey.
                                                        <hr className="text-black-50"></hr>
                                                        <div className="mb-1"><strong>Facility Impact Assessment</strong></div>
                                                        These reports are crucial for facility administrators to understand the effectiveness of their educational programs in supporting reentry success. By monitoring individual learner performance, facilities can demonstrate their commitment to rehabilitation and positive outcomes.
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </>
                                )
                            }
                        </>
                    )
                },
                //LMSAP RESEARCH
                {
                    condition: content.LMSAPresearch,
                    content: (
                        <>
                            {content.hasOwnProperty('LMSAPresearch') &&
                                (
                                    <>
                                        <Container className="custom-container">
                                            <Row className="py-c pb-0">
                                                <Col xs={12} className="mb-5">
                                                    <h1>RESEARCH + DISCOVERY </h1>
                                                    <p>We conducted competitor analysis and user interviews to understand how existing solutions meet user needs and where opportunities exist for improvement. Our interviews helped us identify and organize key metrics for the dashboard through an iterative process based on user needs. Here's how we approached it:</p>
                                                </Col>
                                                {/* <Col xs={12}>
                                                    <h3>01</h3>
                                                    <h2>Course Creation</h2>
                                                    <p>Start by viewing the courses overview and dive into the process of creating a new course as an instructor.</p>
                                                </Col> */}
                                            </Row>
                                        </Container>
                                        <Container className="py-c pt-5">
                                            {/* <ScrollContentSection></ScrollContentSection> */}
                                            <Row className="mb-5">
                                                <Col md={9}>
                                                    <img src={lmsap_research_interview_insights} className="img-fluid"></img>
                                                </Col>
                                                <Col md={3} className="my-auto">
                                                    <div class="p-3 bg-p-white rounded-end-4 img-explanation-container orange">
                                                        <div className="mb-1"><strong>01</strong></div>
                                                        <div className="mb-1"><strong>Role Identification and Persona Creation</strong></div>
                                                        We defined the core system roles, including educators and facility administrators. For each role, we created detailed personas with background information, goals, challenges, and needs. These personas guided our design decisions to ensure the LMS would serve each user effectively.
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row className="mb-5">
                                                <Col md={9}>
                                                    <img src={lmsap_research_persona1} className="img-fluid"></img>
                                                </Col>
                                                <Col md={3} className="my-auto">
                                                    <div class="p-3 bg-p-white rounded-end-4 img-explanation-container orange">
                                                        <div className="mb-1"><strong>01</strong></div>
                                                        <div className="mb-1"><strong>Junior Class Instructor</strong></div>
                                                        Junior class instructors want to see the impact of their teaching on learners, including both immediate outcomes and the ultimate goal of reentry success.
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row className="mb-5">
                                                <Col md={9}>
                                                    <img src={lmsap_research_persona2} className="img-fluid"></img>
                                                </Col>
                                                <Col md={3} className="my-auto">
                                                    <div class="p-3 bg-p-white rounded-end-4 img-explanation-container orange">
                                                        <div className="mb-1"><strong>01</strong></div>
                                                        <div className="mb-1"><strong>Senior Correctional Facility Educator</strong></div>
                                                        As a senior facility educator, I'm concerned about the state of data collection in our facility.  While I know education improves outcomes, we need better systems for tracking and demonstrating that progress.
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row className="mb-5">
                                                <Col md={9}>
                                                    <img src={lmsap_research_metrics} className="img-fluid"></img>
                                                </Col>
                                                <Col md={3} className="my-auto">
                                                    <div class="p-3 bg-p-white rounded-end-4 img-explanation-container orange">
                                                        <div className="mb-1"><strong>02</strong></div>
                                                        <div className="mb-1"><strong>Metrics Review and Stakeholder Collaboration</strong></div>
                                                        Using our established roles and personas, we evaluated which metrics mattered most for each role. We held in-depth discussions with stakeholders to align these metrics with their goals and priorities.
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>

                                    </>
                                )
                            }
                        </>
                    )
                },
                //LMSAP DESIGN PROCESS
                {
                    condition: content.LMSAPdesignprocess,
                    content: (
                        <Container className="custom-container">
                            <Row className="py-c pb-0">
                                <Col xs={12} className="mb-5">
                                    <h1>DESIGN PROCESS</h1>
                                    <p>We ran two design sprints to address the challenge</p>
                                </Col>
                            </Row>
                            <Row className="gx-0 mb-md-3 pt-5">
                                <Col md={8} xs={12}>
                                    <img src={lmsap_design_mapping} className="img-fluid"></img>
                                </Col>
                                <Col md={4} className="d-none d-md-flex">
                                    <div className="p-3 bg-p-white text-P-orange d-flex align-items-center justify-content-center">
                                        <div className="text-start">
                                            <h1>Mapping</h1>
                                            We chose our target within the entire customer journey
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="gx-0 mb-md-3 pt-3">
                                <Col md={8} xs={12}>
                                    <img src={lmsap_design_sketch} className="img-fluid"></img>
                                </Col>
                                <Col md={4} className="d-none d-md-flex">
                                    <div className="p-3 bg-p-white text-P-orange d-flex align-items-center justify-content-center">
                                        <div className="text-start">
                                            <h1>Sketch</h1>
                                            My solution to compete in the upcoming Deicde
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="gx-0 mb-md-3 pt-3">
                                <Col md={8} xs={12}>
                                    <img src={lmsap_design_decide} className="img-fluid"></img>
                                </Col>
                                <Col md={4} className="d-none d-md-flex">
                                    <div className="p-3 bg-p-white text-P-orange d-flex align-items-center justify-content-center">
                                        <div className="text-start">
                                            <h1>Decide</h1>
                                            Top voted sketch and the voting platform
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="gx-0 mb-md-3 pt-3">
                                <Col md={8} xs={12}>
                                    <img src={lmsap_design_prototype} className="img-fluid"></img>
                                </Col>
                                <Col md={4} className="d-none d-md-flex">
                                    <div className="p-3 bg-p-white text-P-orange d-flex align-items-center justify-content-center">
                                        <div className="text-start">
                                            <h1>Prototype</h1>
                                            Prototypes of the Learning Dashboard
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="gx-0 mb-md-3 pt-3 py-c">
                                <Col md={8} xs={12}>
                                    <img src={lmsap_design_test} className="img-fluid"></img>
                                </Col>
                                <Col md={4} className="d-none d-md-flex">
                                    <div className="p-3 bg-p-white text-P-orange d-flex align-items-center justify-content-center">
                                        <div className="text-start">
                                            <h1>Test</h1>
                                            Testing results tracking form with anonymous participants
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    )
                },
                //LMSAP Reflection
                {
                    condition: content.LMSAPreflection,
                    content: (
                        <Container className="custom-container">
                            <Row className="py-c">
                                <Col xs={12} className="mb-5">
                                    <h1>REFLECTION + NEXT STEPS</h1>
                                </Col>
                                <Col xs={12} className="">
                                    <div className="mb-2"><strong>Drawing on my experience as a web developer ……</strong></div>
                                    <p>I identified several potential implementation challenges within our design.  For example, the tablet view of the preview page presents significant implementation difficulties for developers, potentially hindering our rapid development goals.  This raises the critical question of whether this specific implementation will ultimately save time, a factor we overlooked due to a lack of direct user research.  Our current approach relies on assumptions rather than user insights.
                                    </p>
                                    <div className="mb-2"><strong>Furthermore, our user research efforts were hampered ……</strong></div>
                                    <p>by limited access to the facility.  Due to strict regulations, establishing contact requires significant time and personal connections. Consequently, some user input was gathered from individuals related to our core users, rather than the core users themselves.
                                    </p>
                                    <div className="mb-2"><strong>Here’s what we can do next ……</strong></div>
                                    <p><ul>
                                        <li>Prioritize user research: We need to prioritize direct engagement with our core users. We should explore strategies for overcoming access limitations, such as working with facility liaisons.</li>
                                        <li>Re-evaluate tablet view implementation: Given the potential implementation challenges and the question of time efficiency, we should reassess the necessity of the tablet view for the preview page. This may involve exploring alternative designs, or conducting a cost-benefit analysis.</li>
                                    </ul>
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    )
                },
                //BUSINESS OUTCOME
                {
                    condition: content.businessoutcome,
                    content: (
                        <Container className="custom-container">
                            <Row className="py-c">
                                <Col xs={12} className="mb-5">
                                    <h1>BUSINESS OUTCOME</h1>
                                </Col>
                                <Col xs={12} className="">
                                    <SafeParse content={content.businessoutcome} />
                                </Col>
                            </Row>
                        </Container>
                    )
                },
                //DONE DIFFERENTLY
                {
                    condition: content.change,
                    content: (
                        <Container className="custom-container">
                            <Row className="py-c">
                                <Col xs={12} className="mb-5">
                                    <h1>What would I have done DIFFERENTLY?</h1>
                                </Col><Col xs={12} className="">
                                    <SafeParse content={content.change} />
                                </Col>
                            </Row>
                        </Container>
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
                        <Container className="custom-container">
                            <Row className="py-c">
                                <Col xs={12} className="pt-4">
                                    <h1>Documentation Video</h1>
                                </Col><Col xs={12} className="pt-2">
                                    <Youtube videoID={content.youtube} />
                                </Col>
                            </Row>
                        </Container>
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
                        <Container className="custom-container">
                            <Row className="py-c">
                                <Col xs={12} >
                                    <h1 className="mb-5">USER FEEDBACK</h1>
                                </Col>
                                <Col xs={12} className="pt-2">
                                    <SafeParse content={content.outcome} />
                                </Col>
                            </Row>
                        </Container>
                    )
                },
                //Reflections
                {
                    condition: content.reflection,
                    content: (
                        <Container className="custom-container">
                            <Row className="py-c">
                                <Col xs={12}>
                                    <h1 className="mb-5">REFLECTION</h1>
                                </Col>
                                <Col xs={12} className="pt-2">
                                    <SafeParse content={content.reflection} />
                                </Col>
                            </Row>
                        </Container>
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

