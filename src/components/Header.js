import React from 'react';
import { Icon } from 'semantic-ui-react'
import {
    Link
  } from "react-router-dom";
import Navigation from '../components/Navigation'

function Header() {

    return (
        <header>

            <Navigation />
        
            <div className="text-content">

                <div className="content-top">
    
                    <h1>IHR PARTNER FÜR DIGITALE LÖSUNGEN</h1>
                    <p>Strategie | Design | Programmierung | Marketing</p>
                
                </div>

                <div className="content-bottom">
                   
                    <Link to="/">
                        <Icon name="github" size="huge" color="orange" bordered />
                    </Link>
                        
                    <Link href="#contact" to="#contact">
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


        </header>
    )
}

export default Header;
