import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import AnimatedCursor from "react-animated-cursor"

const Layout = () => {
  return (
    <>
      {/* <AnimatedCursor
        innerSize={10}
        outerSize={10}
        color='208, 76, 254'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        outerStyle={{
         
        }}
        innerStyle={{
          
          border: '2px solid #2E213E'
        }}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          {
            target: '.cursor-lighlight',
            options: {
              innerSize: 12,
              outerSize: 12,
              color: '255, 255, 255',
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5
            }
          }
        ]}
      /> */}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;