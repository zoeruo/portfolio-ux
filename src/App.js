import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor"
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact"
import RedFlagsOut from "./pages/RedFlagsOut";
import ProjectDetail from "./pages/ProjectDetail";
import '../src/style.css';
import './App.css';
import ScrollToTop from "./components/ScrollToTop";
// import ReactGA from 'react-ga';
// ReactGA.initialize('348406288');
// ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    // <BrowserRouter>
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          {/* <Route path="RedFlagsOut" element={<RedFlagsOut />} /> */}
          <Route path="ProjectDetail/:title" element={<ProjectDetail />} />
          {/* <Route path="*" element={<NoPage />} /> */}
          <Route path="asset/Resume.pdf" />
        </Route>
      </Routes>
      <ScrollToTop />
    </>
    // </BrowserRouter>
  );
}

export default App;
