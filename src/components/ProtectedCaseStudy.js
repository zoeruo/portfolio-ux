import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const ProtectedCaseStudy = ({
    imageUrl,
    imageUrlMobile, // Add this new prop for mobile image
    title,
    year,
    description,
    linkTo,
    passkey = "zoelo2024",
}) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleContainerClick = (e) => {
        e.preventDefault();
        const savedPassword = localStorage.getItem('caseStudyPassword');
        if (savedPassword === passkey) {
            navigate(linkTo);
        }
    };

    const handleOverlayClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (password === passkey) {
            localStorage.setItem('caseStudyPassword', password);
            setPassword('');
            setError('');
            navigate(linkTo);
        } else {
            setError('Incorrect password. Please try again.');
        }
    };

    return (
        <div onClick={handleContainerClick} className="text-decoration-none cursor-pointer">
            <Row className="gx-0 mb-3 image-container">
                {/* Desktop layout */}
                <Col md={4} className="d-none d-md-flex">
                    <div className="text-bg-p-black d-flex align-items-center justify-content-center p-5 rounded-start-4">
                        <div className="text-start">
                            <h1 className="text-p-white">{title}</h1>
                            <p className="text-p-white">{year}</p>
                            <p className="text-p-white">{description}</p>
                        </div>
                    </div>
                </Col>
                <Col md={8} xs={12}>
                    {/* Desktop image */}
                    <img src={imageUrl} className="img-fluid d-none d-md-block" alt="" />

                    {/* Mobile image with overlay */}
                    <div className="position-relative d-block d-md-none">
                        <img src={imageUrlMobile || imageUrl} className="img-fluid" alt="" />
                        <div className="position-absolute top-0 start-0 w-100 h-100">
                            <div className="bg-black bg-opacity-50 w-100 h-100 d-flex align-items-center justify-content-center">
                                <div className="text-center p-4">
                                    <h1 className="text-p-white">{title}</h1>
                                    <p className="text-p-white">{year}</p>
                                    <p className="text-p-white">{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>

                {/* Password overlay */}
                <div
                    className="password-overlay rounded-4"
                    onClick={handleOverlayClick}
                >
                    <div className="bg-white p-4 rounded text-center">
                        <h5 className="mb-3">Enter Password</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder=""
                                    onClick={(e) => e.stopPropagation()}
                                />
                                {error && (
                                    <div className="text-danger small mt-2">{error}</div>
                                )}
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="btn btn-p-deepnavy"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    Enter
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Row>
        </div>
    );
};

export default ProtectedCaseStudy;