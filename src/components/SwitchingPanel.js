import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import parse from "html-react-parser";
import { Container, Row, Col } from "react-bootstrap";
import FSdp_0 from '../asset/img/FS_dp0.png';
import FSdp_1 from '../asset/img/FS_dp1.png';
import FSdp_2 from '../asset/img/FS_dp2.png';
import lightbulb from '../asset/img/lightbulb.png';

const SwitchingPanel = () => {
    const [selectedContent, setSelectedContent] = useState('Initial content'); // Initial content (can be HTML)

    const handleClick = (newContent) => {
        setSelectedContent(newContent);
    };

    const contentOptions = [
        {
            id: 1, name: 'Mapping', content: `  <img src="${FSdp_0}" className="img-fluid pb-4" />
                                                <p>By mapping out how students typically use the LMS and meeting with Flikshop, we identified their main focus: <b>to prepare students for job opportunities when they are released</b>. Next, we brainstormed, organized, and voted on the ‘How Might We’ notes. We identified a key question:</p>
                                                <div className="bg-white py-1 px-2 d-flex mb-4">
                                                    <div class="me-2 my-auto"><img src="${lightbulb}" className='pb-2 lightbulb' alt='' /></div>
                                                    <div>‘How might we use AI to tell a correctional journey (Form of a Resume/ Cover Letter/ Parole Pack/ Skills) and prepare them for job opportunities?’</div>
                                                </div>` },
        {
            id: 2, name: 'Sketch', content: `<img src="${FSdp_1}" className="img-fluid pb-4" />
                                           <p>Our Sketch session yielded three core user flows: <b>Resume Building</b>, <b>Interview Preparation</b>, and <b>Personal Journey</b>. Flikshop, prioritizing practical job placement assistance for incarcerated individuals, opted to focus on the first two flows.</p>
                                           <img src="${FSdp_2}" className="img-fluid pb-4" />
                                           <p>The mix of working alone and together got the creative juices flowing!</p>`},
        {   id: 3, name: 'Decide', content: `` }
    ];

    return (
        <Row>
            <Col xs={12} md={3}>
                {contentOptions.map((option) => (
                    <button
                        key={option.id}
                        onClick={() => handleClick(option.content)}
                        className="btn btn-light d-block"
                    >
                        {option.name}
                    </button>
                ))}
            </Col>
            <Col xs={12} md={9}>
                <ContentArea content={selectedContent} />
            </Col>
        </Row>
    );
};

const ContentArea = ({ content }) => {
    return (
        <React.Fragment>{parse(content)}</React.Fragment>
    );
};

export default SwitchingPanel;