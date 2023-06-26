import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./Componenets/Home";
import Navbar from "./Componenets/Navbar";
import Contact from "./Componenets/Contact";
import ProjectDocs from "./Componenets/Project/ProjectDocs";
import SitePictures from "./Componenets/Project/SitePictures";
import Project from "./Componenets/Project/Project";


function App() {

  return (
    <>
  <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project-details" element={<Project />} />
        <Route path="/project-documents" element={<ProjectDocs />} />
        <Route path="/site-pictures" element={<SitePictures />} />
      </Routes>
      </>
  );
}

export default App;
