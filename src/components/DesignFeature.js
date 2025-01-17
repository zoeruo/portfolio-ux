import React from 'react';
import { Row, Col } from 'react-bootstrap';
import lightbulb from '../asset/img/lightbulb.png';

// Individual feature component
const DesignFeature = ({ title, content, images, insight }) => {
    return (
        <Col xs={12} className="py-3">
            <h2>{title}</h2>
            <p>{content}</p>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    className='img-fluid pb-2'
                    alt={`Design feature ${index + 1}`}
                />
            ))}
            {insight && (
                <div className="bg-white py-1 px-2 d-flex">
                    <div className="me-2 my-auto">
                        <img
                            src={lightbulb}
                            className='pb-2 lightbulb'
                            alt='lightbulb icon'
                        />
                    </div>
                    <div>{insight}</div>
                </div>
            )}
        </Col>
    );
};

// Main design features component
const DesignFeatures = ({ features }) => {
    return (
        <Row className="py-c">
            <Col xs={12} className="py-3">
                <h1>DESIGN FEATURES HIGHLIGHTS</h1>
                {features.map((feature, index) => (
                    <DesignFeature
                        key={index}
                        title={`0${index + 1} : ${feature.title}`}
                        content={feature.content}
                        images={feature.images}
                        insight={feature.insight}
                    />
                ))}
            </Col>
        </Row>
    );
};

export default DesignFeatures;