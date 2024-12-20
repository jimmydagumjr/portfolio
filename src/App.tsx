import React from "react";
import Info from "./components/Info";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Info />
        <div className="contentWrapper">
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>
    </>
  );
};

export default App;
