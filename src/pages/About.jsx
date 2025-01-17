import { Container, Row, Col } from "react-bootstrap";
import Myimg from '../asset/img/AboutMe.JPG';
import bpiano from '../asset/img/pianoing.png';
import { Playground } from '../components/Playground';

function About() {
  return (
    <>
      <section className="bg-p-white py-4">
        <Container fluid>
          <Row className="mb-5">
            <Col xs={12} md={4} className="my-auto">
              <img id="Myimg" src={Myimg} className="img-fluid" alt="img AboutMe" />
            </Col>
            <Col xs={12} md={8} className="">
              <Row>
                <Col md={12}>
                  <h1 className="mb-3 mt-4 mt-md-0">My Journey into UX:</h1></Col>
              </Row>
              <Row className="mb-3">
                <Col xs={12} md={9}>
                  <div className="bg-p-softcream p-3 rounded-3">
                    <p className="mb-0">The Beginning 🎨<br />
                      I started out with a BFA in New Media Art - when pure art meets immersive experience and audience, user experience comes into play. I realized I could no longer just focus on what I wanted to convey, but what the audience would actually get out of it.</p>
                  </div>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col xs={12} md={3}>
                </Col>
                <Col xs={12} md={9}>
                  <div className="bg-p-softcream p-3 rounded-3">
                    <p className="mb-0">The Hospital Years 🏥<br />
                      After that, I worked as a Software Engineer and UI/UX Designer at a hospital. My target audience was now clear, but the question became - how can I really help them ease their workload? Is this interface actually needed? Maybe changing the overall process could make the whole workflow easier. I tried my best, but I knew working as the sole designer had its limits, and I needed more solid training.</p>
                  </div>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col xs={12} md={9}>
                  <div className="bg-p-softcream p-3 rounded-3">
                    <p className="mb-0">Heading to Maryland 🎓<br />
                      So I decided to pursue an MS in Human-Computer Interaction in the United States. In Maryland, I met incredible faculty, classmates, clients, and even got to be a teaching assistant for undergrad students. My lab was a design lab too, and I was constantly tweaking my teaching approach to make sure the students got the most out of it.</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={3}>
                </Col>
                <Col xs={12} md={9}>
                  <div className="bg-p-softcream p-3 rounded-3">
                    <p className="mb-0">The Bigger Picture 🌍<br />
                      Through all these experiences, I realized my true passion lies in designing meaningful, impactful experiences. I want to use my skillsets and creativity to truly contribute and make a difference. The journey continues, and I can't wait to see what the future holds!</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          {/* <Row>
            <Col xs={12} md={8} className="my-auto">
              <h1 className="mb-4">Outside of Work, you can find me:</h1>
              <p>Playing the piano in a hotel lobby 🎹<br />
                Exploring new places with my camera 🎥<br />
                Trying out and cooking new dishes 🍲</p>
            </Col>
            <Col xs={12} md={4} className="">
              <img id="BannerImg" src={bpiano} className="img-fluid" alt="Banner img" />
            </Col>
          </Row> */}
        </Container>
      </section>
      <Playground />
    </>

  );
}

export default About;