import React from 'react';
import Cookie from '../components/Cookie';
import text from '../fixtures/impressum.js';



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
            <Cookie />
            <h1>{text}</h1>
        </div>
    )
}

export default Footer;
