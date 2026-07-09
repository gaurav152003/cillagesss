import { Routes, Route } from "react-router-dom";

import Navbar from "./pages/Navbar";

import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contactus";
import Client from "./pages/Client";
import Projects from "./pages/Projects";
import DevelopmentSolution from "./pages/DevelopmentSolution";
import ProjectManagement from "./pages/ProjectManagement";
import CostConsultancy from "./pages/CostConsultancy";
import AlliedServices from "./pages/AlliedServices";
import ScrollToTop from "./components/Scrolltop";
import Homeautomation from "./pages/Homeautomation";
import Officeautomation from "./pages/Officeautomation";
import Hospitalityautomation from "./pages/Hospitalityautomation";
import Cillaegesone from "./pages/Cillaegesone";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/client" element={<Client />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/development-solution" element={<DevelopmentSolution />} />
        <Route path="/project-management" element={<ProjectManagement />} />
        <Route path="/cost-consultancy" element={<CostConsultancy />} />
        <Route path="/allied-services" element={<AlliedServices />} />
        <Route path="/home-automation" element={<Homeautomation />} />
        <Route path="/office-automation" element={<Officeautomation />} />
        <Route path="/cillages-one" element={<Cillaegesone />} />
        <Route
          path="/hospitality-automation"
          element={<Hospitalityautomation />}
        />
      </Routes>
    </>
  );
}

export default App;
