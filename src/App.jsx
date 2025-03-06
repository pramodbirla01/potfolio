import React from "react";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Nav/Navbar";
import Project from "./Component/Project/Project";
import Tech from "./Component/Tech_stack/Tech";
import Contact from "./Component/Contact/Contact";
import About from "./Component/About/About";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="tech">
        <Tech />
      </div>
      <div id="projects">
        <Project />
      </div>
      {/* <div id="contact">
        <Contact />
      </div> */}
      <div id="about">
        <About/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
