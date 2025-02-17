import React from 'react';
import { Row, Col } from 'react-bootstrap';
import lightbulb from '../asset/img/lightbulb.png';

// Individual feature component
const DesignFeature = ({ title, content, media, insight }) => {
    const renderMedia = (item, index) => {
        const isVideo = item.endsWith('.mp4') || item.endsWith('.webm');

        return isVideo ? (
            <video
                key={index}
                src={item}
                className='img-fluid pb-3'
                alt={`Design feature ${index + 1}`}
                autoPlay
                loop
                muted
            />
        ) : (
            <img
                key={index}
                src={item}
                className='img-fluid pb-3'
                alt={`Design feature ${index + 1}`}
            />
        );
    };

    return (
        <Col xs={12} className="pb-5">
            <h2>{title}</h2>
            <p>{content}</p>
            {media.map((item, index) => renderMedia(item, index))}
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
            <Col xs={12} className="">
                <h1 className="mb-5">DESIGN FEATURES HIGHLIGHTS</h1>
                {features.map((feature, index) => (
                    <DesignFeature
                        key={index}
                        title={`0${index + 1} : ${feature.title}`}
                        content={feature.content}
                        media={feature.media}
                        insight={feature.insight}
                    />
                ))}
            </Col>
        </Row>
    );
};

export default DesignFeatures;