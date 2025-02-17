import React, { useEffect, useRef, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import lmsap_research_interview_insights from '../asset/img/LMSAP_research_interviewinsights.jpg';
import lmsap_research_persona1 from '../asset/img/LMSAP_resrach_persona1.jpg';
import lmsap_research_persona2 from '../asset/img/LMSAP_resrach_persona2.jpg';

const ScrollContentSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentContent, setCurrentContent] = useState(0);
    const contentRef = useRef(null);
    const contentRefs = useRef([]);
  

    // Sample content data - replace with your actual content
    const contentSections = [
        {
            imgSrc: [lmsap_research_interview_insights],
            title: "01",
            subtitle: "Role Identification and Persona Creation",
            description: "We defined the core system roles, including educators and facility administrators. For each role, we created detailed personas with background information, goals, challenges, and needs. These personas guided our design decisions to ensure the LMS would serve each user effectively."
        },
        {
            imgSrc: [lmsap_research_persona1],
            title: "02",
            subtitle: "User Research Insights",
            description: "Through extensive interviews and surveys, we gathered valuable insights about user needs and pain points in existing LMS solutions."
        },
        {
            imgSrc: [lmsap_research_persona2],
            title: "03",
            subtitle: "Design Implementation",
            description: "We translated our research findings into practical design solutions, focusing on accessibility and user experience."
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setIsVisible(true);
                const index = contentRefs.current.indexOf(entry.target);
                setCurrentContent(index);
              } else {
                setIsVisible(false);
              }
            });
          },
          { threshold: 0.5 } // Adjust threshold as needed
        );
    
        if (contentRef.current) {
          observer.observe(contentRef.current);
        }
    
        contentRefs.current.forEach((ref) => {
          if (ref) {
            observer.observe(ref);
          }
        });
    
        return () => {
          if (contentRef.current) {
            observer.unobserve(contentRef.current);
          }
          contentRefs.current.forEach((ref) => {
            if (ref) {
              observer.unobserve(ref);
            }
          });
        };
      }, []);
    
      const { imgSrc, title, subtitle, description } = contentSections[currentContent];
    
      return (
        <div>
          {/* Fixed Background */}
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', background: 'lightgray', zIndex: -1 }}></div>
    
          {/* Content Sections */}
          {contentSections.map((_, index) => (
            <div
              key={index}
              ref={(el) => (contentRefs.current[index] = el)}
              style={{ height: '100vh', position: 'relative' }}
            ></div>
          ))}
    
          {/* Conditional Content */}
          {isVisible && (
            <div ref={contentRef} style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', maxWidth: '1200px' }}>
              <Row className="mb-5">
                <Col md={9}>
                  <img src={imgSrc} className="img-fluid" alt="Section" />
                </Col>
                <Col md={3} className="my-auto">
                  <div className="p-3 bg-p-white rounded-end-4 img-explanation-container orange">
                    <div className="mb-1"><strong>{title}</strong></div>
                    <div className="mb-1"><strong>{subtitle}</strong></div>
                    <div>{description}</div>
                  </div>
                </Col>
              </Row>
            </div>
          )}
        </div>
      );
    };

export default ScrollContentSection;