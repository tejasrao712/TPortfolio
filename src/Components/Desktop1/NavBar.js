import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TechStack from "../TechStack";
import AboutSection from "../About/AboutSection";
import myProjects from "../Projects/myProjects";
import Contact from "../Contact";



const NavBar = () => {
  return (
    <Router>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/TechStack">Tech Stack</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/about" exact component={AboutSection} />
        <Route path="/TechStack" exact component={TechStack} />
        <Route path="/Projects" exact component={myProjects} />
        <Route path="/contact" exact component={Contact} />
      </Routes>
    </Router>
  );
};

export default NavBar;