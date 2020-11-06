import React from 'react';
import Cookie from '../components/Cookie';
import Impressum from '../components/Impressum'
import DataProtection from '../components/DataProtection'
import { Nav } from 'react-bootstrap';



function Footer() {
   
        const date = () => {
            let dateTime = new Date();
            let year = dateTime.getFullYear();
            return year;
        }

    return (
        <div className="footer">
            <p>Copyright { date() }</p>
            <p>Winterling-labs.com</p>
            <Nav className="justify-content-center" activeKey="/impressum">
                <Nav.Item>
                    <Nav.Link href="#contact">Kontakt</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/impressum">Impressum</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="datenschutz">Datenschutz</Nav.Link>
                </Nav.Item>
            </Nav>
            <Cookie />    
        </div>
    )
}

export default Footer;
