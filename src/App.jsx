import React from "react";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Nav/Navbar";
import Project from "./Component/Project/Project";
import Tech from "./Component/Tech_stack/Tech";
import Contact from "./Component/Contact/Contact";

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
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
