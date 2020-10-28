import React from 'react';
import MenuData from '../fixtures/menu.json'
import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


function Header() {

    return (
        <header>

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
                    <a href="https://github.com/CleverProgrammers/">
                        <Icon name="github" size="huge" color="orange" bordered />
                    </a>
                   
                        <Icon name="mail" size="huge" color="orange" bordered />
                   
                </div>

                {/* Topbutton  arrow up */}
                <div className="contact_button">
                    
                        <Icon name="angle double down" size="huge" color="orange" bordered/>
                   
                </div>
        
            </div>

        </header>
    )
}

export default Header;
