import React from 'react';
import MenuData from '../fixtures/menu.json'
import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";


function Header() {

    return (
        <header>

        <Router>
            <nav>
                {MenuData.map((item) => (
                    <li><a href={item.path}>{item.title}</a></li>
                ))}
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
