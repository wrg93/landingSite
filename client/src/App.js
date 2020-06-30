import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import Nav from './components/Nav';
import portfolio from "./portfolio.json"
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Route exact path="/">
          <About />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/portfolio">
          <Portfolio portfolio={portfolio} />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

        <Footer />
      </div>
    </Router>
     
  );
}

export default App;
