import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import TrackVisibility from 'react-on-screen';
import bdesign from '../asset/img/designing.png';
import bcode from '../asset/img/coding.png';
import bpiano from '../asset/img/pianoing.png';
import bannerimg from '../asset/img/bannerimg.png';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [delta, setDelta] = useState(120 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  // const toRotate = ["I Design,", "I Write Codes,", "I Play the Piano"];
  const toRotate = [
    {
      txt: "I Design",
      img: bdesign
    },
    {
      txt: "I Write Codes",
      img: bcode
    },
    {
      txt: "I Play the Piano",
      img: bpiano
    }
  ]
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i].txt;
    let updatedImg = toRotate[i].img;
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);
    setImgSrc(updatedImg);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner bg-theme" id="home">
      <Container>
        <Row>
          
          <Col xs={12} md={6} className="text-end">
            <img id="BannerImg" src={imgSrc} className="img-fluid" alt="Banner img" />
          </Col>
          <Col xs={12} md={6} className="my-auto">
            <h1>Hi, this is Zoe Lo</h1>
            <h1><span className="wrap">{text}</span></h1>
          </Col>
        </Row>
      </Container>
    </section>

  )
}