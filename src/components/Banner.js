import { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import bdesign from '../asset/img/designing.png';
import bcode from '../asset/img/coding.png';
import bpiano from '../asset/img/pianoing.png';
import bannerimg from '../asset/img/bannerimg.png';
import mobilebanner from '../asset/img/mobile_banner.jpg';

export const Banner = () => {
  // const [loopNum, setLoopNum] = useState(0);
  // const [isDeleting, setIsDeleting] = useState(false);
  // const [text, setText] = useState('');
  // const [imgSrc, setImgSrc] = useState('');
  // const [delta, setDelta] = useState(120 - Math.random() * 100);
  // const [index, setIndex] = useState(1);
  // const toRotate = [
  //   {
  //     txt: "I Design",
  //     img: bdesign
  //   },
  //   {
  //     txt: "I Write Codes",
  //     img: bcode
  //   },
  // ]
  // const period = 2000;

  // useEffect(() => {
  //   let ticker = setInterval(() => {
  //     tick();
  //   }, delta);

  //   return () => { clearInterval(ticker) };
  // }, [text])

  // const tick = () => {
  //   let i = loopNum % toRotate.length;
  //   let fullText = toRotate[i].txt;
  //   let updatedImg = toRotate[i].img;
  //   let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

  //   setText(updatedText);
  //   setImgSrc(updatedImg);

  //   if (isDeleting) {
  //     setDelta(prevDelta => prevDelta / 2);
  //   }

  //   if (!isDeleting && updatedText === fullText) {
  //     setIsDeleting(true);
  //     setIndex(prevIndex => prevIndex - 1);
  //     setDelta(period);
  //   } else if (isDeleting && updatedText === '') {
  //     setIsDeleting(false);
  //     setLoopNum(loopNum + 1);
  //     setIndex(1);
  //     setDelta(500);
  //   } else {
  //     setIndex(prevIndex => prevIndex + 1);
  //   }
  // }




  return (
    <section className="banner p-0" id="home">
      <Container fluid className="px-0 px-md-3">
        <Row className="gx-0 gx-md-3">
          <Col xs={12} md={5} className="bg-order-2 order-md-1">
            <div className="d-none d-md-block text-bg-p-deepnavy h-100">
              <img src={bdesign} className="img-fluid" />
            </div>
            <img src={mobilebanner} className="d-block d-md-none img-fluid" />
          </Col>
          <Col xs={12} md={7} className="order-1 order-md-2 d-flex">
            <div className="d-none d-md-flex text-bg-p-softcream w-100 d-flex align-items-center justify-content-center p-3">
              <div className="text-start">
                <div className="font-display1 mb-3">Hi, I'm Zoe Lo<br />I Craft Digital Delight</div>
                <div><strong>I turn user frustrations into intuitive interfaces,<br />
                  one pixel and line of code at a time.</strong></div>
              </div>
            </div>
            <div className="text-scroll-container d-block d-md-none text-bg-p-softcream">
              <div className="text-scroll">
                <span>I turn user frustrations into intuitive interfaces, one pixel and line of code at a time.</span>
                {/* Duplicate span for seamless loop */}
                <span>I turn user frustrations into intuitive interfaces, one pixel and line of code at a time.</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}