import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom"

import NavBar from './components/Navbar'
import Home from './views/Home'
import About from './views/About'
import Education from './views/Education'
import Skills from './views/Skills'
import Contact from './views/Contact'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/Education">
          <Education />
        </Route>
        <Route exact path="/Skills">
          <Skills />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
      </div>
    </Router>
  );
}

export default App;
