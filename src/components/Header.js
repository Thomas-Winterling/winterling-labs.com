import React from 'react';
import { Icon } from 'semantic-ui-react'
import {
    Link,
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
                   
                <Link onClick={() => window.open( 'https://github.com/Thomas-Winterling')}>
                    <Icon name="github" size="huge" color="orange" bordered />
                </Link>
                
                <a href="#contact">
                    <Icon name="mail" size="huge" color="orange" bordered />
                </a>

                

                </div>
        
            </div>


        </header>
    )
}

export default Header;
