// import logo from './logo.svg';
// import './App.css';
// // import NavBAR from './components/Navbar/index';
// import { NavBar } from './components/NavBar';
// import { Banner } from './components/Banner';
// // import { BrowserRouter as Router, Routes, Route }
// //     from 'react-router-dom';
// // import About from './pages/About';
// import 'bootstrap/dist/css/bootstrap.min.css';



// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       <Banner />

//     </div>

//   );
// }

// export default App;

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor"
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import RedFlagsOut from "./pages/RedFlagsOut";
import ProjectDetail from "./pages/ProjectDetail";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ScrollToTop from "./components/ScrollToTop";
// import ReactGA from 'react-ga';
// ReactGA.initialize('348406288');
// ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="RedFlagsOut" element={<RedFlagsOut />} /> */}
          <Route path="ProjectDetail/:title" element={<ProjectDetail />} />
          {/* <Route path="*" element={<NoPage />} /> */}
          <Route path="asset/Resume.pdf"/>
        </Route>
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
