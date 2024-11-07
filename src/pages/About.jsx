import { Container, Row, Col } from "react-bootstrap";
import Myimg from '../asset/img/AboutMe.JPG';
import { Playground } from '../components/Playground';

function About() {
  return (
    <>
      <section className="bg-theme">
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <img id="Myimg" src={Myimg} className="img-fluid" alt="img AboutMe" />
            </Col>
            <Col xs={12} md={8} className="my-auto">
              <h1 className="mb-4">My Journey into UX:</h1>
              <h2>The Beginning 🎨</h2>
              <p>I started out with a BFA in New Media Art - when pure art meets immersive experience and audience, user experience comes into play. I realized I could no longer just focus on what I wanted to convey, but what the audience would actually get out of it.</p>
              <h2>The Hospital Years 🏥</h2>
              <p>After that, I worked as a Software Engineer and UI/UX Designer at a hospital. My target audience was now clear, but the question became - how can I really help them ease their workload? Is this interface actually needed? Maybe changing the overall process could make the whole workflow easier. I tried my best, but I knew working as the sole designer had its limits, and I needed more solid training.</p>
              <h2>Heading to Maryland 🎓</h2>
              <p>So I decided to pursue an MS in Human-Computer Interaction in the United States. In Maryland, I met incredible faculty, classmates, clients, and even got to be a teaching assistant for undergrad students. My lab was a design lab too, and I was constantly tweaking my teaching approach to make sure the students got the most out of it.</p>
              <h2>The Bigger Picture 🌍</h2>
              <p>Through all these experiences, I realized my true passion lies in designing meaningful, impactful experiences. I want to use my skillsets and creativity to truly contribute and make a difference. The journey continues, and I can't wait to see what the future holds!</p>
            </Col>
          </Row>
          <Row>

          </Row>
        </Container>
      </section>
      <Playground/>
    </>

  );
}

export default About;