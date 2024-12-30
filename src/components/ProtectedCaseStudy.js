import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const ProtectedCaseStudy = ({
    imageUrl,
    title,
    description,
    linkTo,
    passkey = "zoelo2024",
}) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        const savedPassword = localStorage.getItem('caseStudyPassword');
        if (savedPassword === passkey) {
            navigate(linkTo);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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
        <Row className="pb-5">
            <Col md={12}>
                <div className="image-container">
                    <Link to={linkTo} className="nav-link" onClick={handleClick}>
                        <img src={imageUrl} className="img-fluid" alt={title} />
                    </Link>
                    <div className="password-overlay">
                        <div className="bg-white p-4 rounded text-center">
                            <h5 className="mb-3">Enter Password</h5>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input type="password" className="form-control" value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="" />
                                    {error && (
                                        <div className="text-danger small mt-2">{error}</div>
                                    )}
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-P-blue">
                                        Enter
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <h1 className="mt-3 mb-1">{title}</h1>
                <div>{description}</div>
            </Col>
        </Row>
    );
};

export default ProtectedCaseStudy;