import React from 'react';
import MenuData from '../fixtures/menu.json'
import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import Logo from '../img/logo_v1.png'  
import { Nav } from 'react-bootstrap';

function Header() {

    return (
        <header>

        <Router>

            <nav>
                <div className="logo">
                    <img alt="logo" src={Logo} />
                </div>
                <div className="menu">
                <Nav className="justify-content-center" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#aboutme">Über mich</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#projects">Projekte</Nav.Link>
                        </Nav.Item>
                    <Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        </Nav.Item>
                    <Nav.Item></Nav.Item>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#contact">Kontakt</Nav.Link>
                        </Nav.Item>
                    <Nav.Item></Nav.Item>
                </Nav>
                </div>
            </nav>
        

 
            <div className="text-content">

                <div className="content-top">
    
                    <h1>IHR PARTNER FÜR DIGITALE LÖSUNGEN</h1>
                    <p>Strategie | Design | Programmierung | Marketing</p>
                
                </div>

                <div className="content-bottom">
                   
                    <Link to="/">
                        <Icon name="github" size="huge" color="orange" bordered />
                    </Link>
                        
                    <Link to="#contact">
                        <Icon name="mail" size="huge" color="orange" bordered />
                    </Link>

                </div>

                {/* Topbutton  arrow up */}
                <div className="contact_button">
                    
                    <Link>
                        <Icon name="angle double down" size="huge" color="orange" bordered/>
                    </Link>
                   
                </div>
        
            </div>

            </Router>

        </header>
    )
}

export default Header;
