import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import Logo from '../img/logo_v4.png' 

function Navigation() {
    return (
        <div className="navigation">
            
                <div className="logo">
                    <img alt="logo" src={Logo} />
                </div>
                <div className="menu">
                    <ReactBootStrap.Navbar collapseOnSelect expand="xl" variant="dark"> 
                    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto"> 
                        <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="#aboutme">Über mich</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="#projects">Webanwendungen</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="#skills">Skills</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="#contact">Kontakt</ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>
                    </ReactBootStrap.Navbar.Collapse>
                    </ReactBootStrap.Navbar>
                </div>
        </div>
    )
}

export default Navigation;
