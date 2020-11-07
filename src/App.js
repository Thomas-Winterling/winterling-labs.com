import React, {useEffect} from 'react';
import './css/style.min.css'
import Header from './components/Header'
import Skillbar from './components/Skillbar'
import './helper'
import Aos from 'aos'
import "aos/dist/aos.css"
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import "leaflet/dist/leaflet.css";
import Impressum from './components/Impressum'
import Navigation from './components/Navigation'
import DataProtection from './components/DataProtection'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";




function App() {


  useEffect(() => {
    Aos.init({
      duration: 2000
    });
  }, [])

  return (
    <div className="app">

      <Router>
        <Switch>

          <Route exact path="/">
            <Header />
            <Aboutme />
            <Projects />
            <Skillbar />
            <Contact />
            <Footer />
          </Route>

          <Route path="/impressum">
            <Navigation />
            <Impressum />
            <Footer />
          </Route>
          
          <Route path="/datenschutz">
            <Navigation />
            <DataProtection />
            <Footer />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
